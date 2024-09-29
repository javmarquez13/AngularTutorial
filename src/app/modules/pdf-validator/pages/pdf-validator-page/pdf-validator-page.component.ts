import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { FileDialogService } from 'src/app/shared/services/file-dialog/file-dialog.service';
import { PdfAnalyzerService } from '../../services/pdf-analyzer/pdf-analyzer.service';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SnackBarService } from 'src/app/shared/services/snack-bar/snack-bar.service';


@Component({
  selector: 'app-pdf-validator-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './pdf-validator-page.component.html',
  styleUrl: './pdf-validator-page.component.css'
})
export class PdfValidatorPageComponent {

  public selectedFile: File | null = null;
  public duplicates: { [key: string]: number } = {};


  public fields: { name: string; type: string }[] = [];
  public displayedColumns: string[] = ['name', 'type'];

  public selectedRow: any = null;

  constructor(private fileDialogService: FileDialogService,
    private pdfAnalyzerService: PdfAnalyzerService,
    private snackBarService: SnackBarService
  ) {

  }

  public async openFileDialog() {
    this.fileDialogService.openFileDialog().subscribe((result) => {
      console.log(result);
      if (result !== null) {
        this.selectedFile = result;

        //this.pdfAnalyzerService.analyzePdfForm(this.selectedFile);
        this.pdfAnalyzerService.analyzePdf(this.selectedFile).then((resultFields) => {
          this.fields = resultFields;
          this.fields.push({ name: 'PartNumberPage1', type: 'PDFTextField2' })
          const result = this.checkForDuplicates();

          if (result) {
            this.snackBarService.openErrorMessage('Fields duplicated, check table to see references');
          }
        });
      }
    });
  }


  private checkForDuplicates(): boolean {
    let result = false;
    this.duplicates = {};
    this.fields.forEach(field => {
      if (this.duplicates[field.name]) {
        this.duplicates[field.name]++;
      } else {
        this.duplicates[field.name] = 1;
        result = true;
      }
    });

    return result;
  }

  public highLightFilesDuplicated(fieldName: string): boolean {
    const count = this.fields.filter(field => field.name === fieldName).length;
    return count > 1;
  }



  public selectRow(row: any) {
    this.selectedRow = row;
  }


  public verifySnackBar() {
    this.snackBarService.openSuccessMessage("Hola mundo");
  }
}
