import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  descricao: string = ''; // Campo de descrição
  valor: number | null = null; // Campo de valor
  receitas: { descricao: string; valor: number }[] = []; // Array para receitas
  despesas: { descricao: string; valor: number }[] = []; // Array para despesas
  saldo: number = 0; // Variável para armazenar o saldo total

  constructor() {}

  // Adiciona uma receita
  adicionarReceita() {
    if (this.descricao && this.valor !== null) {
      this.receitas.push({
        descricao: this.descricao,
        valor: this.valor,
      });

      // Atualiza o saldo
      this.saldo += this.valor;

      // Limpa os campos do formulário
      this.descricao = '';
      this.valor = null;
    } else {
      console.error('Preencha todos os campos!');
    }
  }

  // Adiciona uma despesa
  adicionarDespesa() {
    if (this.descricao && this.valor !== null) {
      this.despesas.push({
        descricao: this.descricao,
        valor: this.valor,
      });

      // Atualiza o saldo
      this.saldo -= this.valor;

      // Limpa os campos do formulário
      this.descricao = '';
      this.valor = null;
    } else {
      console.error('Preencha todos os campos!');
    }
  }

  getTotalReceitas(): number {
    return this.receitas.reduce((total, receita) => total + receita.valor, 0);
  }

  getTotalDespesas(): number {
    return this.despesas.reduce((total, despesas) => total + despesas.valor, 0);
  }

}