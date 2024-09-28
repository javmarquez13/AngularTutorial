import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';


interface User {
  name: string,
  email: string
}


@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    MatButton,
    MatList,
    MatListItem,
    CommonModule,
    MatTable,
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'email'];
  public usersCatalog: User[] = [];


  public selectedRow: any = null;

  ngOnInit(): void {
    this.usersCatalog = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
      { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
      { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { name: 'John Doe', email: 'john.doe@example.com' },
    ];
  }




  selectRow(row: any) {
    this.selectedRow = row;
  }
}
