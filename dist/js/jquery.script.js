(function ($) {

  $.fn.modalFunc = function () {
    const overlay = document.createElement('div');
    overlay.classList.add('back-color', 'hide');
    document.body.appendChild(overlay);
    
    const dataModal = document.querySelectorAll('[data-modal]');
    const buttons = document.querySelector('.buttons');
    let currentWindow = '';
    

    const makeCloseIcon = function () {
      if (document.querySelector('.close-item') === null) {
        const closeItem = document.createElement('a');
        closeItem.classList.add('close-item');
        closeItem.innerHTML = '<img src="images/icon-popup-close.svg" alt="">';
        closeItem.dataset.modal = 'close';
        currentWindow.insertBefore(closeItem, currentWindow.querySelector('img'));
        closeItem.classList.remove('hide');
      }
    };

    const makeStyle = function setStyles(hide, modalElem, bagrElem) {
      if (hide === true) {
        modalElem.classList.add('hide');
        bagrElem.classList.add('hide');
        buttons.classList.remove('hide');
      } else {
        modalElem.classList.remove('hide');
        // modalElem.className = "modal";
        bagrElem.classList.remove('hide');
        buttons.classList.add('hide');
      }
      //console.log(/hide/.test(document.querySelector('[data-contant="uninstall"]').className));
    };

    return {
      show : function dsda() {
          currentWindow = document.querySelector(`div[data-contant="${event.target.dataset.link}"]`);
          //currentWindow.insertBefore(closeItem, currentWindow.firstChild);
          makeCloseIcon();
          makeStyle(false, currentWindow, overlay);
      },
      
      
  
      hide : function xzc() {
        console.log("HIDE");
        overlay.addEventListener('click', (event) => {
          if (event.target.classList === overlay.classList) {
            makeStyle(true, currentWindow, overlay);
          }
        });

        let closeModal = function closeM(event) {
          makeStyle(true, currentWindow, overlay);
          if (event.target.dataset.modal === 'alert') {
            setTimeout("alert('Some mesage')", 100);
          } else {
            console.log();
          }
        };
        document.addEventListener('click', closeModal);
      },
    };
  }
}(jQuery));
