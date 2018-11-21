(function modal() {
  const overlay = document.createElement('div');
  overlay.classList.add('back-color', 'hide');
  document.body.appendChild(overlay);

  const closeItem = document.createElement('a');
  closeItem.classList.add('close-item', 'hide');
  closeItem.innerHTML = '<img src="images/icon-popup-close.svg" alt="">';
  closeItem.dataset.modal = 'close';
  document.body.insertBefore(closeItem, document.body.firstChild);

  const dataModal = document.querySelectorAll('[data-modal]');
  const modalLinks = document.querySelectorAll('.modal-link');
  const buttons = document.querySelector('.buttons');
  let currentWindow = '';

  const makeStyle = function setStyles(hide, modalElem, bagrElem) {
    if (hide === true) {
      modalElem.classList.add('hide');
      bagrElem.classList.add('hide');
      buttons.classList.remove('hide');
    } else {
      modalElem.classList.remove('hide');
      bagrElem.classList.remove('hide');
      buttons.classList.add('hide');
    }
  };

  modalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      currentWindow = document.querySelector(`div[data-contant="${event.target.dataset.link}"]`);
      currentWindow.insertBefore(closeItem, currentWindow.firstChild);
      closeItem.classList.remove('hide');
      makeStyle(false, currentWindow, overlay);
    });
  });

  overlay.addEventListener('click', (event) => {
    if (event.target.classList === overlay.classList) {
      makeStyle(true, currentWindow, overlay);
    }
  });

  const closeModal = function closeM(event) {
    makeStyle(true, currentWindow, overlay);
    if (event.target.dataset.modal === 'alert') {
      setTimeout("alert('Some mesage')", 100);
    } else {
      console.log();
    }
  };

  for (let i = 0; i < dataModal.length; i += 1) {
    dataModal[i].addEventListener('click', closeModal);
  }
}());
