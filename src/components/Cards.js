import React from 'react'
import {SongList} from './SongList.js';
import './Cards.css'
const Cards = () => {

  return (
  <>
  <label className='Songs-List-Label'>Recently Added Songs</label>
    <div className='Songs-List'>
      {SongList.map((song,index) => (
        <div className='card' key={index}>
          <div>
            <img className='song-img' src={song.src} alt=''/>
          </div>
          <div id='song-details'>
            <h3 className='song-name'>{song.name}</h3>
            <h3 className='song-singer'>{song.singer}</h3>
          </div>
        </div>
      ))}
    </div>
  </>
  
  )
}

export default Cards

