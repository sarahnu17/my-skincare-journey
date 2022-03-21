const openModalButtons = document.querySelectorAll('[data-target]');
const openModalPopUp = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');


openModalButtons.forEach( btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelectorAll(btn.dataset.target);
        openModal(modal);
    })
});

function openModal(modal) {
    if(modal == null) return

    // Get rid of previous items shown on screen
    document.querySelectorAll('.item').forEach(function(el) {
        el.style.display = "none";
    });

    //Then displays only the targeted menu items
    modal.forEach(function(el) {
        el.style.display = "grid";
    });
}