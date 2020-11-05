import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'

function SmartwatchCarousel() {
  /*useEffect(() => {
    const glide = new Glidejs(".glide", {
      peek: { before: 0, after: 70 },
      perView: 3,
      type: "carousel",
      gap: 20,
      //autoplay: 4000,
      //focusAt: 3,
      direction: 'rtl'
    });
    glide.mount();
    return () => {
      glide.destroy()
    }
  })*/
  return (
    <div>
      <div className="glide">
        <div className="glide__slide">1</div>
        <div className="glide__slide">2</div>
        <div className="glide__slide">3</div>
        <div className="glide__slide">4</div>
        <div className="glide__slide">5</div>
      </div>

    </div>
  )
}

export default SmartwatchCarousel
