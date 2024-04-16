export class Character {
    #id
    #name 
    #path
    #series = []
    #stories = []
    #events = []
    #comics = []

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }

    setId(id){
        this.#id = id
    }
    getId(){
        return this.#id
    }

    setPath(path){
        this.#path = path
    }
    getPath(){
        return this.#path
    }

    addSerie(serie){
        this.#series.push(serie)
    }
    getSeries(){
        return this.#series
    }

    addStories(stories){
        this.#stories.push(stories)
    }
    getStories(){
        return this.#stories
    }

    addEvents(event){
        this.#events.push(event)
    }
    getEvents(){
        return this.#events
    }

    addComic(comic){
        this.#comics.push(comic)
    }
    getComics(){
        return this.#comics
    }

}