var card1 = document.querySelector('.card1')
var card2 = document.querySelector('.card2')
var card3 = document.querySelector('.card3')
var card3cont = document.querySelector('.card_3_container');
var card2cont = document.querySelector('.card_2_container');
var card1cont = document.querySelector('.card_1_container');
var body = document.querySelector('body');
var rightbutton = document.querySelector('.button2')
var leftbutton = document.querySelector('.button1')





var details = [
    {
        cardcontr: card1cont,
        card: card1,
        pos: [0, 21.225, 42.45],
        angl: [25, 0, -25],
        scal: [0.8, 1.1, 0.8],
        bgurl:'./assets/BG2.png'
    },
    {
        cardcontr: card2cont,
        card: card2,
        pos: [0, 21.225, -21.225],
        angl: [0, -25, 25],
        scal: [1, 0.8, 0.8],
        bgurl:'./assets/BG3.jpeg'
    },
    {
        cardcontr: card3cont,
        card: card3,
        pos: [0, -42.45, -21.225],
        angl: [-25, 25, 0],
        scal: [0.8, 0.8, 1],
        bgurl:'./assets/BG1.png'
    }
]

function check(){
    console.log("hello")
    if (window.innerWidth < 600) {
        
        details[0].pos = [0, 31.225, 60.45]
        details[1].pos = [0, 31.225, -31.225]
        details[2].pos = [0, -60.5, -31.225]
    }
    else{
    
    }
}
details[1].card.style.color="white"
details[0].card.style.filter='brightness(0.57)'
details[2].card.style.filter='brightness(0.57)'
var i = 0;
body.style.backgroundImage=`url(${details[0].bgurl})`

leftbutton.addEventListener('click', (event) => {
    check();
    event.preventDefault();
    ++i;
    i %= 3;
    body.style.backgroundImage=`url(${details[i].bgurl})`
    for (let j = 0; j < 3; j++) {
        details[j].cardcontr.style.cssText = `z-index:2;left:${details[j].pos[i]}vw;transform:scaleY(${details[j].scal[i]})`
        details[j].card.style.transform = `rotateY(${details[j].angl[i]}deg)`
        details[j].card.style.filter='brightness(0.57)'
        details[j].card.style.color="rgba(0,0,0,0)"

        
        // details[j].cardcontr.style.cssText="transform:scaleX(1.0)"
    }
    let k = ((1 - i) % 3);
    if (k == -1) {
        k = 2;
    }
    details[k].cardcontr.style.zIndex = "5"
    details[k].card.style.filter="brightness(1)"
    details[k].card.style.color="white"
})

rightbutton.addEventListener('click', (event) => {
    check();

    event.preventDefault();
    ++i;
    i = ((i + 1) % 3);
    body.style.backgroundImage=`url(${details[i].bgurl})`
    // console.log(sl)
    for (let j = 2; j >= 0; j--) {
        details[j].cardcontr.style.cssText = `z-index:2;left:${details[j].pos[i]}vw;transform:scaleY(${details[j].scal[i]})`
        details[j].card.style.transform = `rotateY(${details[j].angl[i]}deg)`
        details[j].card.style.filter='brightness(0.57)'
        details[j].card.style.color="rgba(0,0,0,0)"
    }
    let k = ((1 - i) % 3);
    if (k == -1) {
        k = 2;
    }
    details[k].cardcontr.style.zIndex = "5"
    details[k].card.style.filter="brightness(1)"
    details[k].card.style.color="white" 
})