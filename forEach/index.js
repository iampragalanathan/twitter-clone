const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn', 
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// for (let character of characters){
//     console.log(character)
// }

// const getData=characters.filter(function(character,index){
//     return character.powers.includes("invisibility")
// })
// console.log(getData)

characters.forEach(function(character,index){

    document.querySelector("h1").textContent += index + " " + character.powers[0] + ", "
})