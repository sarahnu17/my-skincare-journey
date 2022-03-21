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

openModalPopUp.forEach( btn => {
    btn.addEventListener('click', () => {
        const products = document.querySelectorAll(btn.dataset.modalTarget);
        openModalPop(products);
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

function openModalPop(products) {
    if (products == null) return

    // Loop through the products array and add active class to the product that was clicked on
    for(var i = 0; i < products.length; i++) {
        products[i].classList.add('active');
    }
    // Add the black overlay to background of the popup item
    overlay.classList.add('active');

}