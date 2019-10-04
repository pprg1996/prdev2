// Mostrar portafolios
let portafolios = document.querySelectorAll(".portafolio");

portafolios.forEach(portafolio => {
  portafolio.addEventListener("click", () => {
    let proyectos = portafolio.querySelector(".proyectos");
    proyectos.classList.add("proyectos--show");

    let verProyectos = portafolio.querySelector(".ver-proyectos");
    verProyectos.classList.add("ver-proyectos--hide");

    let arrowButtons = portafolio.querySelectorAll(".arrow-button");
    arrowButtons.forEach(button => {
      button.classList.add("arrow-button--show");
    });
  });

  portafolio.addEventListener("blur", () => {
    let proyectos = portafolio.querySelector(".proyectos");
    proyectos.classList.remove("proyectos--show");

    let verProyectos = portafolio.querySelector(".ver-proyectos");
    verProyectos.classList.remove("ver-proyectos--hide");

    let arrowButtons = portafolio.querySelectorAll(".arrow-button");
    arrowButtons.forEach(button => {
      button.classList.remove("arrow-button--show");
    });
  });
});

// Esconder portafolios
document.addEventListener("click", e => {
  if (!e.target.closest(".portafolio")) {
    let proyectos = document.querySelector(".proyectos--show");
    proyectos.classList.remove("proyectos--show");

    let verProyectos = document.querySelector(".ver-proyectos--hide");
    verProyectos.classList.remove("ver-proyectos--hide");

    let arrowButtons = document.querySelectorAll(".arrow-button--show");
    arrowButtons.forEach(button => {
      button.classList.remove("arrow-button--show");
    });
  }
});

// Scrollear imagenes de los portafolios
let arrowButtons = document.querySelectorAll(".arrow-button");

arrowButtons.forEach(button => {
  button.addEventListener("click", () => {
    let proyectos = button.parentElement.querySelector(".proyectos");
    let scrollX = proyectos.getBoundingClientRect().width;

    if (button.classList.contains("arrow-button--left")) scrollX *= -1;

    proyectos.scrollBy(scrollX, 0);
  });
});
