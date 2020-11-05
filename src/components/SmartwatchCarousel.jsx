import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'

function SmartwatchCarousel() {
  useEffect(() => {
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
  })
  return (
    <div>
      <h1>this is the carousel</h1>
    </div>
  )
}

export default SmartwatchCarousel
