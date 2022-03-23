window.onload = function() {
    document.body.classList.remove('preload');

    const openModalButtons = document.querySelectorAll('[data-target]');
    const openModalPopUp = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');

    const overlay = document.getElementById('overlay');

    // To capture if user clicks on an item category on the item menu list
    openModalButtons.forEach( btn => {
        btn.addEventListener('click', () => {
            const modal = document.querySelectorAll(btn.dataset.target);
            openModal(modal);
        })
    });

    // To capture if user clicks on an item preview to open up modal popup for the item
    openModalPopUp.forEach( btn => {
        btn.addEventListener('click', () => {
            const products = document.querySelectorAll(btn.dataset.modalTarget);
            openModalPop(products);
        })
    });

    // To capture if user clicks the background overlay to close the modal popup
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.products.active')
        modals.forEach(products => {
        closeModal(products)
        })
    })

    // To capture if user clicks the close btn to close the modal popup
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
        const products = button.closest('.products')
        closeModal(products)
        })
    })


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

    function closeModal(products) {
        if (products == null) return

        // Remove the active classes from products and overlay when modal is closed
        products.classList.remove('active');
        overlay.classList.remove('active');

    }


};


