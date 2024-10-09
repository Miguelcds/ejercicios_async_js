// Ejercicio 2

// Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

// Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

const img = document.querySelector(".random-image")

const randomImage = async () => {
  try {
    const random = getRandom(151);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const data = await res.json();

    img.src = data.sprites.front_shiny;

   
  } catch (error) {
    document.body.innerHTML = `
        <h2 class= "error"> Page under maintenance, sorry for the inconvenience!</h2>`;
  }
};

randomImage();
