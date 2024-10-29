export default function initAnimacaoScroll() {
  const divs = document.querySelectorAll('[data-anima="scroll"]');
  if (divs.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      divs.forEach((div) => {
        const divTop = div.getBoundingClientRect().top;
        const isdivVisible = divTop - windowMetade < 0;
        if (isdivVisible) div.classList.add("ativo");
        else div.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
