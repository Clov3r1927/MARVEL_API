import { listCharacter } from "../controllers/dependencies.js"
import { Character } from "../models/Character.js"
import { Comics } from "../models/Comics.js"
import { Events } from "../models/Events.js"
import { Stories } from "../models/Stories.js"
import { Series } from "../models/Series.js"

   
const url = "https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=10&apikey=aaf1a31e3635e9c8ddd29b7584aed680&hash=a566b057f275a94086dfff5342af673f"
console.log(url)

    const llamar = document.getElementById("llamarApi")
    llamar.addEventListener("click",()=>{

        fetch(url)
    .then((response) => response.json())
    .then(data => {

            data.data.results.forEach( element => {
                let character = new Character()
                character.setName(element.name)
                character.setId(element.id)
                character.setPath(element.thumbnail.path)

                element.comics.items.forEach(item =>{
                    let comic = new Comics()
                    comic.setName(item.name)
                    character.addComic(comic)
                })

                element.series.items.forEach(item =>{
                    let serie = new Series()
                    serie.setName(item.name)
                    character.addSerie(serie)
                })

                element.stories.items.forEach(item =>{
                    let stories = new Stories()
                    stories.setName(item.name)
                    character.addStories(stories)
                })

                element.events.items.forEach(item =>{
                    let event = new Events()
                    event.setName(item.name)
                    character.addEvents(event)
                })
                
                listCharacter.addCharacter(character)
                console.log(character);
            })
    })
    })
  
    let cartas = document.getElementById("cards")

    let mostrar = document.getElementById("mostrarApi")
    mostrar.addEventListener("click",()=>{
        listCharacter.getCharacters().forEach(item => {
            let cards = document.createElement("article")
            cards.classList.add("card-container")
    
            let nameContainer = document.createElement("div")
            nameContainer.classList.add("name-container")
            let name = document.createElement("p")
            name.innerText = item.getName()
            nameContainer.appendChild(name)
            cards.appendChild(nameContainer)

            let idContainer = document.createElement("div")
        idContainer.classList.add("name-container")
        let id = document.createElement("p")
        id.innerText = item.getId()
        nameContainer.appendChild(id)
        cards.appendChild(idContainer)

            let imgenContainer = document.createElement("div")
            imgenContainer.classList.add("img-container")
            let img = document.createElement("img")
            img.setAttribute("src",item.getPath()+".jpg")
            imgenContainer.appendChild(img)
            cards.appendChild(imgenContainer)

            let botonComics = document.createElement("button")
            botonComics.classList.add("btn-comics")
            botonComics.innerText = "Ver comics"
            botonComics.addEventListener("click",()=>{
                let modal = document.createElement("div")
                modal.classList.add("modal")
                let ul = document.createElement("ul")
                ul.classList.add("ul-char")
                item.getComics().forEach(comic =>{
                let li = document.createElement("li")
                li.classList.add("li-modal")
                li.innerText = comic.getName()
                ul.appendChild(li)
            })

            modal.appendChild(ul)
            document.body.appendChild(modal)
            modal.addEventListener("click",()=>{
                modal.remove()
            })
            })
            cards.appendChild(botonComics)

            let btnViewEvents = document.createElement("button")
            btnViewEvents.classList.add("btn-events")
            btnViewEvents.innerText = "Ver eventos"
            btnViewEvents.addEventListener("click",()=>{
                let modal = document.createElement("div")
                modal.classList.add("modal")
                let ul = document.createElement("ul")
                ul.classList.add("ul-modal")
                item.getEvents().forEach(comic =>{
                let li = document.createElement("li")
                li.classList.add("li-modal")
                li.innerText = comic.getName()
                ul.appendChild(li)
            })

            modal.appendChild(ul)
            document.body.appendChild(modal)
            modal.addEventListener("click",()=>{
                modal.remove()
            })
            })
            cards.appendChild(btnViewEvents)

            let botonStories = document.createElement("button")
            botonStories.classList.add("btn-histories")
            botonStories.innerText = "Ver historias"
            botonStories.addEventListener("click",()=>{
                let modal = document.createElement("div")
                modal.classList.add("modal")
                let ul = document.createElement("ul")
                ul.classList.add("ul-modal")
                item.getStories().forEach(comic =>{
                let li = document.createElement("li")
                li.classList.add("li-modal")
                li.innerText = comic.getName()
                ul.appendChild(li)
            })

            modal.appendChild(ul)
            document.body.appendChild(modal)
            modal.addEventListener("click",()=>{
                modal.remove()
            })
            })
            cards.appendChild(botonStories)

            let botonSeries = document.createElement("button")
            botonSeries.classList.add("btn-series")
            botonSeries.innerText = "Ver series"
            botonSeries.addEventListener("click",()=>{
                let modal = document.createElement("div")
                modal.classList.add("modal")
                let ul = document.createElement("ul")
                ul.classList.add("ul-modal")
                item.getSeries().forEach(comic =>{
                let li = document.createElement("li")
                li.classList.add("li-modal")
                li.innerText = comic.getName()
                ul.appendChild(li)
            })

            modal.appendChild(ul)
            document.body.appendChild(modal)
            modal.addEventListener("click",()=>{
                modal.remove()
            })
            })
            cards.appendChild(botonSeries)

            cartas.appendChild(cards)
        })
    })
