//template plantilla
// numero ramdon 
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; 

}
// console.log(getRandomInt(1,151))

//primero carga html y luego js
document.addEventListener('DOMContentLoaded', ()=> {
    const random = getRandomInt(1,155)
    fetchData(random)
})

const fetchData = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp : data.stats[0].base_stat,
            experiencia : data.base_experience,
            ataque : data.stats[1].base_stat,
            defensa :data.stats[2].base_stat,
            especial :data.stats[3].base_stat
        }
        

        pintarCard(pokemon)

    } catch (error){
        console.log(error)
    }
}
    
const pintarCard = (pokemon) => {
    console.log(pokemon)
    const  flex = document.querySelector('.flex')
    const  template = document.getElementById('template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre}<span> HP: ${pokemon.hp} <span/> `

    clone.querySelector('.card-body-text').textContent = pokemon.experiencia + " Exp"

    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque +'k'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial +'k'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa +'k'
 




    




    fragment.appendChild(clone)
    flex.appendChild(fragment)

}