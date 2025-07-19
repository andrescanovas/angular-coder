import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { StudentTable } from "./student-table/student-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Navbar, CommonModule, StudentTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected title = 'proyectocoder';
  students: Student[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Student[]>('mocks/students.json').subscribe(data=>{
      this.students = data;
    
  })}
}
