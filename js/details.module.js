import { Ui } from "./ui.module.js"

export class Details {
    constructor(id){
       document.getElementById("btnClose").addEventListener("click",()=> {
        document.getElementById("details").classList.add("d-none")
        document.getElementById("games").classList.remove("d-none")
       })
       this.getDetails(id)
    }
    



    async getDetails(id= "452" ){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '403390d37amsh184454c37b00907p177ac1jsnea28a709b07e',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
            }
        let myRes= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        let myDetails = await myRes.json()
        new Ui().displayDetails(myDetails);
     }

     
}




