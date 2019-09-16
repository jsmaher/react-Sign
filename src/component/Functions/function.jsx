import firebase from './firebaseauth'

// signup=(data) => {
//     console.log(data)

// }


function signup(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                resolve(res.user)
                console.log(res.user.uid)
            }).catch(err => reject(err))

    })
}



function login(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                resolve(res.user)
                console.log(res.user.uid)
            }).catch(err => reject(err))

    })
}



export { signup,login };