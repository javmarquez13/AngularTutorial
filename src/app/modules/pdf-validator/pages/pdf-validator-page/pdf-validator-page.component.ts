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
import { SafeResourceUrl } from '@angular/platform-browser';
import { PDFObject } from 'pdf-lib';


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


  public fields: { name: string; type: string; rect: any }[] = [];
  public displayedColumns: string[] = ['name', 'type'];

  public selectedRow: any = null;

  public safePdfUrl: SafeResourceUrl | null = null;

  private scaleFactor: number = 1; // Adjust this as needed
  private pdfHeight: number = 1; // Set this based on your PDF dimensions

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
        this.pdfAnalyzerService.analyzePdf(this.selectedFile).then(async (resultFields) => {
          this.fields = resultFields;
          //this.fields.push({ name: 'PartNumberPage1', type: 'PDFTextField2' })
          const result = this.checkForDuplicates();

          if (result) {
            this.snackBarService.openErrorMessage('Fields duplicated, check table to see references');
          }

          if (this.selectedFile) {
            this.safePdfUrl = await this.pdfAnalyzerService.previewPdfUrl(this.selectedFile);
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


  calculateTop(rect: any): number {
    // Convert PDF coordinate top to screen coordinates for the overlay
    return this.convertPdfYToHtmlY(rect[3]);  // Assuming rect[3] is the top coordinate
  }

  calculateLeft(rect: any): number {
    // Convert PDF coordinate left to screen coordinates for the overlay
    return this.convertPdfXToHtmlX(rect[0]);  // Assuming rect[0] is the left coordinate
  }

  calculateWidth(rect: any): number {
    // Convert width from PDF coordinates to screen width
    return Math.abs(rect[2] - rect[0]);
  }

  calculateHeight(rect: any): number {
    // Convert height from PDF coordinates to screen height
    return Math.abs(rect[3] - rect[1]);
  }

  convertPdfXToHtmlX(pdfX: number): number {
    // Convert PDF X coordinate to HTML X coordinate (this would depend on scaling)
    return pdfX * this.scaleFactor;  // You may need to calculate the scale factor
  }

  convertPdfYToHtmlY(pdfY: number): number {
    // Convert PDF Y coordinate to HTML Y coordinate (this would depend on scaling)
    return (this.pdfHeight - pdfY) * this.scaleFactor;  // Invert Y axis for HTML
  }

}
