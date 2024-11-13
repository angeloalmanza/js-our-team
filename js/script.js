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

/**
 * Description
 * @param {object} member
 * @returns {string}
 */

const createCard = (members) => {
  const { name, role, email, img } = members;
  return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="team-card d-flex align-items-center mb-5">
          <div class="card-image">
            <img src="./${img}" alt="${name}"/>
          </div>
          <div class="card-text bg-dark">
            <h3 class="text-white">${name}</h3>
            <p class="text-white">${role}</p>
            <a href="">${email}</a>
          </div>
        </div>
      </div>
     `;
};


const renderTeam = () => {
  let rowItems = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    rowItems += card;
  }
  row.innerHTML = rowItems;
};

// Chiamata funzione
renderTeam();