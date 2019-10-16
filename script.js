// TODO
// - Remover try catch. Asegurar que hayan nulls ni undefineds

function esconderPortafolio() {
  try {
    let proyectos = document.querySelector(".proyectos--show");
    proyectos.classList.remove("proyectos--show");

    let verProyectos = document.querySelector(".ver-proyectos--hide");
    verProyectos.classList.remove("ver-proyectos--hide");

    let arrowButtons = document.querySelectorAll(".arrow-button--show");
    arrowButtons.forEach(button => {
      button.classList.remove("arrow-button--show");
    });

    let portafolioNombre = portafolio.querySelector(".portafolio-nombre--hide");
    portafolioNombre.classList.remove("portafolio-nombre--hide");

    let proyectoDetalles = portafolio.querySelector(".proyecto-detalles--show");
    proyectoDetalles.classList.remove("proyecto-detalles--show");

    let proyectoLink = portafolio.querySelectorAll(".proyecto-link--show");
    proyectoLink.forEach(link => {
      link.classList.remove("proyecto-link--show");
    });
  } catch (error) {}
}

// Mostrar portafolios
let portafolios = document.querySelectorAll(".portafolio");

portafolios.forEach(portafolio => {
  portafolio.addEventListener("click", () => {
    esconderPortafolio();

    let proyectos = portafolio.querySelector(".proyectos");
    proyectos.classList.add("proyectos--show");

    let verProyectos = portafolio.querySelector(".ver-proyectos");
    verProyectos.classList.add("ver-proyectos--hide");

    let arrowButtons = portafolio.querySelectorAll(".arrow-button");
    arrowButtons.forEach(button => {
      button.classList.add("arrow-button--show");
    });

    let portafolioNombre = portafolio.querySelector(".portafolio-nombre");
    portafolioNombre.classList.add("portafolio-nombre--hide");

    let proyectoDetalles = portafolio.querySelector(".proyecto-detalles");
    proyectoDetalles.classList.add("proyecto-detalles--show");

    let proyectoLink = portafolio.querySelectorAll(".proyecto-link");
    proyectoLink.forEach(link => {
      link.classList.add("proyecto-link--show");
    });
  });
});

// Esconder portafolios
document.addEventListener("click", e => {
  if (!e.target.closest(".portafolio")) esconderPortafolio();
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
