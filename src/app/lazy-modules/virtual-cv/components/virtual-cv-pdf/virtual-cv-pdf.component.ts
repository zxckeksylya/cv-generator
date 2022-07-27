import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { VirtualCVData } from '../../../../core/interfaces/virtual-cv.interface';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-virtual-cv-pdf',
  templateUrl: './virtual-cv-pdf.component.html',
  styleUrls: ['./virtual-cv-pdf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvPdfComponent {
  @ViewChild('invoice') public invoiceElement!: ElementRef;
  @Input() public data: VirtualCVData;

  public generatePDF(): void {
    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then(canvas => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      const PDF = new jsPDF('p', 'mm', 'a4');
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight);
      PDF.html(this.invoiceElement.nativeElement.innerHTML);
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }
}
