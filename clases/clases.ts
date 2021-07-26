class Avenger{
    public nombre:string;
    protected equipo: string;
    private nombreReal:string;
    private puedePelear:boolean = true;
    private peleasGanadas:number = 0; 

    constructor(nombre:string,equipo:string, nombreReal:string){
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;

    }

    public bio():void{
        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }
}

let antman:Avenger = new Avenger("Antman", "Team Cap", "Scott Lang");

console.log(antman);

//Private - Public - Protected

antman.nombre="Nick Fury";

//antman.equipo = "Ironman";   //Dan error, pues son protegidas/privadas y solo pueden accesarse desde adentro de la clase.
// antman.nombreReal = "John Bonachon"; 