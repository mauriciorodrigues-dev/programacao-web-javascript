const carro =
{
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert('biiiiiiii') },
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é "+this.modelo;
    }
};

console.log(carro.completo());

