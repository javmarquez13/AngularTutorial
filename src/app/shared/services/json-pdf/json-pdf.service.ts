import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class JsonPdfService {

  constructor() { }

  public generatePDF(data: any): jsPDF {
    const doc = new jsPDF();

    //Title
    doc.setFontSize(18);
    doc.text('JSON Data PDF', 10, 10);


    // Add title
    const title = 'JSON Data PDF';
    doc.setFontSize(18);
    const titleWidth = doc.getTextWidth(title);
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    doc.text(title, titleX, 10);

    // Set table headers
    doc.setFontSize(12);
    const headers = ["Name", "Description"];
    const startY = 20;
    const rowHeight = 10;
    const columnWidth = 50; // Width of each column
    let yOffset = startY;

    // Draw headers
    headers.forEach((header, index) => {
      const headerWidth = doc.getTextWidth(header);
      const headerX = 10 + index * columnWidth + (columnWidth - headerWidth) / 2;
      doc.text(header, headerX, yOffset);
    });

    // Draw data rows and frames
    data.forEach((item: any, index: any) => {
      yOffset += rowHeight;
      const itemY = yOffset;

      // Draw cell borders
      doc.rect(10, itemY - rowHeight, columnWidth, rowHeight); // Name
      doc.rect(60, itemY - rowHeight, columnWidth, rowHeight); // Description
      //doc.rect(110, itemY - rowHeight, columnWidth, rowHeight); // Checked

      // Center text vertically in cells
      const textY = itemY - rowHeight / 2 + 3; // 3 is an offset for better vertical centering

      const nameWidth = doc.getTextWidth(item.name);
      const descriptionWidth = doc.getTextWidth(item.lastName);
      //const checkedWidth = doc.getTextWidth(item.checked ? '☑' : '☐');

      doc.text(item.name, 10 + (columnWidth - nameWidth) / 2, textY);
      doc.text(item.lastName, 60 + (columnWidth - descriptionWidth) / 2, textY);
      //doc.text(item.checked ? '☑' : '☐', 110 + (columnWidth - checkedWidth) / 2, textY);
    });

    // Draw frame around the table
    const totalWidth = 160; // Total width of the table
    const totalHeight = yOffset - startY + rowHeight; // Total height of the table
    doc.rect(10, startY - rowHeight, totalWidth, totalHeight); // Frame

    // Object.keys(data).forEach((key, index) => {
    //   const textLine = `${key}: ${data[key]}`;
    //   doc.text(textLine, 10, yOffset + index * 10);
    // });

    return doc;
    //const pdfBlob = doc.output('blob');
    //doc.save('data.pdf');
  }
}
