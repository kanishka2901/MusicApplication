import React,{useContext} from 'react'
import NavBar from '../../components/Navigation Bar/NavBar.js';
// import ImageSlider from '../../components/Slider/Slider.js'
import Cards from '../../components/Cards';
import { ToggleModeContext } from '../../components/ToggleModeContext';

export default function Homepage() {
  const { darkMode } = useContext(ToggleModeContext);

  return (
    <>

    <div className={darkMode ? 'Darkbg' : null}>
      <NavBar/>
      <label className={darkMode ? 'Darkbg Songs-List-Label' : 'Songs-List-Label'}>Recently Added Songs</label>
      <Cards />
    </div>

    </>
  )
}