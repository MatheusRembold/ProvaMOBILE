import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AccountService } from '../services/account.service';
import { ContactsService } from '../services/contacts.service';
import { FirebaseCRUDService } from '../services/firebase-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  chavePix?: string;
  valor?: number;
  saldoAtual?:number;
  favoritos?: any[];
  transacoes?:any[]

  constructor(private alertController: AlertController, 
    private toastController: ToastController, 
    private accountService:AccountService,
    private contactService: ContactsService,
    private firebaseService:FirebaseCRUDService) { }

  ngOnInit(): void {
    this.firebaseService.withPath("transacoes")
    this.accountService.saldo$.subscribe(
      valor => this.saldoAtual = valor
    )
    this.contactService.users$.subscribe(
      users => this.favoritos = users
    )
    this.firebaseService.getItems().subscribe(
      (data) => {
        this.transacoes = data.map((e) => ({
          key: e.key,
          ...e.payload.val(),
        }));
      })
    

    

  }

  async processarTransferencia() {
    let cpfFormatoPix = RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
    let cnpjFormatoPix = RegExp('[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}');
    let emailFormatoPix = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}');
    let telefoneFormatoPix = RegExp('[(][0-9]{2}[)][0-9]{5}-[0-9]{4}');

    let formatos: RegExp[] = [cpfFormatoPix, cnpjFormatoPix, emailFormatoPix, telefoneFormatoPix];

    let chaveValida = false;

    formatos.forEach(formato => {
      if (this.chavePix && formato.test(this.chavePix)) {
        chaveValida = true;
      }
    });

    if (!chaveValida) {
      console.log('Chave PIX inválida');
      await this.alertController.create({
        header: 'Atenção',
        message: 'A chave PIX informada é inválida.',
        buttons: ['OK']
      }).then(alert => alert.present());
    } else if (!this.valor || this.valor <= 0) {

      await this.alertController.create({
        header: 'Atenção',
        message: 'Valor da transferência inválido.',
        buttons: ['OK']
      }).then(alert => alert.present());

    } else {
      this.accountService.sacar(this.valor);
      this.firebaseService.createItem({
        valor: this.valor
      })


//notificaçao -------------

      await this.toastController.create({
        message: 'Transferência realizada com sucesso',
        duration: 2000,
        color: 'info'
      }).then(toast => toast.present());

    }





  }




}
