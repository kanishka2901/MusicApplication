import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navigation Bar/NavBar'
import './PlayList.css';
import {Link} from 'react-router-dom';
import { IconButton } from '@mui/material';
//import { DataGrid } from '@mui/x-data-grid';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import base_url from '../../components/API/Bootapi';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from "axios";
import Music from '../music/Music';
import { toast } from 'react-toast';

function PlayList() {

  const [filter,setFilter]=useState("");
  
  const [song,setSong]=useState([]);
  
  const getAllMusicFromServer = () => {
    axios.get(`${base_url}/findAllMusic`).then( 
      (response) => {
        console.log(response.data);
        toast.success("Playlist successfully loaded");
        setSong(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  useEffect( () => {
    getAllMusicFromServer();
  });

    let FilteredSong= song.filter(song => {
      return Object.keys(song).some(key =>
        song[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });

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
          {
            song.length>0 ? FilteredSong.map( (item) =>   <Music song={item}/> ):"no songs" 
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