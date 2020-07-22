function validar(){

    //variables a validar
    let rut, 
    nombre, 
    apellidos, 
    edad, 
    correo, 
    fecha, 
    hora, 
    expresionNombre, 
    expresionApellidos, 
    expresionEdad,
    expresionEmail, 
    expresionFecha;

    const especialidades = [];
    
    rut = document.getElementById("rut").value; 
    nombre = document.getElementById("nombre").value; 
    apellidos = document.getElementById("apellidos").value; 
    edad = document.getElementById("edad").value; 
    correo = document.getElementById("correo").value; 
    fecha = document.getElementById("fecha").value; 
    hora = document.getElementById("hora").value; 

    //expresiones regulares
    expresionNombre= /[a-zA-Z]/;
    expresionApellidos= /^[A-Za-z _]*[A-Za-z][A-Za-z _]*$/;
    expresionEdad=/[0-9]/;
    expresionEmail=/\w+@\w+\.+[a-z]/;
    expresionFecha=/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    // condicionales
    if (nombre === "" || apellidos === "" || edad === "" || correo === "" || fecha === "" || hora === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }else if(isNaN(rut)){
        alert("Rut ingresado es incorrecto");
        return false;
    }else if(nombre.length > 10){
        alert("El nombre es muy largo");
        return false;
    }else if(!expresionNombre.test(nombre)){
        alert("Debes ingresar un nombre valido");
        return false;
    }else if(apellidos.length > 20){
        alert("El apellido es muy largo");
        return false;
    }else if(!expresionApellidos.test(apellidos)){
        alert("Debes ingresar un apellido valido");
        return false;
    }else if(isNaN(edad)){
        alert("La edad no es valido");
        return false;
    }else if(!expresionEdad.test(edad)){
        alert("Debes ingresar una edad correcta");
        return false;
    }else if(correo.length > 100){
        alert("El correo electronico es invalido");
        return false;
    }else if(!expresionEmail.test(correo)){
        alert("Debes ingresar un correo valido, example@company.com");
        return false;
    }else if(!expresionFecha.test(fecha)){
        alert("Fecha incorrecta");
        return false;
    }else {
        alert("Gracias ha sido un éxito");
        return false;
    };
    









 











    
  


}   
































