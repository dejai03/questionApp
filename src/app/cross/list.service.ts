import { Injectable, OnInit } from '@angular/core';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class ListService implements OnInit {

  isOpened: boolean = false;
  questionType: string = 'single';
  questions: Question[] = [];

  constructor() { }

  ngOnInit(){ }

  public isEmpty(): boolean{
    if(this.questions.length){
      return true;
    }
    return false;
  }
  public getQuestions(): Question[]{
    return this.questions;
  }

  public setQuestions(question:Question):void{
    this.questions.push(question);
  }
}