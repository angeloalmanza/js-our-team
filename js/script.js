const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// const teamList = document.getElementById("team-list");

// // Lista di prova con gli oggetti dell'array
// for(let i = 0; i < teamMembers.length; i++){
//   const curItem = teamMembers[i];
//   const teamListElem = document.createElement("li");

//   teamListElem.innerHTML = `
//   <img src="${curItem.img}" alt="${curItem.name}">
//   <h3>${curItem.name}</h3>
//   <p>Role: ${curItem.role}</p>
//   <p>Email: <a href="${curItem.email}">${curItem.email}</a></p>
//   `;

//   teamList.append(teamListElem);
// }

// Prelevo i valori dall'html
const row = document.getElementById("team-row");
const memberForm = document.getElementById("member-form");

const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const imageInput = document.getElementById("image");
const emailInput = document.getElementById("email");

/**
 * Funzione che crea dinamicamente le card 
 * @param {object} member
 * @returns {string}
 */

const createCard = (members) => {
  const { name, role, email, img } = members;
  return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="team-card">
          <div class="card-image">
            <img src="./${img}" alt="${name}"/>
          </div>
          <div class="card-text">
            <h3 class="text-white">${name}</h3>
            <p class="text-white">${role}</p>
            <a href="">${email}</a>
          </div>
        </div>
      </div>
     `;
};


/** funzione che mostra le card in pagina */
const renderTeam = () => {
  let rowItems = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    rowItems += card;
  }
  row.innerHTML = rowItems;
};


/** funzione che aggiunge una nuova card */
const handleSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const img = imageInput.value.trim();  
  const email = emailInput.value.trim();  

  const newMember = {
    name,
    role,
    img,
    email
  }

  teamMembers.push(newMember);

  row.innerHTML += createCard(newMember);

  memberForm.reset();
};

// Chiamate funzioni
renderTeam();

memberForm.addEventListener("submit", handleSubmit);