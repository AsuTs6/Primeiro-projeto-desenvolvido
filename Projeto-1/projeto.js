const button = document.getElementById("botao")
const select = document.getElementById("moeda-selecionada")

const dolar = 5.2
const euro = 5.9

const BotaoConverter = () => {
  const ValorEmReais = document.getElementById("valor-do-input").value
  const testandoReal = document.getElementById("testando-real")
  const testandoDolar = document.getElementById("testando-dolar")

  testandoReal.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(ValorEmReais)

  if (select.value === "US$ Dólar americano") {
    testandoDolar.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(ValorEmReais / dolar)
  }
  else if (select.value === "€ Euro") {
    testandoDolar.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }
    ).format(ValorEmReais / euro)
  }
}

trocaDeDolarParaEuro = () => {
  const trocaDeNome = document.getElementById("troca-de-nome")
  const trocaDeBandeira = document.getElementById("troca-de-bandeira")

  if (select.value === "€ Euro") {
    trocaDeNome.innerHTML = "Euro"
    trocaDeBandeira.src = "./euro.jpg"
  }

  else if (select.value === "US$ Dólar americano") {
    trocaDeNome.innerHTML = "Dolar americano"
    trocaDeBandeira.src = "./eua.png"
  }
  BotaoConverter()
}



button.addEventListener("click", BotaoConverter)
select.addEventListener("change", trocaDeDolarParaEuro)
