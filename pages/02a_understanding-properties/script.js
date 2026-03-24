import gsap from 'gsap';

gsap.to('.box', {
    y: -50,
    opacity: 1,
    rotation: 360,
    background: '#ff6f61',
    borderRadius: '50%',
    scale: 1.25,
    duration: 1,
    delay: 0.5,
    ease: 'power1.inOut',
});
