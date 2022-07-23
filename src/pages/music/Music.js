import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navigation Bar/NavBar'
import { IconButton } from '@mui/material';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Axios from 'axios';
import axios from "axios";
import base_url from '../../components/API/Bootapi';
import FileDownload from "js-file-download";
import { toast } from 'react-toast';

const Music = ({song}) => {
  const download =(e) =>{
    e.preventDefault()
    Axios({
      url:`${base_url}`,
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      FileDownload(res.data)
    })
  }

  const [songs,setSongs]=useState([]);
  
  const getAllMusicFromServer = () => {
    axios.get(`${base_url}/findAllMusic`).then( 
      (response) => {
        console.log(response.data);
        toast.success("Playlist successfully loaded");
        setSongs(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };


  const deleteSong =(e,id) => {
    e.preventDefault()
    axios.delete(`${base_url}/delete/{id}`).then( 
      (response) => {
        console.log(response.data);
        toast.success("Song successfully deleted");
        setSongs(response.data);
        getAllMusicFromServer();
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  }
  
    return (
        <div className='song-list'>
            {
                // song.map((item)=> ( 
                <div className='song-card' key={song.id}>
                    {/* <p id='index'>1</p> */}
                    <p>{song.songTitle}</p>
                    <p>{song.genre}</p>
                    <p>{song.artist}</p>
                    <div>
                      <DeleteIcon onClick={(e)=>deleteSong(e,song.id)} className='song-card-icons'  />
                      <EditOutlinedIcon className='song-card-icons'/>                    
                      <FileDownloadRoundedIcon onClick={(e)=>download(e)} className='song-card-icons'/>
                      <MoreHorizTwoToneIcon className='song-card-icons'/>
                    </div>
                </div>
                  //)
                }
          </div>
    )
};
export default Music;