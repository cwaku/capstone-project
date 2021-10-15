const open = document.querySelector('.open');
const speakerList = document.querySelector('.speakers-lineout');
const btn = document.getElementById('button');

const speakers = [
  6,
  {
    name: 'Yochi Mormor',
    image: 'images/speaker.png',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    summary2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quas?',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  open.addEventListener('click', () => {
    open.classList.toggle('oppenned');
  });

  for (let i = 1; i <= speakers[0]; i += 1) {
    const speakerCards = `<div id="speaker-${i}" class="only-desktop">
  <img src="${speakers[1].image}" alt="Image of speaker">
  <div>
  <h3>${speakers[1].name}</h3>
  <p class="speaker-summary">${speakers[1].summary}</p>
  <hr>
  <p>${speakers[1].summary2}</p>
  </div>
  </div>`;

    speakerList.innerHTML += speakerCards;
  }

  const eachSpeaker = document.querySelectorAll('#speaker-3, #speaker-4, #speaker-5, #speaker-6');

  if (window.innerWidth < 768) {
    eachSpeaker.forEach((el) => {
      el.style.display = 'none';
    });

    btn.addEventListener('click', () => {
      eachSpeaker.forEach((el) => {
        el.style.display = 'flex';
      });

      btn.style.display = 'none';
    });
  }
});
