function Converter(){
    let valorEmDolar= document.querySelector("#valor").value
    let valorEmDolarNumerico = parseFloat(valorEmDolar)
    let cotacaoDolar= 5
    let valorEmReal= valorEmDolarNumerico * cotacaoDolar
    console.log(valorEmReal)
    document.querySelector("valorConvertido").innerHTML="O resultado emreal é R$" + valorEmReal.toFixed(2)
}

