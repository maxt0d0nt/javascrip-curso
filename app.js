let score = 10

if (score > 30) {
    console.log ("genial continua asi")
} else if (score > 15)
    console.log ("sigue practicando")

else {
    console.log ("ve el tutorial de nuevo")
}

let tipoDeTarjeta = "creto";

switch(tipoDeTarjeta) {
    case "debito":
        console.log("es de debito");
        break;
    case "credito":
        console.log ("es de credito");
        break;
    default:
        console.log("sin tarjeta")
}

//iterador

let count = 0

while (count <= 10) {
    console.log(count)
    count ++
}
    
// for

let nombres = ["ryan", "joe", "mary"]

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}

//funciones

function saludar(name) {
console.log(name)
console.log("hola " + name);
}

saludar("max");

function add(n1, n2){
console.log(n1 + n2)
}

add(3, 2)