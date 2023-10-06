const formulario = document.getElementById('register');
const campoNombre = document.getElementById('nombre');
const campoApellido = document.getElementById('apellidos');
const campoDireccion = document.getElementById('direccion');
const campoCCUsuario = document.getElementById('ccusuario');
const campoContraseña = document.getElementById('ccpaswd');
const campoEmail = document.getElementById('email');
const campoConfirmarPaswd = document.getElementById('confirmarpaswd');
const gastoMinimo = document.getElementById("gastoMinimo");
const gastoMaximo = document.getElementById("gastoMaximo");
const gastoMinimoValue = document.getElementById("gastoMinimoValue");
const gastoMaximoValue = document.getElementById("gastoMaximoValue");

document.getElementById('habilitarRegistro').addEventListener('change', function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = !this.checked;
  }
});

formulario.addEventListener('submit', function (event){ 
  if (campoNombre.value === '' || campoNombre.value.length > 25) {
    alert('El campo de nombre debe estar lleno y tener un máximo de 25 caracteres.');
    event.preventDefault();
  }

  if (campoApellido.value === '' || campoApellido.value.length > 25) {
    alert('El campo apellido debe estar lleno y tener un máximo de 25 caracteres');
    event.preventDefault();
  }

  const direccionRegex = /^(cll|cra|av|anv|trans)/i;
  if (!direccionRegex.test(campoDireccion.value)) {
    alert("La dirección debe comenzar con 'cll', 'cra', 'av', 'anv' o 'trans'");
    event.preventDefault();
  }

  const ccusuarioValue = campoCCUsuario.value;
  const ccusuarioRegex = /^[a-zA-Z0-9]{10,20}$/; // Corregido
  if (ccusuarioValue === '') {
    alert('El campo CCUsuario debe estar lleno');
  } else if (!ccusuarioRegex.test(ccusuarioValue)) {
    alert('El campo CCUsuario debe contener solo letras y números, con una longitud de 10 a 20 caracteres');
    event.preventDefault();
  }

  if (campoContraseña.value === '') {
    alert('El campo de contraseña no puede estar vacío.');
    event.preventDefault();
    return;
  }

  if (campoContraseña.value.length < 15 || campoContraseña.value.length > 20) { // Corregido
    alert('La contraseña debe tener entre 15 y 20 caracteres.');
    event.preventDefault();
    return;
  }

  if (!/[A-Z]/.test(campoContraseña.value)) {
    alert('La contraseña debe contener al menos una letra mayúscula.');
    event.preventDefault();
    return;
  }

  if (!/\d/.test(campoContraseña.value)) {
    alert('La contraseña contiene caracteres no permitidos.');
    event.preventDefault();
    return;
  }

  if (!/^[a-zA-Z0-9#%/&]+$/.test(campoContraseña.value)) {
    alert('La contraseña contiene caracteres no permitidos.');
    event.preventDefault();
    return;
  }

  if (campoContraseña.value !== campoConfirmarPaswd.value) {
    alert('Las contraseñas no coinciden.');
    event.preventDefault();
  }

  if (campoEmail.value === '') {
    alert('El campo E-mail no puede estar vacío.');
    event.preventDefault();
    return;
  } else if (campoEmail.value.length > 120) {
    alert('El campo E-mail no puede contener más de 120 caracteres.');
    event.preventDefault();
    return;
  }
});

gastoMinimo.addEventListener("input", () => {
  gastoMinimoValue.textContent = gastoMinimo.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

gastoMaximo.addEventListener("input", () => {
  gastoMaximoValue.textContent = gastoMaximo.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});