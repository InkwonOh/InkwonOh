// Gnb
let lastScrollY = 0;
let ticking = false;

function doSomething(scroll_pos) {
    const gnb = document.querySelector('.gnb');
    if (scroll_pos > 300) {
        if (window.pageYOffset > scroll_pos) {
            gnb.classList.add('down');
        }
        else {
            gnb.classList.remove('down');
        }
    }
    lastScrollY = window.pageYOffset;
}

window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastScrollY);
            ticking = false;
        });

        ticking = true;
    }
});



const isIE = (window.navigator.userAgent.indexOf('Trident') != -1);

// 페이지 로드 
// document.addEventListener('DOMContentLoaded', function () {
//     const html = document.documentElement;
//     const btnDark = document.querySelector('#btn-theme');
//     const storedTheme = localStorage.getItem('darkTheme');

//     if (isIE) {
//         btnDark.style.display = 'none';
//     }
//     else {

//         if (storedTheme !== null) {
//             if (storedTheme === 'true') {
//                 html.classList.add('dark');
//                 btnDark.setAttribute('data-darkmode', 'true');
//             }
//         }
//         else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             html.classList.add('dark');
//             btnDark.setAttribute('data-darkmode', 'true');
//         }
//         document.body.style.visibility = 'visible';
//     }
// })

window.addEventListener('load', function () {
    // Darkmode
    const html = document.documentElement;
    const btnDark = document.querySelector('#btn-theme');

    btnDark.addEventListener('click', function () {
        html.classList.toggle('dark');
        isDarkMode = btnDark.getAttribute('data-darkmode');

        if (isDarkMode === 'false') { // 현재OFF, 버튼눌러서ON
            btnDark.setAttribute('data-darkmode', 'true');
            localStorage.setItem('darkTheme', 'true');
        }
        else { // 현재ON, 버튼눌러서OFF
            btnDark.setAttribute('data-darkmode', 'false');
            localStorage.setItem('darkTheme', 'false');
        }
    });

    // Go to top
    const goToTop = document.querySelector('#go-to-top');

    goToTop.addEventListener('click', function () {
        if (isIE) {
            window.scrollTo(0);
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Table Of Content
})