async function copiarTexto(idTexto, idBoton){

    const texto = document
        .getElementById(idTexto)
        .innerText;

    try{

        await navigator.clipboard.writeText(texto);

        const boton =
            document.getElementById(idBoton);

        boton.innerHTML="✔ Copiado";

        setTimeout(()=>{

            boton.innerHTML="📋 Copiar";

        },2000);

    }

    catch(error){

        alert("No fue posible copiar.");

    }

}

document
.getElementById("btnCuenta")
.addEventListener("click",()=>{

    copiarTexto("cuenta","btnCuenta");

});

document
.getElementById("btnClabe")
.addEventListener("click",()=>{

    copiarTexto("clabe","btnClabe");

});
