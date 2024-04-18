import { generateJke } from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'
const laughImg = document.querySelector("#laughImg")
const jokeBtn = document.querySelector("#jokeBtn")
const joke = document.querySelector("#joke")
laughImg.src = laughing
jokeBtn.addEventListener('click', async () => {
    const data = await generateJke()
    joke.innerHTML = data.joke

})