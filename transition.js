document.addEventListener("DOMContentLoaded", () => {
  // Trigger fade-in
  document.body.classList.add("page-loaded");


  document.querySelectorAll('a[href]').forEach(link => {
    const isSameSite = link.hostname === window.location.hostname;

    if (
      isSameSite &&
      !link.hasAttribute("target") &&
      !link.href.includes("#") &&
      !link.href.endsWith(".pdf")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetURL = this.href;

        const transitionContainer = document.querySelector('.page-transition');
        if (transitionContainer) {
          transitionContainer.classList.add("fade-out");


          setTimeout(() => {
            window.location.href = targetURL;
          }, 800);
        } else {

          window.location.href = targetURL;
        }
      });
    }
  });
});