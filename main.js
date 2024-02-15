function Carro (nome, anoFabricacao, anoModelo){
    this.nome = nome
    this.anoFabricacao = anoFabricacao
    this.anoModelo = anoModelo
}
function Ford (nome, anoFabricacao, anoModelo){
    this.marca = "Ford"
    Carro.call(this, nome, anoFabricacao, anoModelo)
}
function Toyota (nome, anoFabricacao, anoModelo){
    this.marca = "Toyota"
    Carro.call(this, nome, anoFabricacao, anoModelo)
}
const carro1 = new Ford("New Fiesta", 2018, 2019)
const carro2 = new Toyota("Corolla", 2023, 2023)
const carro3 = new Toyota("Etyos", 2022, 2023)
const carro4 = new Ford("Ka", 2004, 2005)
console.log(carro1, carro2, carro3, carro4)