import { Animal } from "./Animal"
import {IemitirSom} from "./IemitirSom"
import {IDeveSubir} from "./IdeveSubir"

export abstract class Preguica extends Animal implements IemitirSom, IDeveSubir{

    constructor(nome:string , idade:number){
        super(nome,idade);
    }

    public emitirSom(): void{
        console.log(`A preguiça ${this.nome} de idade ${this.idade} emitiu um som!`);

    }
    
    deveSubir(): void{
        console.log(`A preguiça ${this.nome} de idade ${this.idade} conseguiur subir na árvore!`)
    }

} 