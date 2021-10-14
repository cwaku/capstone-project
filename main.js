const hamburger = document.getElementById("hamburger-icon");
const open = document.querySelector(".open");
const speakerList = document.querySelector(".speakers-lineout");

const speakers = [
  6,
  (speaker = {
    name: "Yochi Mormor",
    image: "images/speaker.png",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    summary2:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quas?",
  }),
];

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

document.addEventListener("DOMContentLoaded", () => {
  open.addEventListener("click", () => {
    open.classList.toggle("oppenned");
  });
});
