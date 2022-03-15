import { gsap } from "gsap";


function Animation () {
    const anim1 = gsap.from('.nav', {duration: 1.3, delay: .7, y: '-100%', ease: 'bounce'})
    const anim2 = gsap.from('.changeTime', {duration: 1.3, delay: 2, opacity: 0})
    const anim3 = gsap.from('.time-and-name', {duration: 1.3, delay: .7, x: '1000%', stagger: .3})
    const anim4 = gsap.from('.control-panel', {duration: 1.3, delay: .7, y: '100%', ease: 'bounce'})
    const anim5 = gsap.from('.app-container', {duration: .5, x: '101%'})

    let theme = document.querySelector('.theme')
    theme.addEventListener('click', ()=> {
        anim1.restart();
        anim2.restart();
        anim3.restart();
        anim4.restart();
        anim5.restart();
    })
}


export default Animation