let header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let top = document.querySelector('.top');
    if (window.scrollY > 0) {
        header.style.background = '#fff'
        header.style.transition = '.5s'
        header.style.boxShadow = '1px 1px 15px #cacaca'
    }
    else if(window.scrollY >= 0) {
        header.style.background = 'none'
        header.style.boxShadow = 'none'
    }
});

window.addEventListener('scroll', () => {
    let top = document.querySelector('.top1');
    top.style.display = 'none'
    if (window.scrollY > 0) {
        top.style.display = 'block'
    }
    else {
        top.style.display = 'none'
    }
});

document.querySelector('.navbar-toggler').addEventListener('click', ()=> {
    header.style.background = '#fff'
});


