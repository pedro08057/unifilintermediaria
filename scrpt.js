let items = [
    { titulo: "Título 1", conteudo: "Conteúdo 1" },
    { titulo: "Título 2", conteudo: "Conteúdo 2" },
    { titulo: "Título 3", conteudo: "Conteúdo 3" }  
]

let container = document.querySelector("#container")

for(let i = 0; i < items.length; i++ ) {

    let card = document.createElement("div")
    card.className = "card"

    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    h2.textContent = items[i].titulo
    p.textContent = items[i].conteudo

    card.appendChild(h2)
    card.appendChild(p)
    container.appendChild(card)
}
