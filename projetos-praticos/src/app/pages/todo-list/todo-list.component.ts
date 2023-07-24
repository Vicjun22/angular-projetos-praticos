import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  public textoDeEntrada: string = '';
  public listaDeAfazeres: Array<{checked: boolean, toDo: string}> = [];
  public conteudoArmazenamentoLocal: string | null = '';

  public ngOnInit(): void {
    this.conteudoArmazenamentoLocal = window.localStorage.getItem('todo-list');
    if (this.conteudoArmazenamentoLocal !== null) {
      this.listaDeAfazeres = JSON.parse(this.conteudoArmazenamentoLocal);
    }
  }

  public newToDo(): void {
    this.listaDeAfazeres = [{checked: false, toDo: this.textoDeEntrada}, ...this.listaDeAfazeres];
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
    this.textoDeEntrada = '';
  }

  public removeToDo(index: number): void {
    this.listaDeAfazeres = this.listaDeAfazeres.filter((item: Object) => item !== this.listaDeAfazeres[index]);
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
  }

  public removeAll(): void {
    this.listaDeAfazeres = [];
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
  }

  public handleChangeCheckbox(index: number): void {
    const checkboxChange: boolean = !this.listaDeAfazeres[index].checked;
    const toDoChange: string = this.listaDeAfazeres[index].toDo
    const listaDeAfazeresAtualizada = this.listaDeAfazeres.map((item: {checked: boolean, toDo: string}) => {
      if (item !== this.listaDeAfazeres[index]) {
        return item;
      }
      return {checked: checkboxChange, toDo: toDoChange}
    })
    const checkboxChecked: Array<{checked: boolean, toDo: string}> = listaDeAfazeresAtualizada
      .filter((item: {checked: boolean, toDo: string}) => item.checked);
    const checkboxUnchecked: Array<{checked: boolean, toDo: string}> = listaDeAfazeresAtualizada
      .filter((item: {checked: boolean, toDo: string}) => !item.checked);

    this.listaDeAfazeres = checkboxChecked.concat(checkboxUnchecked);
    window.localStorage.setItem('todo-list', JSON.stringify(this.listaDeAfazeres));
  }

}
