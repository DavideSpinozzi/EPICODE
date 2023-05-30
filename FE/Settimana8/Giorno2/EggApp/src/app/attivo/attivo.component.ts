import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-attivo',
  templateUrl: './attivo.component.html',
  styleUrls: ['./attivo.component.scss']
})
export class AttivoComponent implements OnInit {

  posts!: Interfaccia[];

    constructor(private postsSrv: ServiceService) {
        this.postsSrv.getPosts().then((data) => {
            this.posts = data;
            console.log(this.posts);
        });
    }

  ngOnInit(): void {
  }

}
