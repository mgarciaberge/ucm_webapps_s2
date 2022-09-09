function toggleText(parrafo,enlace){
    window.alert(parrafo);
    window.alert(enlace);

    let element = document.querySelector('#'+parrafo+'');
    let element1 = document.querySelector('#'+enlace+'');
    if (element) {
        let estado = element.getAttribute('class');
        if (estado == "hidden" ){
            element.setAttribute("class", "visible");
            element1.innerHTML="Ocultar contenidos";
        }else{
            element.setAttribute("class", "hidden");
            element1.innerHTML="Mostrar texto";
        }

    }   
}