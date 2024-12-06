let timerDuration = 1000;
let timer;

const header1 = document.getElementById('header1');
const footer1 = document.getElementById('footer1');
const header2 = document.getElementById('header2');
const footer2 = document.getElementById('footer2');
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById('timer');

    function startTimer() {
        let remainingTime = timerDuration;

        timer = setInterval(() => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(timer);
                switchHeadersAndFooters();
                startTimer();
            }
        }, 1000);
    }

    function switchHeadersAndFooters() {
        const isHeader1Active = header1.style.display !== 'none';

        header1.style.display = isHeader1Active ? 'none' : 'block';
        footer1.style.display = isHeader1Active ? 'none' : 'block';
        header2.style.display = isHeader1Active ? 'block' : 'none';
        footer2.style.display = isHeader1Active ? 'block' : 'none';

        switchClass(isHeader1Active ? "header2" : "header1");
    }

    const switchClass = (activeHeader) => {
        if (activeHeader === "header1") {
            document.documentElement.style.fontSize = '62.5%';
            body.classList.add("site-1");
            body.classList.remove("site-2");
            header1.classList.add("active");
            header2.classList.remove("active");
            console.log("header 1 is active (site-1)");
        } else if (activeHeader === "header2") {
            document.documentElement.style.fontSize = '';
            body.classList.add("site-2");
            body.classList.remove("site-1");
            header2.classList.add("active");
            header1.classList.remove("active");
            console.log("header 2 is active (site-2)");
        }
    };

    startTimer();
});

const scrollToTop = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

scrollToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const containerBefore = document.getElementById("before-timer");
    const containerAfter = document.getElementById("after-timer");
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; // Текст Lorem Ipsum
    const screenHeight = window.innerHeight ;

    const tempParagraph = document.createElement("p");
    tempParagraph.textContent = loremIpsum;
    tempParagraph.style.visibility = "hidden";
    document.body.appendChild(tempParagraph);
    const paragraphHeight = tempParagraph.offsetHeight;
    document.body.removeChild(tempParagraph);

    const totalParagraphs = Math.ceil((2 * screenHeight) / paragraphHeight);

    const paragraphsBefore = Math.ceil(totalParagraphs / 2);
    const paragraphsAfter = totalParagraphs - paragraphsBefore;

    for (let i = 0; i < paragraphsBefore; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = loremIpsum;
        containerBefore.appendChild(paragraph);
    }

    for (let i = 0; i < paragraphsAfter; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = loremIpsum;
        containerAfter.appendChild(paragraph);
    }
});

function updateMenuText() {
    const menuText = document.querySelector('.menu-text');
    const clubRItem = document.querySelector('.clubR');
    const aide = document.querySelector('.aide');
    const vente = document.querySelector('.vente');

    if (window.innerWidth <= 993) {
        vente.textContent = 'Vendre';
    } else {
        vente.textContent =  'Mettre envente';
    }
    if (window.innerWidth <= 990) {
        menuText.textContent = 'Menu';
    } else {
        menuText.textContent = 'Parcourir les catégories';
    }

    if (window.innerWidth <= 768) {
        clubRItem.style.display = 'none';
    } else {
        clubRItem.style.display = '';
    }

    if (window.innerWidth <= 577) {
        aide.style.display = 'none';
    } else {
        aide.style.display='';
    }
}

function toggleMenu(header) {
    const ul = header.nextElementSibling;
    const img = header.querySelector('.toggle-img');

    if (ul) {
        ul.classList.toggle('active');
    }

    if (img) {
        if (ul && ul.classList.contains('active')) {
            img.src = './img/minusIcon.svg';
        } else {
            img.src = './img/plusIcon.svg';
        }
    }
}

updateMenuText();

window.addEventListener('resize', updateMenuText);