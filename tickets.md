# Lista de Tickets

## Frontend
1. **LTI-001:** Crear el botón/enlace para añadir candidato.
   - Dependencias: Ninguna
   - Archivo: `frontend/src/App.tsx`

2. **LTI-002:** Desarrollar el formulario de ingreso de datos.
   - Dependencias: LTI-001
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

3. **LTI-003:** Implementar validación de datos.
   - Dependencias: LTI-002
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

4. **LTI-004:** Añadir funcionalidad de carga de documentos.
   - Dependencias: LTI-002
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

5. **LTI-005:** Mostrar mensaje de confirmación.
   - Dependencias: LTI-002
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

6. **LTI-006:** Manejo de errores y excepciones.
   - Dependencias: LTI-002
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

7. **LTI-007:** Asegurar accesibilidad y compatibilidad.
   - Dependencias: LTI-002
   - Archivo: `frontend/src/components/AddCandidateForm.tsx`

## Backend
1. **LTI-008:** Crear endpoint para añadir candidato.
   - Dependencias: Ninguna
   - Archivo: `backend/src/routes/candidates.ts`

2. **LTI-009:** Validar y almacenar datos del candidato.
   - Dependencias: LTI-008
   - Archivo: `backend/src/controllers/candidateController.ts`

3. **LTI-010:** Implementar carga de documentos.
   - Dependencias: LTI-008
   - Archivo: `backend/src/controllers/candidateController.ts`

4. **LTI-011:** Manejo de errores y excepciones.
   - Dependencias: LTI-008
   - Archivo: `backend/src/middleware/errorHandler.ts`

5. **LTI-012:** Asegurar seguridad y privacidad de los datos.
   - Dependencias: LTI-008
   - Archivo: `backend/src/middleware/security.ts`

## Integración
1. **LTI-013:** Conectar frontend y backend.
   - Dependencias: LTI-002, LTI-008
   - Archivo: `frontend/src/services/candidateService.ts`

2. **LTI-014:** Pruebas y validación.
   - Dependencias: LTI-013
   - Archivos: `frontend/src/tests/AddCandidateForm.test.tsx`, `backend/src/tests/candidateController.test.ts`

## Documentación
1. **LTI-015:** Actualizar documentación.
   - Dependencias: LTI-014
   - Archivo: `README.md`