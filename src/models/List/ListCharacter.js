export class ListCharacter {
    #character = []

    addCharacter(character){
        this.#character.push(character)
    }

    getCharacters(){
        return this.#character
    }

}