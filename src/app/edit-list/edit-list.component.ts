import { Component, OnInit } from '@angular/core';
import { ListService } from '../cross/list.service';
import { Router } from '@angular/router';
import { Question, DragElement, Bucket } from '../model/question.model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  options = [];
  elements = [];
  buckets = [];
  dragElement: DragElement;
  question: Question;
  bucketElements: Bucket[] = [];

  constructor(
    public listService: ListService, 
    private router: Router,
    private notify: NotifierService ) { }

  ngOnInit() {

  }

  public addOption(inputRef: HTMLInputElement): void{
    if(!inputRef.value){
      this.notify.notify('warning','Please enter option first');
      return;
    }
    this.options.push(inputRef.value);
  }

  public addElement(inputRef:HTMLInputElement): void{
    if(!inputRef.value){
      this.notify.notify('warning','Please enter element first');
      return;
    }
    this.elements.push(inputRef.value);
  }

  public addBucket(inputRef:HTMLInputElement): void{
    if(!inputRef.value){
      this.notify.notify('warning','Please enter bucket name first');
      return;
    }
    this.buckets.push({bucketName: inputRef.value, bucketElements:[]});
  }

  public navigateToQuestion(questionText: HTMLInputElement): void{
    
    if(this.listService.questionType !== 'dragNdrop'){
      this.question = ({
        type:this.listService.questionType, 
        option:this.options, 
        title: questionText.value
      });
    }
    if(this.listService.questionType === 'dragNdrop'){
      this.dragElement = ({
        elements:this.elements, 
        buckets: this.buckets
      });
      this.question = ({
        type:this.listService.questionType, 
        option: this.dragElement, 
        title: questionText.value
      });
    }
    if(!this.question.title){
      this.notify.notify('warning','Please enter question first');
      return;
    }
    this.listService.setQuestions(this.question);
    this.router.navigate(['question']);
  }

}
