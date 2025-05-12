    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("preloader-zoom-out");
      setTimeout(() => {
        window.location.href = "main-website.html"; 
      }, 1000);
    }, 5000);
