function toggleText(){
    // window.alert("HOla");
    let element = document.querySelector('#guadiana');
    let element1 = document.querySelector("#link");
    if (element) {
        let estado = element.getAttribute('class');
        if (estado == "hidden" ){
            element.setAttribute("class", "visible");
            element1.innerHTML="Ocultar texto";
        }else{
            element.setAttribute("class", "hidden");
            element1.innerHTML="Seguir leyendo";
        }
    }    

    // if (status){
    //     elemento.getAttribute(class)= "visible";
    //     document.getElementById("link").innerHTML="muestra";
    // }
    
    // let estado = document.getElementById("guadiana").attributes(class)
    //     if (estado == "hidden")
    //         window.alert("hidden");

    //     //   document.getElementById("guadiana").attributes(class="visible");
    //     //   document.getElementById("link").innerHTML = "Seguir leyendo";
    //     else
    //         window.alert("visible");
    //     //   document.getElementById("guadiana").attributes(class="hidden");
    //     //   document.getElementById("link").innerHTML = "Ocultar texto";
    //   }

}   
