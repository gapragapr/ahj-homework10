import drawCard from "./messages";
import {drawErrBoard, validateCoords} from "./errBoard";

export default function checkGeo(){
    return new Promise((resolve, reject) => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                drawCard(`${latitude}, ${longitude}`)
                resolve('Complete')
            }, (err) => {
                drawErrBoard()
                reject('Error')
            })
        }
    })
}