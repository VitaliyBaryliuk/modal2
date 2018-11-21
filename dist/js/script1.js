
const uninstall = document.querySelector('[data-link="uninstall"]');
const closeLinks = document.querySelectorAll('[data-modal]');
const uninstallModal = $('[data-contant="uninstall"]').modalFunc();
// console.log(closeLinks.get(0));
uninstall.addEventListener('click',  function() {
  uninstallModal.show();
  });

  for(let i = 0; i < closeLinks.length; i++) {
    closeLinks[i].addEventListener('click', (event) => {
      uninstallModal.hide();
    });
  }
