import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-inattivo',
  templateUrl: './inattivo.component.html',
  styleUrls: ['./inattivo.component.scss']
})
export class InattivoComponent implements OnInit {

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
