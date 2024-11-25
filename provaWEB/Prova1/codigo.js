// questão 4

function gerarRelatorioAcesso(usuarioId, dataInicial, dataFinal) {
    if (dataInicial > dataFinal)
        throw new Error("Data inicial deve ser menor ou igual a data final");  
   
    let service = new AcessoRepository();
    return service.listarAcessos(usuarioId,dataInicial, dataFinal)
 }


 let f = (usuarioId, dataInicial, dataFinal) => {
    if (dataInicial > dataFinal)
        throw new Error("Data inicial deve ser menor ou igual a data final");  
  
    let service = new AcessoRepository();
    return service.listarAcessos(usuarioId,dataInicial, dataFinal)
  }

 

 

 //questões práticas

 const postagens = [
    {
      autor: {
        nome: 'João Silva',
        idade: 30,
        paisDeOrigem: 'Brasil'
      },
      texto: 'Hoje o dia está lindo!',
      curtidas: 120,
      data: new Date('2023-10-01')
    },
    {
      autor: {
        nome: 'Maria Oliveira',
        idade: 25,
        paisDeOrigem: 'Portugal'
      },
      texto: 'Acabei de ler um livro incrível.',
      curtidas: 85,
      data: new Date('2023-10-02')
    },
    {
      autor: {
        nome: 'Carlos Pereira',
        idade: 28,
        paisDeOrigem: 'Angola'
      },
      texto: 'Alguém recomenda um bom filme?',
      curtidas: 45,
      data: new Date('2023-10-03')
    },
    {
      autor: {
        nome: 'Ana Costa',
        idade: 22,
        paisDeOrigem: 'Moçambique'
      },
      texto: 'Feliz aniversário para mim!',
      curtidas: 200,
      data: new Date('2023-10-04')
    }
   ];
   
//a)

function postagemMaisCurtida(postagens){
  let maior = postagens[0];
  for (let p of postagens){
    if (p.curtidas> maior.curtidas)
      maior = p;
  }
  return maior;
}

function postagemMaisCurtida2(postagens){
    return postagens.reduce( (acumulador,valor_atual ) => acumulador.curtidas> valor_atual.curtidas ? acumulador: valor_atual )
}
//console.log(postagemMaisCurtida2(postagens));


//b
function quantidadeDePostagensPorAutor(postagens){
    let qtdePostagens = {}
    for (let p of postagens){
      if (qtdePostagens[p.autor.nome])
        qtdePostagens[p.autor.nome]++
      else
        qtdePostagens[p.autor.nome] = 1
    }
    return qtdePostagens
}
//console.log(quantidadeDePostagensPorAutor(postagens))

//c

function somatorioCurtidas(postagens){
  return postagens.reduce( (acumulador,valor_atual ) => acumulador + valor_atual.curtidas,0)
}
function somatorioCurtidas2(postagens){
  let soma = 0;
  for (let p of postagens){
     soma += p.curtidas
  }
  return soma;
}
function somatorioCurtidas3(postagens){
  let soma = 0;
   postagens.forEach( p => soma += p.curtidas
   )
  return soma;
}

console.log(somatorioCurtidas(postagens))