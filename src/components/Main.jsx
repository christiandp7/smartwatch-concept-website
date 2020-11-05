import React from 'react'
import SmartwatchCarousel from './SmartwatchCarousel'
// assets
import bigWatch from '../assets/images/smartwatch_pink.png'

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="">
          <div className="row">
            <div className="column col-half text-center">
              <div className="hero__content">
                <h1 className="hero__title">
                  Smartwatch
                </h1>
                <h3 className="hero__subtitle">
                  Element Serie
                </h3>
                <p className="hero__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Aliquam congue sed et leo, dignissim odio justo.
                </p>
              </div>
              <SmartwatchCarousel />
            </div>
            <div className="column col-half">
              <img src={bigWatch} className="hero__bigWatch" alt="white smartwatch"/>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default Main
