document.body.innerHTML = ` 
    <header>
        <h1>This is a GOT filter</h1>
    </header>

    <main>
        <div id="content_select"></div>
    </main>

`;

const select = document.createElement("select");

const filter = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();

    data.map((item) => {
      const option = document.createElement("option");
      option.innerHTML = item.fullName;
      select.appendChild(option);

      select.addEventListener("change", () => {
        if (item.fullName === select.value) {
          document.body.innerHTML += `
          <h2>${item.fullName}<h2>
          <h3>${item.family}</h3>
          <img src=${item.imageUrl} alt=${item.fullName}/>
          <button id="refresh">Search again? Click!</button>
          `;
          const button = document.getElementById("refresh");

          button.addEventListener("click", () => {
            location.reload();
          });
        }
      });
    });
  } catch (error) {
    document.body.innerHTML = `
    <h2 class= "error"> Page under maintenance, sorry for the inconvenience!</h2>
    `;
  }
};

const div = document.getElementById("content_select");

div.appendChild(select);

filter();
