  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("preloader-zoom-out");
    setTimeout(() => {
        window.location.href = "";
    }, 1000);
  }, 5000);