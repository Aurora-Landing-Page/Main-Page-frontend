export const details = [
    {
        card_num: 1,
        pos: [0, 26.5, 53.45],
        angl: [25, 0, -25],
        scal: [0.8, 1.1, 0.8],
        bgurl:'./images/BG3.jpeg',        
        title:'Nuclea',
        text:'Some random'
    },
    {
        card_num: 2,
        pos: [0, 25, -26.725],
        angl: [0, -25, 25],
        scal: [1, 0.8, 0.8],
        bgurl:'./images/BG2.png',

        title:'Mohit Chauhan',
        text:'Some random'
    },
    {
        card_num: 3,
        pos: [0, -52.75, -27.225],
        angl: [-25, 25, 0],
        scal: [0.8, 0.8, 1],
        bgurl:'./images/BG1.png',
        title:'SunBurn Campus',
        text:'Some random'
    }
]

export function check(){
    console.log("hello")
    if (window.innerWidth < 600) {
        
        details[0].pos = [0, 31.225, 60.45]
        details[1].pos = [0, 31.225, -30.225]
        details[2].pos = [0, -60.5, -31.225]
    }
    else{
        details[0].pos = [0, 26.5, 53.45]
        details[1].pos = [0, 25, -26.725]
        details[2].pos = [0, -52.75, -27.225]
    }
}