const formulario = document.getElementById('register');
const campoNombre = document.getElementById('nombre');
const campoApellido = document.getElementById('apellidos')
const campoDireccion= document.getElementById('direccion')
const campoCCUsuario = document.getElementById('ccusuario')


document.getElementById("habilitarRegistro").addEventListener("change", function() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = !this.checked;
  }
});

formulario.addEventListener('submit', function (event) {
 
  if (campoNombre.value === '' || campoNombre.value.length > 25) {
    
    alert('El campo de nombre debe estar lleno y tener un máximo de 25 caracteres.');

    event.preventDefault();
  }
  if (campoApellido.value==='' || campoApellido.value.length >25){
    alert('El campo apellido debe estar lleno y tener un máximo de 25 caracteres');
    event.preventDefault();
  }

  const direccionRegex = /^(cll|cra|av|anv|trans)/i;
  if(!direccionRegex.test(campoDireccion.value)){
    alert("La direccion debe comenzar con 'cll', 'cra', 'av', 'anv' o 'trans'")
    event.preventDefault();
  }

  const ccusuarioValue = campoCCUsuario.value;
  const ccusuarioRegex = /^[a-zA-Z0-9]{10,20}&/;
  if(ccusuarioValue===""){
    alert("El campo CCUsuario debe estar lleno")
  }else if(!ccusuarioRegex.test(ccusuarioValue)){
    alert("El campo CCUsuario debe contener solo letras y numeros, con una longitud de 10 a 20 caracteres ")
    event.preventDefault();
  }


});


