import React, { useEffect } from 'react'
import Glidejs from '@glidejs/glide'

import Card from './SmartwatchCard'

// assets
import sm_dark from '../assets/images/smartwatch_dark.png'
import sm_pink from '../assets/images/smartwatch_pink.png'
import sm_white from '../assets/images/smartwatch_white.png'
import { ArrowRight } from '../svg/Icons'

function SmartwatchCarousel() {

  useEffect(() => {
    const glide = new Glidejs(".glide", {
      peek: { before: 0, after: 300 },
      perView: 4,
      //perView: 2,
      type: "carousel",
      gap: 25,
      //autoplay: 4000,
      //focusAt: 3,
      direction: 'rtl'
    });

    /*glide.on(['mount.after'], function(param) {
      const preActiveElm = document.querySelector(".glide__slide--active");
      preActiveElm.classList.add("activated")
    })*/

    glide.on(['run.before'], function(param) {
    //glide.on('run', function(param) {
    //glide.on('swipe.end', function(param) {
      console.log(glide.index);
      console.log(param)
      const preActiveElm = document.querySelector(".glide__slide--active").nextElementSibling;
      preActiveElm.classList.add("activated");
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
          <li className="glide__slide"><Card image={sm_pink} title="Pink" /></li>
          <li className="glide__slide"><Card image={sm_dark} title="Dark" /></li>
          <li className="glide__slide"><Card image={sm_white} title="White" /></li>
          <li className="glide__slide"><Card image={sm_pink} title="Pink" /></li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir="<">
            <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SmartwatchCarousel
