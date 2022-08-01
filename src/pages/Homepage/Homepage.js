import React from 'react'
import NavBar from '../../components/Navigation Bar/NavBar.js';
// import ImageSlider from '../../components/Slider/Slider.js'
import Cards from '../../components/Cards'
import RenderOnAuthenticated from '../../components/RenderOnAuthenticated'

export default function Homepage() {

  return (
    <>
    <RenderOnAuthenticated>
    <div>
      <NavBar/>
      <Cards input/>
    </div>
    </RenderOnAuthenticated>
    </>
  )
}