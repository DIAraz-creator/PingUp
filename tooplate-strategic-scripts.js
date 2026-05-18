document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. SERVICES / FEATURES TABS
    ========================== */

    const tabs = document.querySelectorAll(".service-tab");
    const contents = document.querySelectorAll(".service-details");

    function showService(id) {
        contents.forEach(content => {
            content.classList.remove("active");
        });

        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        const targetContent = document.getElementById(id);
        const targetTab = document.querySelector(`[data-service="${id}"]`);

        if (targetContent) targetContent.classList.add("active");
        if (targetTab) targetTab.classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const serviceId = this.getAttribute("data-service");
            showService(serviceId);
        });
    });

    // default first tab active
    if (tabs.length > 0) {
        const firstId = tabs[0].getAttribute("data-service");
        showService(firstId);
    }


    /* =========================
       2. MESSAGES TOGGLE (LEFT / RIGHT)
    ========================== */

    const messageBtns = document.querySelectorAll(".message-btn");
    const messageBoxes = document.querySelectorAll(".message-box");

    messageBtns.forEach(btn => {
        btn.addEventListener("click", function () {

            const target = this.getAttribute("data-message");

            messageBtns.forEach(b => b.classList.remove("active"));
            messageBoxes.forEach(box => box.classList.remove("active"));

            this.classList.add("active");

            const targetBox = document.getElementById(target);
            if (targetBox) {
                targetBox.classList.add("active");
            }
        });
    });


    /* =========================
       3. PRIVACY / TERMS / SUPPORT
    ========================== */

    const footerBtns = document.querySelectorAll(".footer-link-btn");
    const footerSections = document.querySelectorAll(".footer-section");

    footerBtns.forEach(btn => {
        btn.addEventListener("click", function () {

            const target = this.getAttribute("data-footer");

            footerBtns.forEach(b => b.classList.remove("active"));
            footerSections.forEach(sec => sec.classList.remove("active"));

            this.classList.add("active");

            const targetSec = document.getElementById(target);
            if (targetSec) {
                targetSec.classList.add("active");
            }
        });
    });


    /* =========================
       4. MOBILE MENU
    ========================== */

    const menu = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav-links");

    if (menu) {
        menu.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

});
