let pumpbody = document.querySelector("#pumpbody")
let pumphandle = document.querySelector("#pumphandle")
let pumpoutput = document.querySelector("#pumpoutput")
let gamecontainer=document.querySelector(".gamecontainer")
let pumpcontainer = document.querySelector('.pumpcontainer')
let interval;
let isinflating = false;
let i = 0;
let j = 0
let maxsize = 2
let Baloon = null;
let BaloonImages=['images/Symbol 100001.png','images/Symbol 100002.png','images/Symbol 100003.png','images/Symbol 100004.png','images/Symbol 100005.png','images/Symbol 100006.png','images/Symbol 100007.png',
    'images/Symbol 100008.png','images/Symbol 100009.png','images/Symbol 100010.png'];
let AlfabetImage=['images/Symbol 10001.png','images/Symbol 10002.png',,'images/Symbol 10003.png','images/Symbol 10004.png','images/Symbol 10005.png'

    ,'images/Symbol 10006.png','images/Symbol 10007.png','images/Symbol 10008.png','images/Symbol 10009.png','images/Symbol 10010.png','images/Symbol 10011.png'

    ,'images/Symbol 10012.png','images/Symbol 10013.png','images/Symbol 10014.png','images/Symbol 10015.png','images/Symbol 10016.png','images/Symbol 10017.png'

    ,'images/Symbol 10018.png','images/Symbol 10019.png','images/Symbol 10020.png','images/Symbol 10021.png','images/Symbol 10022.png','images/Symbol 10023.png'

    ,'images/Symbol 10024.png','images/Symbol 10025.png','images/Symbol 10026.png'
]
function ReleaseBaloon() {
    let {x,y}=getRandomPosition(56,56)
    Baloon.style.transition = `transform 10s ease-in-out 0.2s`
    Baloon.style.transform = `scaleY(2) translateX(-${x}px) translateY(-${y}px) `

}
function GetRandomBaloonImage(){
   
        let ind=Math.floor(Math.random() * BaloonImages.length);
        return BaloonImages[ind]

}
function GetRandomAlfabet(){

    let ind=Math.floor(Math.random() * AlfabetImage.length);
    return AlfabetImage[ind]
}
function CreateBaloonImage(){
    let baloon_img=document.createElement('img')
    let baloon_string=document.createElement('img')
    baloon_alfabet=document.createElement('img')
    baloon_alfabet.setAttribute('class','alfabet')
    baloon_string.setAttribute('class','string')
    baloon_img.setAttribute('class','baloonimg')
    

    baloon_string.setAttribute('src','images/Symbol 100011.png')
    baloon_img.setAttribute('src',`${GetRandomBaloonImage()}`)
    baloon_alfabet.setAttribute('src',`${GetRandomAlfabet()}`)
    return {baloon_img,baloon_string,baloon_alfabet};
}
function CreateBaloon() {

    if (Baloon) {
        if (i < 2) {
            i = i + 0.5;
            Baloon.style.transform = `scaleY(${i}) translateY(-25px)`
            //  j=j+0.3
            // baloon.style.transform=`scaleX(${j})`
        } else {

            ReleaseBaloon()
            Baloon = null
            i = 0

        }
    } else {
        Baloon = document.createElement('div')
        Baloon.appendChild(CreateBaloonImage().baloon_img)
        Baloon.appendChild(CreateBaloonImage().baloon_string)
        Baloon.appendChild(CreateBaloonImage().baloon_alfabet)


        Baloon.setAttribute('class', 'baloon')
        Baloon.style.transform = `scaleY(1) translateY(-25px)`
        pumpcontainer.appendChild(Baloon)
    }





} function getRandomPosition(balloonWidth, balloonHeight) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Adjust the random position so that the balloon is fully within screen bounds
    const randomX = Math.random() * (screenWidth - balloonWidth - 20) + 10; // Adding margin of 10px
    const randomY = Math.random() * (screenHeight - balloonHeight - 20) + 10; // Adding margin of 10px

    return { x: randomX, y: randomY };
}


pumpbody.addEventListener('mousedown', (event) => {



    interval = setTimeout(() => {
        if (event.target.id == 'pumpbody') {
            CreateBaloon();
            pumphandle.style.position = 'absolute';
            pumphandle.style.zIndex = '2';
            pumphandle.style.width = '130px';
            pumphandle.style.height = '160px';
            pumphandle.style.left = '20%';
            pumphandle.style.bottom = '15%';
            // console.log(event.target.id)

        }


        // console.log('Button pressed');
    }, 200)

});

// Event for when the button is released
pumpbody.addEventListener('mouseup', (event) => {
    // clearInterval(interval);

    setTimeout(() => {
        pumphandle.style.position = 'absolute';
        pumphandle.style.zIndex = '2';
        pumphandle.style.width = '130px';
        pumphandle.style.height = '160px';

        pumphandle.style.left = '20%';
        pumphandle.style.bottom = '38%';
        console.log(event.target.id)
        // console.log('btn released')
    }, 400)
}

);
gamecontainer.addEventListener('click',(event)=>{

    if(event.target.parentElement.className=='baloon'){
        
        pumpcontainer.removeChild(event.target.parentElement)

    }
    
})