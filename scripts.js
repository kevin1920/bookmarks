

let listarLinks = () => {
    axios.get("http://localhost:3000/url").then(respuesta => {
        console.log("Respuesta del Api")
        console.log(respuesta.data)
    }).catch(error => {
        console.log(error)
    })
}

listarLinks();
