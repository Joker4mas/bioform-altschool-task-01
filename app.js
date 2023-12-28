
// function Menu(e){
//     let list = document.querySelector('ul');
//     e.name === 'menu'? (e.name = 'close',
//     list.classList.add('top-[80px]'),
//     list.classList.add('opacity-100'))
//     :(e.name = 'menu',
//     list.classList.remove('top-[80px]'),
//     list.classList.remove('opacity-100'))
// }

function showMenu (){
    let menu = document.querySelector('sideMenu');
    menu.style.display = 'flex';

}

function hideMenu (){
    const menu = document.querySelector('sideMenu');
    menu.style.display = 'none';

}