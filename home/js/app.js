//amaliyot 

// let API = '16347ef4'

// fetch(`http://www.omdbapi.com/?apikey=${API}&s=Hulk`)
// .then((resolve) => resolve.json())
// .then((data) => {
//   renderFilm(data.Search);
//   console.log(data);
// });

// // let input = document.querySelector('#search');
// // let row = document.querySelector('.row');

// function renderFilm(arr){
//   arr.forEach((el) => {
//     document.body.innerHTML += `
//     <div class="card col-lg-3 p-2" style="width: 18rem;">
//       <img src="${el.Poster}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <p class="card-text">${el.Title}</p>
//       </div>
//     </div>
//     `
//   });
// };

//amaliyot 







// let run = document.querySelector('#run');
// let stop = document.querySelector('#stop');
// let start = document.querySelector('#start');
// let energy = document.querySelector('#energy');
  
// run.addEventListener("click", () => {
//   if (!start) return console.log("Oldin Zavat qilish kere");
//   if (run) return console.log("Yaxshi ketvommizku ozi");
// });
// start.addEventListener("click", () => {
//   if (!start)
//     return console.log("Ozi zavat bopturibtiku: G'ig' g'ig' g'ig'...");
//   start = true;
//     console.log("Zavat boldi");
//   this.isStarted = false;
//     console.log(`${this.name} zavati ochdi`);
// });
// stop.addEventListener("click", () => {
//   if (!run) return console.log("Ozi toxtab turimmizku");
//   run = false;
//     console.log("yurishdan toxtadi");
// });




class Car {
  constructor(name, model, company, color) {
    this.name = name;
    this.model = model;
    this.company = company;
    this.color = color;
    this.gas = 30;
    this.isStarted = false;
    this.isMoving = false;
    petrolIntervalId = null;
  }

  refill() {
    this.gas +=10;
  }

  move() {
    if (!this.isStarted) return console.log("Oldin Zavat qilish kere");
    if (this.isMoving) return console.log("Yaxshi ketvommizku ozi");

    this = true;
    console.log(`${this.name} Xarakatlanvotti`);
    this.petrolIntervalId = setInterval(() => {
      if (this.gas > 0 && this.isMoving) {
        this.gas --;
        console.log(`${this.gas}ta gaz qoldi`);
      }
      if (this.gas === 0 && this.isMoving) {
        console.log("Gaz qomadi. Moshina ochdi");
        clearInterval(this.petrolIntervalId);
        this.petrolIntervalId = null;
      }
    }, 1000);

  }

  startEngine() {
    if (this.isStarted)
      return console.log("Ozi zavat bopturibtiku: G'ig' g'ig' g'ig'...");

    this.isStarted = true;
    console.log(`${this.name} Zavat boldi`);
    this.petrolIntervalId = setInterval(() => {
      if (this.gas > 0 && this.isStarted) {
        this.gas --;
        console.log(`${this.gas}ta gaz qoldi`);
      }
      if (this.gas === 0 && this.isStarted) {
        console.log("Gaz qomadi. Moshina ochdi");
      }
      clearInterval(this.petrolIntervalId);
      this.petrolIntervalId = null;
    }, 5000);
    
  }

  stopMoving() {
    if (!this.isMoving) return console.log("Ozi toxtab turimmizku");
    
    this.isMoving = false;
    console.log(`${this.name} yurishdan toxtadi`);
  }

  stopEngine() {
    if (this.isMoving) return console.log("Harakatlanayapsan. Oldin to'xta");
    if (!this.isStarted) return console.log("Ozi Zavat bomagan");
    this.isStarted = false;
    console.log(`${this.name} zavati ochdi`);
  }
}

let mers = new Car("Toychoq", "222", "Mercedes Benz", "Black");

let BMW = new Car("Pahlavon", "X5", "BMW", "White");