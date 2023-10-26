document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.requires-validation');

  form.addEventListener('submit', function(event) {
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var telefono = parseInt(document.getElementById('telefono').value);
      var carrera = document.getElementById('carrera').value;
      var edad = parseInt(document.getElementById('edad').value);
      var mensaje = document.getElementById('mensaje').value;

      let isvalid = true;

      if (!/^[a-zA-Z\s]+$/.test(nombre)) { //Invalida el campo si es distinto a a-zA-Z
        isvalid = false;
          esInvalida('nombre');
      } else {
        esValido('nombre');
      }

      if (!/^[a-zA-Z\s]+$/.test(apellido)) { //Invalida el campo si es distinto a a-zA-Z
        isvalid = false;
          esInvalida('apellido');
      } else {
        esValido('apellido');
      }

      if (isNaN(telefono) || telefono < 222222222 || telefono > 999999999) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
        isvalid = false;
          esInvalida('telefono');
      } else {
        esValido('telefono');
      }

      if (!/^[a-zA-Z\s]+$/.test(carrera)) { //Invalida el campo si es distinto a a-zA-Z
        isvalid = false;
          esInvalida('carrera');
      } else {
        esValido('carrera');
      }

      if (isNaN(edad) || edad < 17 || edad > 60) { //Invalida el campo si no es un numero o es menor a 17 o mayor a 60
        isvalid = false;
          esInvalida('edad');
      } else {
        esValido('edad');
      }

      if (mensaje.trim() === '' || /^\d+$/.test(mensaje)) { //Invalida el campo si el campo se encuentra vacio o no contiene ningun caracter de a-zA-Z o numero
        isvalid = false;
          esInvalida('mensaje');
      } else {
        esValido('mensaje');
      }

      if (!isvalid) {
          event.preventDefault(); // No envia el formulario si este contiene errores
          alert('Mensaje no enviado. Revisa los datos ingresados.')
      } else {
          alert('Datos enviados correctamente')
      }
  });
});

function esValido(fieldName) { //Funcion que establece el campo como valido junto a un mensaje en el "valid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
}

function esInvalida(fieldName) { //Funcion que establece el campo como invalido junto a un mensaje en el "invalid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');
}