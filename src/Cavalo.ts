import { Animal } from "./Animal"
import {IemitirSom} from "./IemitirSom"
import {deveCorrer} from "./IdeveCorrer"

export abstract class Cavalo extends Animal implements IemitirSom, deveCorrer {
    
    constructor(name:string, idade:number){
        super(name,idade);
    }
     public emitirSom(): void{
        console.log(`O cavalo ${this.nome} emitiu um som!`)
    }

    deveCorrer(): void{
    console.log(`O cavalo ${this.nome} correu!`)
}
}
