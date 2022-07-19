import { responsiveFontSizes } from "@mui/material";
// import React from "react";
import SongServices from "./Services/SongServices";
import NavBar from "./Navigation Bar/NavBar";


import React, { useState } from 'react';
import NavBar from '../../components/Navigation Bar/NavBar'
import './PlayList.css';
import { Link } from 'react-router-dom';
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


class SongComponent extends React.Component {
    constructor() {
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        SongServices.getAllMusic.then((response) => {
            this.setState({ songs: response.data })
        }
        );
    }
    render() {
        return (
            <>
                <NavBar />
                <div className='Page'>
                    <div className="Playlist-Header">
                        <h1 className='Playlist-Header-label'>Uploded Songs</h1>
                    </div>
                    <div className='Playlist-Search-bar'>
                        <IconButton className='Playlist-search-icon'>
                            <SearchRoundedIcon />
                        </IconButton>
                        <input
                            className='Playlist-search'
                            placeholder='Search'
                            type="text"
                        // value={filter}
                        // onChange={(e) => setFilter(e.target.value)}
                        ></input>
                        <div className='Playlist-header-icon'>
                            <IconButton>
                                <FilterAltRoundedIcon />
                            </IconButton>
                            <IconButton>
                                <FilterListRoundedIcon />
                            </IconButton>
                        </div>
                    </div >
                    <div className='song-list'>
                        {
                            this.state.songs.map(song => (
                                <div className='song-card' key={song.id}>
                                    <p id='id'>0{song.id}</p>
                                    <p>{song.songTitle}</p>
                                    <p>{song.genre}</p>
                                    <p>{song.artist}</p>
                                    <div>
                                        <DeleteIcon className='song-card-icons' onClick={(e) => { handleClickDel(song.id) }} />
                                        <EditOutlinedIcon className='song-card-icons'   />
                                        <FileDownloadRoundedIcon className='song-card-icons' />
                                        <MoreHorizTwoToneIcon className='song-card-icons' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='Playlist-Add-Btn'>
                        <Link to="/AddMusic">
                            <IconButton >
                                <AddRoundedIcon />
                            </IconButton>
                        </Link>
                    </div>

                </div>
            </>
        )
    }
}
export default SongComponent();