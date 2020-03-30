import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Cat food',
//     note: '',
//     amount: 599,
//     createdAt: 0
// })




// database.ref('notes/-M3Rt_4eaYB3TtvJHNnG').remove()

// database.ref('notes').push({
//     title: 'Name of cats',
//     body: 'Willow, Ziggy, Splodge'
// })

// const firebaseNotes = {
//     notes: {
//         gegesfe: {
//             title: 'First note',
//         body: 'this is my note'
//         },
//         jsoaowfa: {
//             title: 'Second note',
//         body: 'this is my note again'
//         }
//     }
// }

// const notes = [
//     {
//         id: '12',
//         title: 'First note',
//         body: 'this is my note'
//     }, {
//         id: '169',
//         title: 'Second note',
//         body: 'this is my note again'
//     }
// ]

// database.ref('notes').set(firebaseNotes)

// database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name
//     const title = snapshot.val().job.title
//     const company = snapshot.val().job.company
//     console.log(`${name} is a ${title} at ${company}.`)
// }, (e) => {
//     console.log('Error fetching data')
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching')
// })

// setTimeout(() => {
//     database.ref('age').set(34)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(90)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error:', e)
//     })

// database.ref().set({
//     name: 'Dave Sperglord',
//     age: 69,
//     stressLevel: 6,
//     job: {
//         title: 'Chief bastard',
//         company: 'Google'
//     },
//     location: {
//         city: 'Spergtown',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed')
//     })
//     .catch((error) => {
//         console.log('Did not remove data.', error)
//     })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hell'
// })
