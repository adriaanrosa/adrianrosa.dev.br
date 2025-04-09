document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observer.unobserve(entry.target);
      }
    });
  });

  elementos.forEach((el) => observer.observe(el));
});

function typeWriter(elemento, texto, delay = 150) {
  let i = 0;
  function escrever() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, delay);
    }
  }
  escrever();
}

const h1 = document.querySelector("h1");
h1.innerHTML = "";
typeWriter(h1, "Desenvolvedor Web");

const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 1200) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
