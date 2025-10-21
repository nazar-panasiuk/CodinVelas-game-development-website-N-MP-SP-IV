
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuToggle = document.getElementById('burger');
burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle('active_menu');
    
});


document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("active");
        menuToggle.classList.remove('active_menu');
    }
});

if (localStorage.getItem('cookiePopupClosed') === 'true') {
    document.getElementById('cookie-popup').classList.add('hidden');
}

document.getElementById('cookie-close-btn').addEventListener('click', function() {
    document.getElementById('cookie-popup').classList.add('hidden');
    localStorage.setItem('cookiePopupClosed', 'true');
});


/*
let modal1 = document.getElementById("myModal");
let span1 = document.getElementsByClassName("modal__close")[0];
let modal__btn1 = document.querySelector(".modal__btn")

window.addEventListener("DOMContentLoaded", function() {
    modal1.style.display = "flex";
})


modal__btn1.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}

*/


const formSend = async (formData) => {
    const response = await fetch("./mail.php", {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      throw new Error(`Fout bij adres ${url}, Fout status ${response.status}`);
    }
    return await response.text();
  };

  if (document.querySelector(".modal_form__form")) {
    const forms = document.querySelectorAll(".modal_form__form");

    forms.forEach(form => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        formSend(formData)
          .then((response) => {
            popup ? popup.classList.add("active__block") : console.log('popapa no')
            form.reset(); // очищаем поля формы
          })
          .catch((err) => console.error(err))
      });
    });
  }

  const popup = document.querySelector("#myPopup");

  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest("#confirmButton")) {
      popup ? popup.classList.remove("active__block") : console.log('popapa no')
    }
  })


