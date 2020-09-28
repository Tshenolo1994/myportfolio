
gsap.registerPlugin(ScrollTrigger);
gsap.from(".work .card img",{
    scrollTrigger:{
      trigger:".select h4",
      pin: ".work .card",
      toggleActions:"play reverse resume complete",
      start:"+100 center",
      end:"bottom bottom",
   
      opacity:1,
      scale:6,    pin:".work",
   scrub:2,
      pinSpacing:false,
    },
    opacity:.1,
  stagger:.3,
    
    duration:6,
    delay:.5,
 
    ease:"slow"
    })
    
    gsap.from(".info p, .info h1, .follow .social", {
        opacity:1,
        opacity:.2,
    scrub:2,
    y:100,
    duration:2,
    delay:.5,
 
    ease:"slow"
    })
    gsap.from(".name h5", {
        opacity:1,
        opacity:.2,
    scrub:2,
    x:-50,
    duration:2,
    delay:.5,
 
    ease:"slow"
    })


    
    gsap.from(".info .image, .intro", {
        opacity:1,
        opacity:0,
    scrub:2,
 
    duration:.6,
    delay:.5,
 
    ease:"circ"
    })

    gsap.from(".passion .learn", {
      
        opacity:1,
        opacity:0,
    scrub:2,
    y:-50,
    duration:2,
    delay:.5,
 
    ease:"slow"
    })

    