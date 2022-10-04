
alwaysTrue();

function alwaysTrue(){return true};

console.log(alwaysTrue());

const myAsinc = new Promise((resolve, reject)=>{
        const i = Math.floor(Math.random()*2);
        // Si está todo correcto
        if(i!=0){
            resolve()
        } else{
            reject()
        } 
})

setTimeout(()=>{
    myAsinc
    .then(()=> console.log("conexión exitosa"))
    .catch(()=>console.log("Error"))
    .finally(()=> console.log("Operación finalizada"));
}, 5000);




let id = 0;
function* automID(){
        while(id<1000){
        id++;
        if(id %2 === 0)
        return id;
        }
        yield id; //Esperando hasta que se vuelva a llamar
}


const array =[ 
    {id:0, num:1},
    {id:0, num:2},
    {id:0, num:3},
    {id:0, num:4},
    {id:0, num:5},
    {id:0, num:6}
]

array.forEach((valor)=>valor.id = automID().next().value);


console.log(array);





