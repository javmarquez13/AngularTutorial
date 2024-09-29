import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';


@Injectable({
  providedIn: 'root'
})
export class PdfAnalyzerService {

  constructor() { }


  async analyzePdf(file: File) {
    const fileArrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(fileArrayBuffer);
    const form = pdfDoc.getForm();
    const fields = form.getFields();

    return fields.map(field => ({
      name: field.getName(),
      type: field.constructor.name,
    }));
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
