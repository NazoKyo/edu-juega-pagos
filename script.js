async function copiarTexto(idElemento, idBoton) {

    const texto = document.getElementById(idElemento).innerText;

    await navigator.clipboard.writeText(texto);

    const boton = document.getElementById(idBoton);

    const textoOriginal = boton.innerHTML;

    boton.innerHTML = "✔ Copiado";

    setTimeout(() => {

        boton.innerHTML = textoOriginal;

    }, 2000);

}

document.getElementById("btnCuenta").addEventListener("click", () => {
    copiarTexto("cuenta", "btnCuenta");
});

document.getElementById("btnClabe").addEventListener("click", () => {
    copiarTexto("clabe", "btnClabe");
});
