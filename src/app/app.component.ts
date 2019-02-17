import { Component, OnInit } from '@angular/core';

import { ListService } from './cross/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'questionApp';
  isOpen: boolean = true;

  types = [
    {type: 'single', short:'SCQ', icon: 'radio_button_checked', description: 'Single Choice Question'},
    {type: 'multi', short:'MCQ', icon: 'check_box', description: 'Multiple Choice Question'},
    {type: 'dragNdrop', short:'DDQ', icon: 'save_alt', description: 'Drag Drop Question'}
  ];

  menus = [
    {link: 'list', name: 'List', icon:'view_headline'},
    {link: 'question', name: 'Display', icon:'question_answer'},
    {link: 'edit-list', name: 'Edit', icon:'edit'}
  ];
    
  constructor(
    public listService: ListService,
    private router: Router
    ){}

  ngOnInit(){}

  public navigateToEdit(type: string): void{
    this.router.navigate(['edit-list']);
    this.listService.questionType = type;
  }

  public navigateToList(link: string): void{
    this.router.navigate([link]);
      if(link === 'edit-list'){
        this.listService.isOpened = true;
        return;
      }
    this.listService.isOpened = false;
  }
}