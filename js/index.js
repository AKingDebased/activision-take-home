var modalButton = document.querySelector('.button'),
    modalWindow = document.querySelector('.modal-window'),
    modalShade = document.querySelector('.modal-shade'),
    modalClose = document.querySelector('.modal-close'),
    videoPlayer = document.querySelector('iframe');

function hideModal () {
    modalShade.classList.add('invisible');
    modalWindow.classList.add('invisible');
    videoPlayer.src = videoPlayer.src;
}

modalButton.addEventListener('click', function () {
    modalShade.classList.remove('invisible');
    modalWindow.classList.remove('invisible');
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27 && !modalWindow.classList.contains('invisible')) {
        hideModal();
    } 
});

modalShade.addEventListener('click', function () { hideModal() });