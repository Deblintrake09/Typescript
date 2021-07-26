enum Volumen{
    min=1,
    medio=5,
    max=10
}

let audio:number = Volumen.min;
console.log(audio);

audio = Volumen.medio;
console.log(audio);

audio = Volumen.max;
console.log(audio);

console.log(Volumen);

console.log(Volumen[5]);