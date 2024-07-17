document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".read-more");
    const aboutContent = document.querySelector(".about-content p");
    let isExpanded = false;
  
  
    readMoreLink.addEventListener("click", function () {
      if (isExpanded) {
        aboutContent.style.display = "none";
        readMoreLink.textContent = "Read More";
      } else {
        aboutContent.style.display = "block";
        readMoreLink.textContent = "Read Less";
      }
  
      isExpanded = !isExpanded;
    });
  });
  
