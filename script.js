//ADICIONANDO LISTA DE FILMES AO HTML

const listaFilme = document.querySelector(".listaFilme")

function listarFilmes(colecaoFilmes){
        listaFilme.innerHTML = ""
        
        colecaoFilmes.forEach(function(filme){
           const template  =  criarTemplate(filme)
            listaFilme.appendChild(template)
        })
}

listarFilmes(filmes)

function criarTemplate(filme){
    const li = document.createElement("li")
    li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}" />
        </figure>
        <h2>${filme.nome}</h2>
    `
    return li
}


//FILTRAR FILME POR CATEGORIA
function filtrarFilme(filtroCategoria){
    const filmesFiltrados = filmes.filter(function(filme){

        if(filtroCategoria == filme.categoria){
            return filme
        }
    })

    listarFilmes(filmesFiltrados)
}

 
const secaoCategorias = document.querySelector(".secaoCategorias")

secaoCategorias.addEventListener("click", function(event){
    event.preventDefault()
    const categoriaSelecionada = event.target.text

    if(categoriaSelecionada == "Mostrar todos"){
        listarFilmes(filmes)
    }else{
        filtrarFilme(categoriaSelecionada)
    }
})