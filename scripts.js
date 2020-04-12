let listaLinks = []
let idActualizar = null

let listarLinks = () => {
    axios.get("http://localhost:3000/url").then(respuesta => {
        console.log("Respuesta del Api")
        console.log(respuesta.data)
        listaLinks = respuesta.data
        let data = ""
        let lista = document.getElementById("listaLinks")
        for(let i = 0; i < respuesta.data.length; i++){
            let link = respuesta.data[i]
            data += "<tr>"
            data += `<td>${link.url}</td>`
            data += `<td>${link.nombre}</td>`
            data += `<td>${link.descripcion}</td>`
            data += `<td><button type="button" onclick = "cargarDatos(${i})" class="btn btn-primary">Editar</button></td>`
            data += `<td><button type="button" onclick = "eliminarLink(${link.idlink})" class="btn btn-primary">Eliminar</button></td>`
            data += "</tr>"
        }
        lista.innerHTML = data;
    }).catch(error => {
        console.log(error)
    })
}

let atraparDatos = () => {
    let url = document.getElementById("txtUrl").value
    let nombre = document.getElementById("txtNombre").value
    let descripcion = document.getElementById("txtDescripcion").value

    return {url: url, nombre: nombre, descripcion: descripcion}

}

let guardarLink = () => {
    let link = atraparDatos()
    let linkExiste = listaLinks.find(x => link.url === x.url)
    let mensaje = document.getElementById("mensaje")
    let data = ""
    if(linkExiste){
        data = `<div class="alert alert-danger" role="alert">
        El link que desea ingresar ya está en su lista <a href="#" class="alert-link"></a>
        </div>`
        mensaje.innerHTML = data
    }else{
        axios.post("http://localhost:3000/insertar",link).then(respuesta => {
            console.log(respuesta)
            data = `<div class="alert alert-success" role="alert">
            El link se agrego correctamente <a href="#" class="alert-link"></a>
            </div>`
            mensaje.innerHTML = data
            listarLinks();
            limpiarCampos();
        }).catch(error => {
            console.log(error)
        })
    }
}

let eliminarLink = id => {
    axios.delete(`http://localhost:3000/eliminar/${id}`).then(respuesta => {
        console.log(respuesta)
        let mensaje = document.getElementById("mensaje")
        let data = ""
        data = `<div class="alert alert-success" role="alert">
        El link se elimino correctamente <a href="#" class="alert-link"></a>
        </div>`
        mensaje.innerHTML = data
        listarLinks();
    }).catch(error => {
        console.log(error)
    })
}

let cargarDatos = i => {
    let link = listaLinks[i]
    idActualizar = link.idlink
    document.getElementById("txtUrl").value = link.url
    document.getElementById("txtNombre").value = link.nombre
    document.getElementById("txtDescripcion").value = link.descripcion
    document.getElementById("btnGuardar").style.display = "none"
    document.getElementById("btnActualizar").style.display = "inline"
}

let actualizarLink = () => {
    let link = atraparDatos()
    axios.put(`http://localhost:3000/actualizar/${idActualizar}`,link).then(respuesta => {
        console.log(respuesta)
        let mensaje = document.getElementById("mensaje")
        let data = ""
        data = `<div class="alert alert-success" role="alert">
        El link se actualizo correctamente <a href="#" class="alert-link"></a>
        </div>`
        mensaje.innerHTML = data
        document.getElementById("btnGuardar").style.display = "inline"
        document.getElementById("btnActualizar").style.display = "none"
        limpiarCampos();
        listarLinks();
    }).catch(error => {
        console.log(error)
    })
    
}

let limpiarCampos = () => {
    document.getElementById("txtUrl").value = ""
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtDescripcion").value = ""
}

listarLinks();
