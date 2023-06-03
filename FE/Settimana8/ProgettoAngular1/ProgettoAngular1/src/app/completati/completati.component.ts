import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';


@Component({
  selector: 'app-completati',
  template: `
  <div class="container mt-3">
 <div class="row justify-content-center">
        <div class="col-4">
          <ng-container *ngIf="showMessage">
            <p>Recupero Task...</p>
          </ng-container>
          <table class="table table-striped" *ngIf="!showMessage">
            <tbody>
            <ng-container *ngIf="TaskComplete(); else noTasks">
              <tr *ngFor="let todo of todos">
              <ng-container *ngIf="todo.completed">
                <th scope="row">{{ todo.id }}</th>
                <td>{{ todo.title }}</td>
                <td>
                  <div class="d-flex justify-content-end">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-x-square-fill text-danger"
                      viewBox="0 0 16 16"
                      (click)="deleteTask(todo)"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                      />
                    </svg>
                  </div>
                </td>
                </ng-container>
              </tr>
            </ng-container>
            </tbody>
          </table>
        </div>
</div>
<ng-template #noTasks>
    <p>Non ci sono task.</p>
  </ng-template>
</div>
  `,
  styles: [
  ]
})
export class CompletatiComponent implements OnInit {
  todos: Todo[] = [];
  showMessage: boolean = true;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
    this.togliMessaggioDelay();
  }

  TaskComplete(): boolean {
    return this.todos.some(todo => todo.completed);
  }

  loadTasks(): void {
    this.todoService.getTasks().then((tasks) => {
      this.todos = tasks;
    });
  }
  deleteTask(task: Todo): void {
    this.todoService.deleteTask(task);
  }

  togliMessaggioDelay(): void {
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}
