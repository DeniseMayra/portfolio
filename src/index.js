$(window).scroll(function() {    
    headerPosition();
});

function headerPosition() {
    let position = document.querySelector('#presentation').getBoundingClientRect();

    let top = position.height / 2 //o sino 81

    if (position.height + position.y < top){
        document.querySelector('#name').classList.add('fix-name')
    } else {
        document.querySelector('#name').classList.remove('fix-name')
    }
}