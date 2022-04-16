const navButton = document.querySelector(".open-nav-button"); /**Nav humberger button */
const menuMobile = document.querySelector(".menu-mobile");
const closeMenuButton = document.querySelector(".close-nav-button");
const hidden = document.querySelector(".hidden");
/**Dynamic grid element */
let speakerGrid = document.querySelector(".speaker-grid");
let columnSpeaker = document.querySelector(".column-speaker");



/* Navigation humberger button open and close function */
navButton.addEventListener('click', () => {
    hidden.classList.remove("hidden");/**remove hidden class from the menu-bar mobile layout */
    navButton.classList.toggle("active");/**hamburger disappear */
  });

  closeMenuButton.addEventListener("click", () => {
      hidden.classList.add("hidden");
      navButton.classList.toggle("active");
      
  });

  document.onclick = (e) => {
    /** Close modal window if pressed anywhere */
    if (e.target.id == 'close-nav-button') {
        hidden.classList.add("hidden");
     navButton.classList.toggle("active");
    }
    }


  const speakers = {
      column1:{
          image: "images/speakers/img-1.jpg",
          names: "Yochai Benki",
          profession: "Berkman Professor of Enterprenuerial Legal Studies at Harvad School of Law",
          function: 'Berkler studies commons-based peer production and published his seminal book: The Wealth of Networks',
      },

      column2:{
        image: "images/speakers/img-2.jpg",
        names: "Sheila Kizuga",
        profession: "",
        function: 'Sheila Kizuga helped bring the internet to Africaa and is an outspoken advocate for the open web and digital commons. In 2012, she was inducted into the inaugral class of the internet Society (ISOC) hall of fame',
    },

    column3:{
        image: "images/speakers/img-4.jpg",
        names: "Lee Pak",
        profession: "Director of Art Center and a board of member of Maua Academy",
        function: 'As the main avenue for new media art production in Kenya, Maua promotes criss-discplinary collaboration and understanding among science technology and the arts'
    },

    column4:{
        image: "images/speakers/img-1.jpg",
        names: "Amara Akachi",
        profession: "Presidents on Young Ineventors Stars",
        function: 'Youth intergration, political democracy and paticipation of youth through online as her major condem. Amaras report outlining potential changes to AU copyright law was approved by the Parliament July',
    },

    column5:{
        image: "images/speakers/img-2.jpg",
        names: "Queen Yori",
        profession: "CEO of Mila Academ, ex COO of the Moja Foundation",
        function: 'Quuen has been leading open sources project at the Moja Fondation such as the open source movement',
    },

    column6:{
        image: "images/speakers/img-1.jpg",
        names: "Sheryl Amanda",
        profession: "Executive Director of Searcher Foundation",
        function: 'Sheryl is the executive Director of Searcher Foundation, the non profit organization that operates WikiMoja. Wiki moja is a freely available in 290 langages and used by nearly half a billion around the goal'
    },

  }


  for (const speaker of [...Object.keys(speakers)]) {
      //speaker = column1
      let element = document.createElement("div");
      element.classList.add('column-speaker')
      element.innerHTML = `
            <div class="content-speaker d-flex">

                <img class="speaker-img" src="${speakers[speaker].image}" alt="">

                <div class="content-text">
                <h2 class="speaker-title">${speakers[speaker].names} </h2>
                <h6><small><i${speakers[speaker].profession}></i></small></h6>
                <div class="speaker-line"></div>
                <p>${speakers[speaker].function}</p>
                </div>
            </div>
      `;
      speakerGrid.appendChild(element)

      console.log(speakers[speaker])
  }

