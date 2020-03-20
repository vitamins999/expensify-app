// const person = {
//     name: 'Dave',
//     age: 69,
//     location: {
//         city: 'Spergtown',
//         temp: 12
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'The Shining',
//     author: 'Stephen King',
//     publisher: {
//         name: 'Hodder'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

const address = ['69 Poop Avenue', 'Spergtown', 'Sperginton', 'SP0 0RG']
const [, city, county = 'Essex'] = address
console.log(`You are in ${city}, ${county}.`)

const item = ['Coffee (hot)', '£2', '£2.50', '£2.75']
const [product, , medium] = item
console.log(`A medium ${product} costs ${medium}.`)