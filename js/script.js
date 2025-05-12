    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("preloader-zoom-out");
      setTimeout(() => {
        window.location.href = "https://globalvoiceacademy.netlify.app/"; 
      }, 1000);
    }, 5000);
