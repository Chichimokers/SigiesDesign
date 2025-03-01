import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DynamicField } from '../../layouts/form/DynamicField';
@Component({
  selector: 'app-organization-sadies218-portrait',
  standalone: false,

  templateUrl: './organization-sadies218-portrait.component.html',
  styleUrl: './organization-sadies218-portrait.component.css'
})


export class OrganizationSadies218PortraitComponent {
  pdfUrl: SafeResourceUrl | null = null;
  error: string | null = null;
  fileType:string = "";
  spreadsheetData: any = null;

   fields: DynamicField[] = [
    {
      id: 'Formato',
      label: 'Formato',
      type: 'select',
      options: ['pdf', 'xls'],
      value: 'pdf',
    },


    {
      id: 'country',
      label: 'País',

      type: 'select',

      options: ['España', 'México', 'Argentina'],
      value: 'España'
    },

    {
      id: 'city',
      label: 'Ciudad',
      type: 'select',
      dependentOn: 'country',
      dependentOptions: {
        España: ['Madrid', 'Barcelona', 'Valencia'],
        México: ['Ciudad de México', 'Guadalajara', 'Monterrey'],
        Argentina: ['Buenos Aires', 'Córdoba', 'Rosario']
      }
    }
  ];
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {

  }

  handelsubmit(ss:any){
    console.log(ss);
    this.fileType = ss.Formato;

    this.generarPDF(ss.Formato);

  }


    ///EXCEEEEEEEEEEEEEEEEEL

  loadxls(file: any): void {

      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* lee el contenido binario */
        const binarystr: string = e.target.result;
        const workbook: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });
        const firstSheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[firstSheetName];
        /* Convierte la hoja a una matriz de arreglos (header + filas) */
        this.spreadsheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      };
      reader.readAsBinaryString(file);

    }

  private parseExcelFile(file: Blob) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // Convertir la hoja de cálculo a un formato compatible con ngx-spreadsheet
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      this.spreadsheetData = this.convertToSpreadsheetFormat(jsonData);

      // Limpiar preview PDF
      this.pdfUrl = null;
    };

    reader.readAsArrayBuffer(file);
  }


  private convertToSpreadsheetFormat(data: any[]): any {
    const spreadsheetData: any = {};

    data.forEach((row, rowIndex) => {
      spreadsheetData[rowIndex] = {};
      row.forEach((cell: any, colIndex: string | number) => {
        spreadsheetData[rowIndex][colIndex] = { text: cell || '' };
      });
    });

    return spreadsheetData;
  }



    ///EXCEEEEEEEEEEEEEEEEEL

  generarPDF(format:string) {

      const datos = {

        "file_type": format,

        "file_name": "OrganizationSadies218Portrait",

        "params": {

      "generalSchoolYearAt": "52",

      "generalCommissionAt": "872",

      "ci": "05051466018"

      },
        "report_folder": "Dev/Reports",

        "report_name": "OrganizationSadies218Portrait"
      }

      this.http.post('http://localhost:5000/reports', datos, {
        responseType: 'blob'
      }).subscribe({

        next: (pdfBlob: Blob) => {

          if(this.fileType == "pdf"){
            const url = URL.createObjectURL(pdfBlob);
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.error = null;
          }

          if(this.fileType =="xls"){
           this.loadxls(pdfBlob)
          }


        },
        error: (err) => {
          this.error = 'Error al generar el PDF. Intente nuevamente.';
          console.error('Error:', err);
        }
      });
    }

}
