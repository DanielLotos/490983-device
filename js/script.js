const btnOpenMdlWriteUs = document.querySelector('.contact__write-us');
const btnOpenMdlMap = document.querySelector('.contact__image-map');

const popupMdlWriteUs = document.querySelector('.modal-write-us');
const popupMdlMap = document.querySelector('.modal-map');

const btnCloseMdl = document.querySelectorAll('.modal__btn-close');


const form = document.querySelector('.write-us__form');
const username = document.querySelector('[name=username]');
const email = document.querySelector('[name=email]');
const letter = document.querySelector('[name=letter]');


btnOpenMdlWriteUs.addEventListener('click', function (event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  popupMdlWriteUs.classList.add('modal-visible');
});

btnOpenMdlMap.addEventListener('click', function (event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  popupMdlMap.classList.add('modal-visible');
});

for (let i = 0; i < btnCloseMdl.length; i++)  {
  btnCloseMdl[i].addEventListener('click', function () {
    popupMdlWriteUs.classList.remove('modal-visible');
    popupMdlMap.classList.remove('modal-visible');
    popupMdlWriteUs.classList.remove('modal-error');
    popupMdlMap.classList.remove('modal-error');
  });
};


form.addEventListener('submit', function (event) {
  if (!username.value || !email.value || !letter.value) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    popupMdlWriteUs.classList.remove('modal-error');
    popupMdlWriteUs.offsetWidth = popupMdlWriteUs.offsetWidth;
    popupMdlWriteUs.classList.add('modal-error');
  }
});
