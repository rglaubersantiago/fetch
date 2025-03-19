// Busca os dados.
// fetch("https://rickandmortyapi.com/api/character")
// // Trata a resposta que vêm da api e converte para json.
// .then(response => response.json())
// // Mostra no console.
// .then(data => {
//     let tbody = document.querySelector("tbody")
//     for (let index = 0; index < data.results.length; index++) {
//         let tr = document.createElement("tr")
//         // console.log(data.results)
//         tr.innerHTML = `
//             <th colspan="">${data.results[index].name}</th>
//             <td colspan="">${data.results[index].gender}</td>
//             <td colspan="">${data.results[index].species}</td>
//             <td colspan="">${data.results[index].origin.name}</td>
//             <td colspan=""><img src="${data.results[index].image}"></td>
//         `  
//     tbody.appendChild(tr)      
//     }
// })

// fetch("https://dattebayo-api.onrender.com/characters")
// .then(response => response.json())
// .then(data => {
//     let tbody = document.querySelector("tbody")
//     for (let index = 0; index < data.characters.length; index++) {
//     // console.log(data.characters[index])
//     let tr = document.createElement("tr")
//        tr.innerHTML = `
//             <th colspan="">${data.characters[index].name}</th>
//             <td colspan="">${data.characters[index].family.father}</td>
//             <td colspan="">${data.characters[index].jutsu[2]}</td>
//             <td colspan="">${data.characters[index].tools[0]}</td>
//             <td colspan=""><img src="${data.characters[index].images[0]}"></td>
//          `
//      tbody.appendChild(tr) 
//     }
// })

fetch("https://67da0a2835c87309f52abeb6.mockapi.io/api/produtos")
.then(response => response.json())
.then(data => {
    let body = document.querySelector("body")
    for (let index = 0; index < data.length; index++) {
        let div = document.createElement("div")
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${data[index].url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data[index].name}</h5>
                        <p class="card-text">${data[index].description}</p>
                    <a href="#" class="btn btn-primary">Comprar ${data[index].price}</a>
                </div>
            </div>
        `   

        body.appendChild(div)
    }
})
