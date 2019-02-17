import { Component, OnInit } from '@angular/core';
import { ListService } from '../cross/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listQuestions = [
    'Angular',
    'HTML',
    'CSS',
    'Javascript'
  ];
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  public openSideMenu(): void{
    this.listService.isOpened = true;
  }
}
