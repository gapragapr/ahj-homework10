import getNowDate from "./date";
import drawErrBoard from "./errBoard";
import checkGeo from "./geolocation";

const messageInput = document.querySelector('.send-message input')

document.querySelector('.send-message button').addEventListener('click', () => {
    checkGeo()
})

function checkInputValue(){
    if (messageInput.value !== ''){
        return messageInput.value
    } else {
        return false;
    }
}

export default function drawCard(position){
    if (checkInputValue()){
        document.querySelector('.messages-container').insertAdjacentHTML('beforeend', `
        <div class="card">
            <div class="card-content">
                <p class="card-text">${checkInputValue()}</p>
                <div class="card-data">
                    <span class="card-position">${position}</span>
                    <span class="card-date">${getNowDate()}</span>
                </div>
            </div>
        </div>
        `)
        console.log(position)
        messageInput.value = ''
    } else {
        alert('Введите текст сообщения!')
    }
}