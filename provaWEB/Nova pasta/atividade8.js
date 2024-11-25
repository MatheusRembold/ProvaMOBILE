function contarPalavras(frase) {
    const contagem = {};
  
    const palavras = frase.toLowerCase().split(/\s+/);
  
    palavras.forEach(palavra => {
      palavra = palavra.replace(/[^\w]/g, '');
  
      if (contagem[palavra]) {
        contagem[palavra]++;
      } else {
        contagem[palavra] = 1;
      }
    });
  
    return contagem;
  }
  

  const frase = "Ola mundo! Ola a todos. Mundo, mundo, mundo!";
  const resultado = contarPalavras(frase);
  console.log(resultado);

  