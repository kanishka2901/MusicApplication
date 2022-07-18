import React, {useState} from 'react';
import NavBar from '../../components/Navigation Bar/NavBar'
import './PlayList.css';
import {Link} from 'react-router-dom';
import { IconButton } from '@mui/material';
//import { DataGrid } from '@mui/x-data-grid';
import { SongList } from "../../components/SongList";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

function PlayList() {

  const [filter,setFilter]=useState("");
  
  const handleClickDel=(v) =>{
    const newList =[...SongList];
    const index = SongList.findIndex((song)=>song.id === v);
    newList.splice(index,1);
    console.log(newList);
  }
  // const handleClickEdit=(e,v) =>{
  //   console.log(v);
  //}

  // const columns = [
  //   { field: 'name', headerName: 'SONG NAME', width: 350 },
  //   { field: 'date', headerName: 'DATE OF RELEASE', width: 350},
  //   { field: 'singer', headerName: 'SINGER', width: 350},
  //   { field: 'actions', headerName:'', width:300,
  //     renderCell: (cellValues) =>{
  //       return(
  //         <>
  //           <DeleteIcon className='action-delete' onClick ={(e)=>{
  //             handleClickDel(cellValues.id);
  //           }}/>
  //           <EditOutlinedIcon className='action-edit' onClick ={(e)=>{
  //             handleClickEdit(e,cellValues);
  //           }}/>

  //         </>

  //       );
  //     }
  //   }
  // ];

  // const searchText=(event)=>{
  //   setFilter(event.target.value);
  // }

    let FilteredSong= SongList.filter(song => {
      return Object.keys(song).some(key =>
        song[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });

  return (
    <>
        <NavBar/>
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
          {/* <div style={{ height: 370, width: '95%', overflow: 'hidden', margin: 40 }}>
            <DataGrid
              rows={FilteredSong}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div> */}

          <div className='song-list'>
            {
              FilteredSong.map((song,index)=>(
                <div className='song-card' key={index}>
                    <p id='index'>0{index+1}</p>
                    <p>{song.name}</p>
                    <p>{song.date}</p>
                    <p>{song.singer}</p>
                    <div>
                      <DeleteIcon className='song-card-icons' onClick ={(e)=>{ handleClickDel(song.id)}}/>
                      <EditOutlinedIcon className='song-card-icons'/>                    
                      <FileDownloadRoundedIcon className='song-card-icons'/>
                      <MoreHorizTwoToneIcon className='song-card-icons'/>
                    </div>
                </div>
              ))
            }
          </div>
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