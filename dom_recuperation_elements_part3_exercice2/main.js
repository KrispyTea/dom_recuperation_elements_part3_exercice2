let exo1 = document.getElementsByTagName("h1")
exo1[0].innerText = "Les attributs class et id"

let exo2 = document.getElementsByTagName("h2")
exo2[0].innerText = "Exercice 2 partie A"

exo2[1].innerText = "Exercice 2 partie B"

let exo4 = document.getElementsByTagName("p")
exo4[0].innerText = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b> par coeur </b>"

exo4[1].innerText = "La manipulation de l'attribut Style peut être une <i> solution </i> rapide"

exo1[0].setAttribute("id","bigTitle")

let exo7 = document.getElementsByTagName("div")
exo7[0].setAttribute("class","container")

let exo8 = document.getElementsByTagName("h2")
exo8.forEach(e => {
    e.setAttribute("class", "title")
});

let exo9 = document.getElementsByTagName("p")
exo9.forEach(e => {
    e.setAttribute("class", "text")
});

let exo10 = document.querySelector("section")[0]
exo10.setAttribute("class", "margin-top border-black padding")

let exo11 = document.querySelector("section")[1]
exo11.setAttribute("class","margin-top border-black padding")