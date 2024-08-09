const teamMembers = [
  {
      name: "Bhavana R Nair",
      role: "Chair | IEEE FISAT SB",
      imageSrc: "./Team/Bhavana.jpg"
    },
  {
    name: "Gregory Kurien",
    role: "FINN Project Lead",
    imageSrc: "./Team/Greg.jpg"
  },
  {
      name: "Anantha Krishnan",
      role: "Webmaster | FINN Web Lead",
      imageSrc: "./Team/AnanthaKrishnan.JPG"
    },
    {
      name: "Pooraja Sooraj",
      role: "FINN Co-Lead",
      imageSrc: "./Team/PoorvajaSooraj.JPG"
    },
  {
    name: "Abhinav Manoj",
    role: "Associate Webmaster",
    imageSrc: "./Team/AbhinavManoj.jpg"
  },
  {
    name: "Shivani Krishnan",
    role: "Data Team",
    imageSrc: "./Team/ShivaniKrishnan.png"
  },
  {
    name: "Neha A R",
    role: "Data Team",
    imageSrc: "./Team/NehaAR.jpg"
  },
  {
    name: "Vignesh Murali",
    role: "Data Team",
    imageSrc: "./Team/vignesh.jpg"
  },
  {
    name: "Wilson Nevin",
    role: "Data Team",
    imageSrc: "./Team/WILSONNEVIN.jpg"
  },
  {
    name: "Isac John",
    role: "Data Team",
    imageSrc: "./Team/Isac.jpg"
  },
  {
    name: "Ansa Antoo",
    role: "Data Team",
    imageSrc: "./Team/AnsaAntoo.jpg"
  },
  {
    name: "Swetha Saju",
    role: "Data Team",
    imageSrc: "./Team/SwethaSaju.jpg"
  },
  {
    name: "Ann Maria Paul",
    role: "Data Team",
    imageSrc: "./Team/AnnMariaPaul.jpg"
  },
  {
    name: "Asiya Jannah O. V",
    role: "Data Team",
    imageSrc: "./Team/Asiya.jpg"
  },
  {
    name: "Jilha Jos",
    role: "Data Team",
    imageSrc: "./Team/jilhajos.jpg"
  },
  {
    name: "Athul Krishna V.V",
    role: "Data Team",
    imageSrc: "./Team/ATHULKRISHNA.jpg"
  },
  {
    name: "Kavya Sooraj",
    role: "Data Team",
    imageSrc: "./Team/KavyaSooraj.jpg"
  }
];


const addCard=(member)=>{
  return`
  <div class="team-card">
  <div class="image-container">
    <img src=${member.imageSrc} alt="Data Team">
  </div>
  <h3>${member.name}</h3>
  <h4>${member.role}</h4>
</div>
  `
}

const teamsection = document.querySelector('.team-section');

const teamCardsHtml = teamMembers.map(addCard).join('');

teamsection.innerHTML=teamCardsHtml;






function typewriter(text, elementId, speed = 100) {
  let index = 0;

  function type() {
    if (index < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  document.getElementById(elementId).innerHTML = '';

  type();
}

document.addEventListener('DOMContentLoaded', ()=>{
    typewriter("FINN-AI", "typewriter",150);
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#typed-text", 
        { opacity: 0 }, 
        { 
            opacity: 1,
            duration: 0, 
            scrollTrigger: {
                trigger: "#typed-text",
                start: "top 80%", 
                toggleActions: "play none none none",
                onEnter: () => typewriter("Meet The Team", "typed-text", 150)
            }
        }
    );
});