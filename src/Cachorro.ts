import { Animal } from "./Animal"
import {IemitirSom} from "./IemitirSom"
import {deveCorrer} from "./IdeveCorrer"


export abstract class Cachorro extends Animal implements IemitirSom, deveCorrer {
    
    constructor(nome:string, idade:number){
    super(nome,idade);
    


}
    public emitirSom(): void{
        console.log(`O cachorro ${this.nome} de idade ${this.idade} emitiu um som!`);

    }

    public deveCorrer(): void{
        console.log(`O cachorro ${this.nome} de idade ${this.idade} conseguiu correr!`)
    }
    
}

