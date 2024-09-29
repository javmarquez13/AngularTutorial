import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FileDialogService } from 'src/app/shared/services/file-dialog/file-dialog.service';
import { PdfAnalyzerService } from '../../services/pdf-analyzer/pdf-analyzer.service';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SnackBarService } from 'src/app/shared/services/snack-bar/snack-bar.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PDFObject } from 'pdf-lib';
import { PDFDocument } from 'pdf-lib';
import { OverlayRef } from '@angular/cdk/overlay';



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
            await this.renderPDF(this.selectedFile);
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
        result = true;
      } else {
        this.duplicates[field.name] = 1;
        result = false;
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



  async renderPDF(file: File) {
    try {
      const fileArrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileArrayBuffer);
      const page = pdfDoc.getPage(0);

      const { width, height } = page.getSize();
      const canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;

      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      const img = new Image();

      img.onload = () => {
        if (context) {
          context.drawImage(img, 0, 0);
          this.highlightFields();
        }
      };
      img.src = pdfDataUri;
    }
    catch (error) {
      console.error(error);
    }

  }

  highlightFields() {
    const overlay = document.getElementById('highlightOverlay');

    // Example fields to highlight
    const fields = [
      { x: 50, y: 50, width: 100, height: 30 },
      { x: 200, y: 200, width: 150, height: 30 },
    ];

    fields.forEach(field => {
      const highlightDiv = document.createElement('div');
      highlightDiv.style.left = `${field.x}px`;
      highlightDiv.style.top = `${field.y}px`;
      highlightDiv.style.width = `${field.width}px`;
      highlightDiv.style.height = `${field.height}px`;

      if (overlay) {
        overlay.appendChild(highlightDiv);
      }
    });
  }


}
