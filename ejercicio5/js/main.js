function addItem (){
    // contar elementos en lista 
    let liEnList = document.getElementById("lista").getElementsByTagName("li");
    let numberOfElements = liEnList.length + 1
    
    // Añadir elementos a la lista
    const node = document.createElement("li");
    const textnode = document.createTextNode("Elemento " + numberOfElements ++);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);    

}