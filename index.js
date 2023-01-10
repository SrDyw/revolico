const main__document = document.querySelector('.main__content');

const shop__btn = document.querySelector('.shop__btn');
const sell__btn = document.querySelector('.sell__btn');
const close__btn = document.querySelector('.close__btn');
const modal_win = document.querySelector('.modal_win');
const modal_inovkers = document.querySelectorAll('.modal_inovker');


let home__ret = document.querySelector('.home__ret');
const breadcrumbs = document.querySelector('.breadcrumbs');

const updateBreadcumb = (action) => {
    if (action == 'add'){
        breadcrumbs.innerHTML = `
            <a href="#" class="home__ret">home</a>
            <span><ion-icon name="caret-forward-outline"></ion-icon></span>
            <a href="#">shop</a>
        `
    }
    else 
        breadcrumbs.innerHTML = `
                <a href="#" class="home__ret">home</a>
            `

    home__ret = document.querySelector('.home__ret');
    home__ret.onclick = () => {
        returnHome();
    }
            
} 

const returnHome = () => {
    main__document.classList.add('home__active');
    main__document.classList.remove('shop__active');

    updateBreadcumb('remove');

}

const goShop = () => {
    main__document.classList.remove('home__active');
    main__document.classList.add('shop__active');

    updateBreadcumb('add');
}



shop__btn.onclick = () => {
    goShop();
}

home__ret.addEventListener('click',  e => {
    returnHome();
})

close__btn.onclick = () => {
    modal_win.classList.add('deactive');
}

modal_inovkers.forEach(invoker => {
    invoker.onclick = () => {
        modal_win.classList.remove('deactive');
    }
})
