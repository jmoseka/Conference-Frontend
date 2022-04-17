const navButton = document.querySelector('.open-nav-button'); /** Nav humberger button */
const closeMenuButton = document.querySelector('.close-nav-button');
const hidden = document.querySelector('.hidden');
const btnMore = document.querySelector('.btn-more');
/** Dynamic grid element */
const speakerGrid = document.querySelector('.speaker-grid');

/* Navigation humberger button open and close function */
navButton.addEventListener('click', () => {
  hidden.classList.remove('hidden');/** remove hidden class from the menu-bar mobile layout */
  navButton.classList.toggle('active');/** hamburger disappear */
});

closeMenuButton.addEventListener('click', () => {
  hidden.classList.add('hidden');
  navButton.classList.toggle('active');
});

document.onclick = (e) => {
  /** Close modal window if pressed anywhere */
  if (e.target.id === 'close-nav-button') {
    hidden.classList.add('hidden');
    navButton.classList.toggle('active');
  }
};

const speakers = {
  column1: {
    image: 'images/speakers/img-1.jpg',
    names: 'Yochai Benki',
    profession: 'Berkman Professor of Enterprenuerial Legal Studies at Harvad School of Law',
    function: 'Berkler studies commons-based peer production and published his seminal book: The Wealth of Networks',
  },

  column2: {
    image: 'images/speakers/img-1.jpg',
    names: 'Sheila Kizuga',
    profession: '',
    function: 'Sheila Kizuga helped bring the internet to Africa and is an outspoken advocate for the open web and digital commons. In 2012, she was inducted into the inaugral class of the internet Society (ISOC) hall of fame',
  },

  column3: {
    image: 'images/speakers/img-2.jpg',
    names: 'Lee Pak',
    profession: 'Director of Art Center and a board of member of Maua Academy',
    function: 'As the main avenue for new media art production in Kenya, Maua promotes criss-discplinary collaboration and understanding among science technology and the arts',
  },

  column4: {
    image: 'images/speakers/img-4.jpg',
    names: 'Amara Akachi',
    profession: 'Presidents on Young Ineventors Stars',
    function: 'Youth intergration, political democracy and paticipation of youth through online as her major condem. Amaras report outlining potential changes to AU copyright law was approved by the Parliament July',
  },

  column5: {
    image: 'images/speakers/img-4.jpg',
    names: 'Queen Yori',
    profession: 'CEO of Mila Academ, ex COO of the Moja Foundation',
    function: 'Quuen has been leading open sources project at the Moja Fondation such as the open source movement',
  },

  column6: {
    image: 'images/speakers/img-1.jpg',
    names: 'Sheryl Amanda',
    profession: 'Executive Director of Searcher Foundation',
    function: 'Sheryl is the executive Director of Searcher Foundation, the non profit organization that operates WikiMoja. Wiki moja is a freely available in 290 langages and used by nearly half a billion around the goal',
  },

};

// eslint-disable-next-line no-restricted-syntax
for (const speaker of [...Object.keys(speakers)]) {
  // speaker = column1
  const element = document.createElement('div');
  element.classList.add('column-speaker');
  element.classList.add('hide-class');
  element.innerHTML = `
            <div class="content-speaker d-flex">
            <div class="img-box">
                <div class="checkbox"></div>
                <img class="speaker-img" src="${speakers[speaker].image}" alt="">
                </div>
                <div class="content-text ">
                <h5 class="speaker-title">${speakers[speaker].names} </h5>
                <h6 class="speaker-subtitle"><small><i><strong>${speakers[speaker].profession}</strong></i></small></h6>
                <div class="speaker-line"></div>
                <p class="speaker-p w-100">${speakers[speaker].function}</p>
                </div>
            </div>
      `;
  speakerGrid.appendChild(element);
}
const collection = document.getElementsByClassName('column-speaker');
// eslint-disable-next-line no-console
// eslint-disable-next-line no-plusplus
// eslint-disable-next-line no-restricted-syntax
// const i of Object.values(collection)
let i = 0;
while (i < 2) {
  collection[i].classList.remove('hide-class');
  // eslint-disable-next-line no-plusplus
  i++;
}

btnMore.addEventListener('click', () => {
  let i = 0;
  while (i < collection.length) {
    collection[i].classList.remove('hide-class');
    // eslint-disable-next-line no-plusplus
    i++;
  }
  btnMore.classList.toggle('active');
});