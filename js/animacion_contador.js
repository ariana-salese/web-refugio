function animacion_contador(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            contador = entry.target;
            if (contador.id == "contador_transitos_realizados") { animacion_contador(contador, 0, 132, 3000)}
            else if (contador.id == "contador_adopciones") { animacion_contador(contador, 0, 215, 3000)}
            else if (contador.id == "contador_donaciones") { animacion_contador(contador, 0, 1222, 3000)};
        }
    });
});
  
observer.observe(document.querySelector('#contador_transitos_realizados'));
observer.observe(document.querySelector('#contador_adopciones'));
observer.observe(document.querySelector('#contador_donaciones'));
