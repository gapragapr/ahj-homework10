export default function getNowDate(){
    const dateNow = new Date();
    const dateYear = dateNow.getFullYear();
    const dateMonth = dateNow.getMonth() + 1;
    const dateDay = dateNow.getDate();
    const dateHour = dateNow.getHours();
    const dateMinutes = dateNow.getMinutes();

    if (dateMonth < 10){
        return `${dateYear}.0${dateMonth}.${dateDay} ${dateHour}:${dateMinutes}`
    } else {
        return `${dateYear}.${dateMonth}.${dateDay} ${dateHour}:${dateMinutes}`
    }
}