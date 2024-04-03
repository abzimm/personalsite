const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
}, options);

//   COPY AND PASTE TO ADD MORE ANIMATIONS
const sections = document.querySelectorAll(".step");
const fade = document.querySelectorAll(".fade");
const up = document.querySelectorAll(".up");

sections.forEach((section) => {
  observer.observe(section);
});

fade.forEach((img) => {
  observer.observe(img);
});

up.forEach((img) => {
  observer.observe(img);
});

const gridItems = document.querySelectorAll(".grid-item");
let zoomedImg;

gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.src;
    if (!zoomedImg) {
      zoomedImg = document.createElement("img");
      zoomedImg.classList.add("zoomed");
      document.body.appendChild(zoomedImg);
      zoomedImg.addEventListener("click", closeZoomedImg);
    }
    zoomedImg.src = imgSrc;
  });
});

function closeZoomedImg() {
  zoomedImg.remove();
  zoomedImg = null;
}

function openPDF() {
  // Change the path to your local PDF file
  var pdfPath = "Resume_Zimmerman2024 (4).pdf";

  // Open the PDF file in a new window or tab
  window.open(pdfPath, "_blank");
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToPrototype() {
  document.getElementById("prototype").scrollIntoView({ behavior: "smooth" });
}
