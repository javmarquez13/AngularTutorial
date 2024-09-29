import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from 'src/app/shared/components/FormFields/input-box/input-box.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { JsonPdfService } from 'src/app/shared/services/json-pdf/json-pdf.service';
import { ApiRequestService } from 'src/app/shared/services/api-request/api-request.service';
import { jsPDF } from 'jspdf';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-design-dhr-page',
  standalone: true,
  imports: [
    CommonModule,
    InputBoxComponent,
    MatButtonModule,
    SidebarComponent
  ],
  templateUrl: './design-dhr-page.component.html',
  styleUrl: './design-dhr-page.component.css'
})
export class DesignDhrPageComponent implements OnInit {

  public doc: jsPDF = new jsPDF();
  public pdfSrc: string | ArrayBuffer | null = null;
  public safePdfUrl: SafeResourceUrl | null = null;

  constructor(private pdfService: JsonPdfService,
    private apiRequestService: ApiRequestService,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {

  }

  public generatePdfFromJson() {
    const jsonUrl = 'https://0d60209a-56a8-4c4e-ba63-82c7530b5c23.mock.pstmn.io/pdf'; // Path to your JSON file or API URL
    this.apiRequestService.fetchJsonData(jsonUrl).subscribe(
      (data) => {
        this.doc = this.pdfService.generatePDF(data);
        console.log(data);
        const pdfBlob = this.doc.output('blob');
        const pdfURL = URL.createObjectURL(pdfBlob);
        this.pdfSrc = pdfURL;
        this.setPdfUrl(pdfURL);

      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }

  setPdfUrl(pdfUrl: string) {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  }
}
