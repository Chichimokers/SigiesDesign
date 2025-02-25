export interface DynamicField {
  id: string; // Identificador único del campo
  label: string; // Etiqueta del campo
  type: string; // Tipo del campo ('text', 'number', 'select', etc.)
  value?: any; // Valor inicial
  url?: string | undefined ; // URL para obtener las opciones (opcional)
  options?: string[]  | []; // Opciones manuales (opcional)
  dependentOn?: string | undefined; // ID del campo del cual depende
  dependentOptions?: { [key: string]: string[] };
}
