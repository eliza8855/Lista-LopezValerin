import { Component, OnInit } from '@angular/core';
import { Student } from '../Commons/student.interface';
import { StudentList } from '../Commons/studentList.constant';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students = StudentList; 

  promedyGrade(student: Student): number {
    const result = (student.Math + student.Literature + student.English) / 3; 
    return result;
  }

  getGender(student: Student): string {
   return  student.gender == 'M' ? 'Masculino': 'Femenino' 
  }
  
}
