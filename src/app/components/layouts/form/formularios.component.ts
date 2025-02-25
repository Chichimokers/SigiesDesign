import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicField } from './DynamicField';
import { Select2Data } from 'ng-select2-component';

@Component({
  standalone:false,
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormsComponent implements OnInit {
  @Input() fields: DynamicField[] = []; // Campos dinámicos
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>(); // Evento para emitir los valores del formulario

  form: FormGroup; // Formulario reactivo
  optionsMap: { [key: string]: string[] } = {}; // Mapa para almacenar opciones por ID

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({}); // Inicializa el formulario en el constructor
  }

  ngOnInit(): void {
    // Inicializa el formulario con los campos dinámicos
    this.fields.forEach(field => {
      this.form.addControl(field.id, this.fb.control(field.value || ''));

      // Si el campo depende de otro, suscríbete a los cambios del campo padre
      if (field.dependentOn) {
        this.form.get(field.dependentOn)?.valueChanges.subscribe(() => {
          this.onDependentChange(field);
        });
      }

      // Carga opciones iniciales si el campo no es dependiente
      if (!field.dependentOn) {
        const initialOptions = this.loadOptions(field);
        this.updateSelectOptions(field.id, initialOptions);
      }
    });
  }

  loadOptions(field: DynamicField): string[] {
    let options: string[] = [];

    if (!field.dependentOn) {
      if (field.url) {
        // Si el campo tiene una URL, carga las opciones desde el servidor
        this.loadOptionsFromUrl(field.url).subscribe(options => {
          this.updateSelectOptions(field.id, options);
        });
      } else {
        // Si no, usa las opciones manuales proporcionadas
        options = field.options || [];
      }
    }

    return options;
  }

  updateSelectOptions(fieldId: string, options: string[]): void {
    const control = this.form.get(fieldId);
    if (control) {
      control.setValue(''); // Reinicia el valor seleccionado
      this.optionsMap[fieldId] = options; // Almacena las nuevas opciones
    }
  }

  onDependentChange(field: DynamicField): void {
    const parentValue = field.dependentOn ? this.form.get(field.dependentOn)?.value : null;

    if (parentValue) {
      if (field.url) {

        // Si el campo tiene una URL, carga las opciones desde el servidor
        this.loadOptionsFromUrl(`${field.url}?parentValue=${parentValue}`).subscribe(options => {
          this.updateSelectOptions(field.id, options);
        });
      } else if (field.dependentOptions) {
        // Si no, usa las opciones dependientes proporcionadas
        this.updateSelectOptions(field.id, field.dependentOptions[parentValue] || []);
      }
    }
  }

  loadOptionsFromUrl(url: string): Observable<string[]> {
    return this.http.get<string[]>(url);
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Emite los valores del formulario al componente padre
      this.formSubmit.emit(this.form.value);
    } else {
      console.error('El formulario no es válido');
    }
  }
}
