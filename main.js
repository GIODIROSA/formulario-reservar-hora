function validar(){

    //variables a validar
    let rut, 
    nombre, 
    apellidos, 
    edad, 
    correo, 
    fecha, 
    hora, 
    selectOption,
    expresionNombre, 
    expresionApellidos, 
    expresionEdad,
    expresionEmail, 
    expresionFecha,
    expresionRut;

    
    rut = document.getElementById("rut").value; 
    nombre = document.getElementById("nombre").value; 
    apellidos = document.getElementById("apellidos").value; 
    edad = document.getElementById("edad").value; 
    correo = document.getElementById("correo").value; 
    fecha = document.getElementById("fecha").value; 
    hora = document.getElementById("hora").value; 
    selectOption= document.getElementById("especialidad").value;


    let fechaSeparada= fecha.split("-");
    let fechaSeparadaInvertida= fechaSeparada.reverse();
    let fechaDMA= fechaSeparadaInvertida.join("-");


    //expresiones regulares
    expresionRut= /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    expresionNombre= /[a-zA-Z]/;
    expresionApellidos= /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    expresionEdad=/^[0-9]{1,2}$/;
    expresionEmail=/\w+@\w+\.+[a-z]/;
    expresionFecha=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    // condicionales
    if (nombre === "" || apellidos === "" || edad === "" || correo === "" || fecha === "" || hora === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }else if(!expresionRut.test(rut)){
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
    }else if(!expresionFecha.test(fechaDMA)){
        alert("Fecha incorrecta");
        return false;
    }else {
        boton();
        return false;
        }

       
    

// funcion click registrar
        function boton(){
            let boton01= document.getElementById("botonRegistrar");
            boton01.addEventListener("click",function(){
                let parrafo= document.createElement('p');
                parrafo.innerHTML= `Estimado(a) ${nombre} ${apellidos} y su Rut: ${rut}, su hora para ${selectOption} ha sido reservada para el día ${fechaDMA} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita.
                Gracias por preferirnos.`;
                document.body.appendChild(parrafo);
                return boton();
               
            });
        }





};
    


   




 











    
  


   
































