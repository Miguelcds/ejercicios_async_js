// Ejercicio 1

// Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

// Creacio Header

const header = document.createElement("header");

const h1 = document.createElement("h1");

h1.textContent = "Este es un filtro de GOT";

header.appendChild(h1);

document.body.insertAdjacentElement("beforebegin", header)



// Creacio Main


const main = document.createElement("main")

const select = document.createElement("select")

main.appendChild(select)

document.body.appendChild(main)

 fetch("https://thronesapi.com/api/v2/Characters")
   .then((res) => res.json())
   .then((res) => res.map((item) => {
       const option = document.createElement("option");
       option.innerHTML = item.fullName
       select.appendChild(option);


    select.addEventListener("change", () => {
        if (item.fullName === select.value) {
            document.body.innerHTML += `
              <h2>${item.fullName}<h2>
              <h3>${item.family}</h3>
              <img src=${item.imageUrl} alt=${item.fullName}/>
             `;
        }
    })

     }));


const footer = document.createElement("footer")

const button = document.createElement("button")

button.innerText ="Refresh"

footer.appendChild(button)

document.body.appendChild(footer)


   
button.addEventListener("click", () => {
    window.location.reload()
})



 

