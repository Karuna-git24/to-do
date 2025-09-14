import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports:[FormsModule,NgFor,NgClass,NgIf],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {

  count=signal<number>(1)

taskArray =[
  {taskName:"English", isCompleted: false,isReadOnly: true},
   
]

 onSubmit(Form:NgForm) {

  const newTask = Form.controls['newTask'].value.trim();
  
  if (!newTask) return; // Prevent empty input

  const alreadyExists = this.taskArray.some(task => task.taskName.toLowerCase() === newTask.toLowerCase());

  if (!alreadyExists) {
    this.taskArray.push({ taskName: newTask, isCompleted: false, isReadOnly: true });
  }

this.updateCount();

  Form.resetForm();
}

updateCount(){
  let arrayLength=this.taskArray.length;
  this.count.update(value =>value = arrayLength)
}
onDelete(index:number){
console.log(index);
this.taskArray.splice(index,1)
this.updateCount();

}
onEdit(index:number){
this.taskArray[index].isReadOnly= false;

}
onSave(index:number ,newTaskName: string){
this.taskArray[index].taskName=newTaskName
this.taskArray[index].isReadOnly= true;

}
onCheck(index:number){
  this.taskArray[index].isCompleted=  ! this.taskArray[index].isCompleted
console.log(this.taskArray);

}

};
 

