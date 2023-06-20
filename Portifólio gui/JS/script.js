let ul = document.querySelector('header ul');
let menu = document.querySelector('.menu-hb');

function menuShow() {

    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }

    else {
        ul.classList.add('open');
    }
}

let ul2 = document.querySelector('header ul');

window.onscroll = () => {
    ul.classList.remove('open');
};

