import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navigation Bar/NavBar'
import './PlayList.css';
import {Link} from 'react-router-dom';
import { IconButton } from '@mui/material';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
// import base_url from '../../components/API/Bootapi';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
// import axios from "axios";
import { SongList } from '../../components/SongList';
import Music from '../music/Music';
import {useSongListQuery} from "../../services/MusicApi"
import { toast } from 'react-toast';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxLeUx0RWFbb1p6d1FMZVlBNQtUQF1hS35UdE1jXn9ccHJdQGNd');
function PlayList() {

  const [filter,setFilter]=useState("");
  
  // const [song,setSong]=useState([]);
  
  // const getAllMusicFromServer = () => {
  //   axios.get(`${base_url}/findAllMusic`).then( 
  //     (response) => {
  //       console.log(response.data);
  //       toast.success("Playlist successfully loaded");
  //       setSong(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //       toast.error("Something went wrong");
  //     }
  //   );
  // };

  // useEffect( () => {
  //   getAllMusicFromServer();
  // });

    // let FilteredSong= song.filter(song => {
    //   return Object.keys(song).some(key =>
    //     song[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    // });
    
    const{data,error,isLoading,isSuccess,isFetching}= useSongListQuery();
    
  useEffect(() =>{
    if(error){
      toast.error("Something went wrong")
    }
  })

  return (
    <>
        <NavBar setFilter={setFilter}/>
        <div className='Page'>
          <div  className="Playlist-Header">
            <h1 className='Playlist-Header-label'>Uploded Songs</h1>
          </div>
          <div className='Playlist-Search-bar'>
            <IconButton className='Playlist-search-icon'>
              <SearchRoundedIcon/>
            </IconButton>
            <input
              className='Playlist-search'
              placeholder='Search'
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            ></input>
            <div className='Playlist-header-icon'>
              <IconButton>
                <FilterAltRoundedIcon/>
              </IconButton>
              <IconButton>
                <FilterListRoundedIcon/>
              </IconButton>
            </div>
          </div >
           <GridComponent datasource={data}/>

          {data &&
            data.length>0 ? data.map( (song,index) =>   



            // <Music song={item}/> 




            <div className="song-card" key={song.id}>




            {/* <p id='index'>1</p>
            <p>{song.songTitle}</p>
            <p>{song.genre}</p>
            <p>{song.artist}</p> */}




            <p id='index'>0{index+1}</p>
                    <p>{song.name}</p>
                    <p>{song.date}</p>
                    <p>{song.singer}</p>
            <div>
              <DeleteIcon


                // onClick={(e) => deleteSong(e, song.id)}
                className="song-card-icons"


                
              />
              <Link to="/EditForm">
              <EditOutlinedIcon  className='song-card-icons'/>
              </Link>
              <FileDownloadRoundedIcon
                // onClick={(e) => download(e)}
                className="song-card-icons"
              />
              <MoreHorizTwoToneIcon className="song-card-icons" />
            </div>
          </div>
            ):"no songs" 
          }
          <div className='Playlist-Add-Btn'>
            <Link to="/AddMusic">
              <IconButton >
                <AddRoundedIcon/>
              </IconButton>
            </Link>
          </div>
        </div>
      </>
  )
}

export default PlayList