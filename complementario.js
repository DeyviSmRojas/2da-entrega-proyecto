var productos = [
  {
    id: 1,
    nombre: "King kong 18 huecos",
    img: "img/kINGKONG.jpg",
    precio: 780
  },

  {
    id: 2,
    nombre: "King kong 18 huecos",
    img: "img/techo.jpg",
    precio: 2900
  },
  {
    id: 1,
    nombre: "King kong 18 huecos",
    img: "img/kINGKONG.jpg",
    precio: 780
  },
  {
    id: 2,
    nombre: "King kong 18 huecos",
    img: "img/techo.jpg",
    precio: 2900
  }
]

productos.forEach(el => {
  let agrega = document.querySelector("#productosContainer");

  agrega.innerHTML +=
  `
  <div class = "col-md-3 col-xl-4 col-sm-12 mt-3 d-inline-flex">
    <article class = "card text-center">
      <img class="w-80 card-img-body" src="${el.img}">

      <div class="card-body">
        <h5 class="card-title">${el.nombre}</h5>
        <h6> $${el.precio} x millar </h6>
      </div>
    </article>
  </div>
     `
});