import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-organization-sadies218-portrait',
  standalone: false,

  templateUrl: './organization-sadies218-portrait.component.html',
  styleUrl: './organization-sadies218-portrait.component.css'
})



export class OrganizationSadies218PortraitComponent {
  form: FormGroup;
  pdfUrl: SafeResourceUrl | null = null;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.fb.group({
      campo1: ['', Validators.required],
      campo2: ['', Validators.required],
      campo3: ['', Validators.required]
    });
  }

  generarPDF() {

      const datos = {
        "file_type": "pdf",

        "file_name": "OrganizationSadies218Portrait",

        "params": {

      "generalSchoolYearAt": "52",

      "generalCommissionAt": "872",

      "ci": "05051466018"

      },
        "report_folder": "Dev/Reports",

        "report_name": "OrganizationSadies218Portrait"
      }

      console.log("Tirande peticion")
      // Cambiar por tu endpoint real
      this.http.post('http://localhost:5000/reports', datos, {
        responseType: 'blob'
      }).subscribe({

        next: (pdfBlob: Blob) => {
          const url = URL.createObjectURL(pdfBlob);
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.error = null;
        },
        error: (err) => {
          this.error = 'Error al generar el PDF. Intente nuevamente.';
          console.error('Error:', err);
        }
      });
    }

}
