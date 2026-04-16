/* =========================================
   EXCEL PLATFORM - script.js
   Professional Navigation Controller
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       UNIVERSAL FILE OPENER
    =============================== */
    function openFile(path) {
        window.open(path, "_blank");
    }

    /* ===============================
       ORQAGA QAYTISH
    =============================== */
    const backButtons = document.querySelectorAll(".back-btn");
    backButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.history.back();
        });
    });

    /* ===============================
       TELEGRAM ADMIN
    =============================== */
    const telegramBtn = document.getElementById("telegramBtn");
    if (telegramBtn) {
        telegramBtn.addEventListener("click", function () {
            window.open("https://t.me/seyitova", "_blank");
        });
    }

    /* ===============================
       KITOBLAR SAHIFASI
    =============================== */
    const book5 = document.getElementById("book5");
    const book6 = document.getElementById("book6");
    const book7 = document.getElementById("book7");

    if (book5) {
        book5.addEventListener("click", function () {
            openFile("Kitoblar/5-sinf_darslik.pdf");
        });
    }

    if (book6) {
        book6.addEventListener("click", function () {
            openFile("Kitoblar/6-sinf_darslik.pdf");
        });
    }

    if (book7) {
        book7.addEventListener("click", function () {
            openFile("Kitoblar/7-sinf_darslik.pdf");
        });
    }

    /* ===============================
       SLAYDLAR SAHIFASI
    =============================== */
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");
    const slide4 = document.getElementById("slide4");

    if (slide1) {
        slide1.addEventListener("click", function () {
            openFile("Slaydlar/1.pptx");
        });
    }

    if (slide2) {
        slide2.addEventListener("click", function () {
            openFile("Slaydlar/2.pptx");
        });
    }

    if (slide3) {
        slide3.addEventListener("click", function () {
            openFile("Slaydlar/3.pptx");
        });
    }

    if (slide4) {
        slide4.addEventListener("click", function () {
            openFile("Slaydlar/4.pptx");
        });
    }

    /* ===============================
       TESTLAR SAHIFASI
    =============================== */
    const test5 = document.getElementById("test5");
    const test6 = document.getElementById("test6");
    const test7 = document.getElementById("test7");

    if (test5) {
        test5.addEventListener("click", function () {
            openFile("Testlar/5-sinf_test.pdf");
        });
    }

    if (test6) {
        test6.addEventListener("click", function () {
            openFile("Testlar/6-sinf_test.pdf");
        });
    }

    if (test7) {
        test7.addEventListener("click", function () {
            openFile("Testlar/7-sinf_test.pdf");
        });
    }

    /* ===============================
       HISOBOTLAR SAHIFASI
    =============================== */
    const bsb = document.getElementById("bsb");
    const chsb = document.getElementById("chsb");
    const metodik = document.getElementById("metodik");

    if (bsb) {
        bsb.addEventListener("click", function () {
            openFile("Hisobotlar/BSB_uchun.xlsx");
        });
    }

    if (chsb) {
        chsb.addEventListener("click", function () {
            openFile("Hisobotlar/CHSB_uchun.xlsx");
        });
    }

    if (metodik) {
        metodik.addEventListener("click", function () {
            openFile("Hisobotlar/Metodik_qollanma.pdf");
        });
    }

    /* ===============================
       SMOOTH PAGE TRANSITION
    =============================== */
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && href !== "#") {
                e.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

});
