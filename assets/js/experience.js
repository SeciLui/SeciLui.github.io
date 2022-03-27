AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research & Development",
    cardImage: "assets/images/experience-page/qualup.png",
    place: "71260 Lugny, France",
    time: "(March, 2020 - present)",
      desp:"<li>Designed a “CLI (Command Line Interface) software that untwist images with the help of qr code simply placed in the field of view of the camera.</li><li>Created a small embedded ip camera system.</li><li>Worked on the project “FWS (Filament Width Sensor) embedded system capable of detecting the width of the filament of 3D printers.</li><li>Designed multiple “PCB (Printed Circuit Board) with esp32 module that use camera and thermal-camera.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Witness Angel",
    cardImage: "assets/images/experience-page/witnessangel.png",
    description:
      "R&D, developping the first embedded prototype.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
	{
		title: "Civic Tech Night Lyon",
		subtitle: "Embedded Developer",
		image: "assets/images/experience-page/ncc.png",
		desp: "I worked on the project Witness Angel, in order to create the first embedded prototype.",
		link: "https://nuitcodecitoyen.org/home.html",
	},
	{
		title: "Hacking Health Lyon",
		subtitle: "Student | Embedded Developer",
		image: "assets/images/experience-page/hh_lyon.jpg",
		desp: "To be done the 11,12,13 march 2022.",
		link: "https://www.hhlyon.org/",
	},

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
      ({ title, image, subtitle, desp, link}) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href=${link} class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
