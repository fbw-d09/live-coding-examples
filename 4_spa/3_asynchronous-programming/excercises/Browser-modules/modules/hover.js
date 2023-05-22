function hoverHeader() {
  const header = document.querySelector('.header');
  const modal = document.getElementById('myModal');
  header.addEventListener('mouseover', (e) => {
    modal.style.display = 'block';
  });

  modal.addEventListener('click', (e) => {
    switch (e.target.className) {
      case 'close':
      case 'modal':
        modal.style.display = 'none';
        break;
    }
  });
}
