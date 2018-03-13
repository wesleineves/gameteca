import { Jogo } from './../../models/jogo';
import { Component } from '@angular/core';


@Component({
    selector:'cadastro-page',
    templateUrl:'cadastro.html'
    
})

export class Cadastro{

    public jogo : Jogo;

   constructor(){
     this.jogo = new Jogo();
   }
   salvar(jogoSalvar: Jogo) {
       console.log(jogoSalvar);
   }
}