import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
    apiKey: 'AIzaSyChWgCsFeUISAXA5UQ4F4Q-fpsvXA637VI',
    authDomain: 'gamesquiz-41e76.firebaseapp.com',
    projectId: 'gamesquiz-41e76',
    storageBucket: 'gamesquiz-41e76.appspot.com',
    messagingSenderId: '550441084225',
    appId: '1:550441084225:web:49704cf7d30386f75f6dc0',
    measurementId: 'G-XP3Y710B48',
}

const firebaseApp = initializeApp(config)
const auth = getAuth(firebaseApp)

const firebaseConfig = {
    auth,
}

export default firebaseConfig