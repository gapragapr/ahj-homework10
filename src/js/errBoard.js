import drawCard from "./messages";

export function drawErrBoard(){
    document.querySelector('.wrapper').insertAdjacentHTML('beforeend', `
        <div class="err-card">
            <p class="err-title">Что-то пошло не так</p>
            <p class="err-content">К сожалению что-то пошло не так. Пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную</p>
            <p class="err-sub-content">Широта и долгота через запятую</p>
            <input type="next">
            <button class="err-cancel">Отмена</button>
            <button class="err-ok">Ок</button>
        </div>
    `)

    const errCancel = document.querySelector('.err-card .err-cancel');
    const errOk = document.querySelector('.err-card .err-ok');

    errCancel.addEventListener('click', () => {
        document.querySelector('.wrapper').removeChild(document.querySelector('.err-card'))
    });

    errOk.addEventListener('click', () => {
        const errInput = document.querySelector('.err-card input');

        if (validateCoords(errInput.value)){
            drawCard(errInput.value)
            document.querySelector('.wrapper').removeChild(document.querySelector('.err-card'))
        } else {
            alert('Введите корректные координаты')
        }
    })
}

export function validateCoords(coords){
    if (/^(\[?-?)((\d|[0-8]\d?|90)\.\d{5,}), ?(-|−)?((\d{1,2}|1[0-7][0-9]|180)\.\d{5,})(\]?)$/.test(coords)) {
        const arr = coords.split(',');
        const latitude = arr[0].replace(/\[/, '');
        const longitude = arr[1].replace(/\]/, '').replace(/\s/, '');
        return `${latitude}, ${longitude}`;
    }
    
    return false;
}