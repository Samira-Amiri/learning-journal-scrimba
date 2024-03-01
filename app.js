const blogs = [
  {
    blogImg: "./img/1.jpg",
    blogDate: "FEB 2024",
    blogTitle: "Blog one",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/1.jpg",
    blogDate: "FEB 2024",
    blogTitle: "Blog Two",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/3.png",
    blogDate: "FEB 2024",
    blogTitle: "Blog Three",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/blog4.png",
    blogDate: "FEB 2024",
    blogTitle: "Blog Four",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/logo.jpg",
    blogDate: "FEB 2024",
    blogTitle: "Blog Five",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/logo.jpg",
    blogDate: "FEB 2024",
    blogTitle: "Blog Six",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
];

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const blogContainer = document.querySelector(".blog-container");
const viewMore = document.querySelector(".view-more");
const viewLess = document.querySelector(".view-Less");

menu.addEventListener("click", function () {
  document.querySelector(".menu-bar").classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  document.querySelector(".menu-bar").classList.add("hidden");
});

if (window.innerWidth >= 600) {
  console.log(window.innerWidth);
  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `<div class="blogs">
  <img src="${blogs[i].blogImg}" alt="" />
  <p class="blog-date">${blogs[i].blogDate}</p>
  <h2 class="blog-title">${blogs[i].blogTitle}</h2>
  <p class="blog-text">${blogs[i].blogText}</p>
  </div>
  `;
  }
} else if (window.innerWidth < 600) {
  console.log(window.innerWidth);
  for (let i = 0; i < 3; i++) {
    blogContainer.innerHTML += `<div class="blogs">
  <img src="${blogs[i].blogImg}" alt="" />
  <p class="blog-date">${blogs[i].blogDate}</p>
  <h2 class="blog-title">${blogs[i].blogTitle}</h2>
  <p class="blog-text">${blogs[i].blogText}</p>
  </div>
  `;
  }
}

viewMore.addEventListener("click", function () {
  for (let i = 3; i < blogs.length; i++) {
    blogContainer.innerHTML += `<div class="blogs">
  <img src="${blogs[i].blogImg}" alt="" />
  <p class="blog-date">${blogs[i].blogDate}</p>
  <h2 class="blog-title">${blogs[i].blogTitle}</h2>
  <p class="blog-text">${blogs[i].blogText}</p>
  </div>
  `;
  }
  viewMore.classList.add("hidden");
  viewLess.classList.remove("hidden");
});
