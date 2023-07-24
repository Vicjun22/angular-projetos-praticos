import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  public textoDeEntrada: string = '';
  public listaDeAfazeres: Array<string> = [];
  public conteudoArmazenamentoLocal: string | null = '';

  public ngOnInit(): void {
    this.conteudoArmazenamentoLocal = window.localStorage.getItem('todo-list');
    if (this.conteudoArmazenamentoLocal !== null) {
      this.listaDeAfazeres = JSON.parse(this.conteudoArmazenamentoLocal);
    }
  }

  public newToDo(): void {
    this.listaDeAfazeres = [this.textoDeEntrada, ...this.listaDeAfazeres];
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
    this.textoDeEntrada = '';
  }

  public removeToDo(index: number): void {
    this.listaDeAfazeres = this.listaDeAfazeres.filter((item: string) => item !== this.listaDeAfazeres[index]);
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
  }

  public removeAll(): void {
    this.listaDeAfazeres = [];
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
  }

}
