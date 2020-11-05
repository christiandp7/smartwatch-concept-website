import React, { useEffect } from 'react'
import Glidejs from '@glidejs/glide'



function SmartwatchCarousel() {

  useEffect(() => {
    const glide = new Glidejs(".glide", {
      peek: { before: 0, after: 70 },
      //perView: 3,
      perView: 2,
      type: "carousel",
      gap: 20,
      //autoplay: 4000,
      //focusAt: 3,
      direction: 'rtl'
    });

    /*glide.on(['mount.after'], function(param) {
      const preActiveElm = document.querySelector(".glide__slide--active");
      preActiveElm.classList.add("activated")
    })*/

    //glide.on(['run.before'], function(param) {
    //glide.on('run', function(param) {
    glide.on('swipe.end', function(param) {
      console.log(glide.index);
      console.log(param)
      /*const preActiveElm = document.querySelector(".glide__slide--active").nextElementSibling;
      preActiveElm.classList.add("activated")*/
    })

    glide.on(['run.after'], function(param) {
      /*const activatedElms = document.querySelector(".glide__slide--active");
      activatedElms.classList.remove("activated")*/
      /*activatedElms.forEach(function(elm) {
        elm.classList.remove("activated")
      })*/
      //activatedElms.classList.remove("activated")
    })

    //glide.mutate([modifyTranslate]).mount();
    glide.mount();

    return () => {
      //console.log("glide unmounted")
      glide.destroy();
    }
  })

  return (
    <div className="glide multi">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">1</li>
          <li className="glide__slide">2</li>
          <li className="glide__slide">3</li>
          <li className="glide__slide">4</li>
          <li className="glide__slide">5</li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir="<">
            Next
        </button>
      </div>
    </div>
  )
}

export default SmartwatchCarousel
