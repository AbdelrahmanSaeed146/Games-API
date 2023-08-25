import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Home {
    constructor() {
      $(".nav-link").click((e) => {
        this.changeActiveLink(e)
        
      });
      this.loading = document.querySelector(".loading")
      this.ui = new Ui();
      this.details = document.getElementById("details")
      this.games = document.getElementById("games")
      this.getData()
       
      
    }
  
    
 async  changeActiveLink(e) {
    $(".navbar-nav .active").removeClass("active");
    $(e.target).addClass("active");
    let myCat = e.target.getAttribute("data-category")
    

     const catData =  await this.getData(myCat);
     
 }




    async getData(cat = "mmorpg") {
      this.loading.classList.remove("d-none")
       const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '403390d37amsh184454c37b00907p177ac1jsnea28a709b07e',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
      let myRes = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
      let myData = await myRes.json();
      console.log(myData);
    
      this.ui.displayGamed(myData)
      this.loading.classList.add("d-none")
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click",()=>{
          details.classList.remove("d-none")
          games.classList.add("d-none")
          new Details(card.getAttribute("data-id"))
        })
      });
    }
  }