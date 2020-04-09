

let listarLinks = () => {
    axios.get("http://localhost:3000/url").then(respuesta => {
        console.log("Respuesta del Api")
        console.log(respuesta.data)
        let data = ""
        let lista = document.getElementById("listaLinks")
        for(let i = 0; i < respuesta.data.length; i++){
            let link = respuesta.data[i]
            data += "<tr>"
            data += `<td>${link.url}</td>`
            data += `<td>${link.nombre}</td>`
            data += `<td>${link.descripcion}</td>`
            data += `<td><button type="button" onclick = "cargarDatos(${link.idlink})" class="btn btn-primary">Editar</button></td>`
            data += `<td><button type="button" onclick = "eliminarLink(${link.idlink})" class="btn btn-primary">Eliminar</button></td>`
            data += "</tr>"
        }
        lista.innerHTML = data;
    }).catch(error => {
        console.log(error)
    })
}

listarLinks();
