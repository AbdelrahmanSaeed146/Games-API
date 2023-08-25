export class Ui {
    constructor() {}
  
    displayGamed(myData) {
      let temp = ``;
      
      for (let i = 0; i < myData.length; i++) {
        temp += `
        <div class="col">
        <div data-id="${myData[i].id}"  class="card  bg-transparent" role="button" ">
           <div  class="card-body">
              <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src="${myData[i].thumbnail}" />
              
              </figure>
  
              <figcaption>
  
                 <div class="hstack justify-content-between">
                    <h3 class="h6 small text-white">${myData[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                 </div>
  
                 <p class="card-text small text-center opacity-50">
                    ${myData[i].short_description.split(" ", 8)}
                 </p>
  
              </figcaption>
           </div>
  
           <footer class="card-footer small hstack justify-content-between">
  
              <span class="badge badge-color">${myData[i].genre}</span>
              <span class="badge badge-color">${myData[i].platform}</span>
  
           </footer>
        </div>
     </div>
        `;
      }
      
      document.getElementById("gameData").innerHTML = temp;
    }

    displayDetails(detData){
     let temp= ``
      temp+= `  <div class="col-md-4">
      <img src="${detData.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${detData.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${detData.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${detData.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${detData.status}</span> </p>
      <p class="small">${detData.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${detData.game_url}">Show Game</a>
   </div>`
    
      
   document.getElementById("detailsContent").innerHTML = temp
      
    }

   
  
}
  