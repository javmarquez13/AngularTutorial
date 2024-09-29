import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { error, PDFDocument, PDFName } from 'pdf-lib';


@Injectable({
  providedIn: 'root'
})
export class PdfAnalyzerService {


  constructor(private sanitizer: DomSanitizer) { }


  async analyzePdf(file: File) {
    const fileArrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(fileArrayBuffer);
    const form = pdfDoc.getForm();
    const fields = form.getFields();


    const fieldDetails = fields.map(field => {
      const fieldDict = field.acroField.dict;
      const rect = fieldDict.get(PDFName.of('Rect'));  // Use PDFName here

      return {
        name: field.getName(),
        type: field.constructor.name,
        rect: rect,
      };
    });

    return fieldDetails;
  }

  public async previewPdfUrl(file: File): Promise<any> {

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const pdfBlobUrl = URL.createObjectURL(blob);

      return this.sanitizer.bypassSecurityTrustResourceUrl(pdfBlobUrl);
    }
    catch (error) {
      console.error(error);
      return '';
    }
  }















  public async analyzePdfForm(file: File) {
    const fileArrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(fileArrayBuffer);
    const form = (await pdfDoc).getForm();
    const fields = form.getFields();

    const fieldValues: { name: string; value: string }[] = [];
    const valueSet: Set<string> = new Set(); // To track unique values
    const duplicateFields: { name: string; value: string }[] = []; // To store duplicate fields

    fields.forEach(field => {
      const type = field.constructor.name; // Get field type
      const name = field.getName(); // Get field name
      let value = '';

      // Get value based on field type


      // Check for duplicates
      if (valueSet.has(value)) {
        duplicateFields.push({ name, value });
      } else {
        valueSet.add(value);
        fieldValues.push({ name, value });
      }
    });

    return { fieldValues, duplicateFields };
  }

}
