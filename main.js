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
console.log(carro1, carro2)