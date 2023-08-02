import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p>oi</p>
    <!-- <router-outlet></router-outlet> -->
    `
})
export class AppComponent implements OnInit {

  title = 'projetos-praticos';

  constructor(public router: Router) {}
  
  public ngOnInit(): void {
    // Redireciona para o primeiro desafio
    // TODO => CRIAR PÁGINA DE BOAS VINDAS
    // TODO => CRIAR BOTÃO VOLTAR NOS DESAFIOS PARA A PÁGINA DE BOAS VINDAS
    this.router.navigate(['/todo-list']);
  }
}
