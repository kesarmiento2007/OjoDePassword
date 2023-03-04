const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    contraseña.classList.toggle("vista");
    
    if(contraseña.classList.contains("vista")) contraseña.type = "text";
    else contraseña.type = "password";
});