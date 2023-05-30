import { Injectable } from '@angular/core';
import { Interfaccia } from './interfaccia';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private data: Interfaccia[] = [];

  constructor() { }

  async getPosts() {
    return (await fetch('assets/db.json')).json();
}
}
