import React, { useState, useEffect } from 'react'
import NavBar from '../../components/Navigation Bar/NavBar'
import TextField from '@mui/material/TextField';
import './AddMusic.css';
import DefaultImg from '../../assets/DefaultImg1.jpg';
import UploadImg from '../../assets/Upload.png';
import DefaultFileImg from '../../assets/mp3.png'
import base_url from '../../components/API/Bootapi';
import axios from "axios";
import { toast } from 'react-toast';




const AddMusic = () => {


    let formData = new FormData();
    const [song, setShow] = useState({ });

    const [fileList, setFileList] = useState([]);
    const onFileDrop = (e) => {
        const file = e.target.files[0];
        setFileList([...fileList, file])
        console.log(file)
        const formData = new FormData();
        formData.append(file.name, file, file.name)
        console.log(file.name)
    }

    const SubmitFileData = (data) => {
        axios.post(`${base_url}/createMusic`,
            data
        )
            .then((response) => {
                console.log(response);
                toast.success("uploaded successfully");
                setShow(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            });
    };
    useEffect(() => {
        SubmitFileData();
    }, []);

    const onInputChange = (e) => {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            formData.append('file', e.target.files[0]);
        }
    };

    // let fileList = new FormData();
    // const onFileDrop = (e) => {
    //     console.log(e.target.files[0])
    //     if(e.target && e.target.files[0]){
    //         fileList.append('file',e.target.files[0])
    //     }
    // }
    const fileRemove = (filename) => {
        setFileList(fileList.filter(file => file.name !== filename))
        console.log(filename)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("success")
    }
    //form handler function
    const handleForm = (e) => {
        SubmitFileData(song);
        console.log(song);
        e.preventDefault();
    }

    return (
        <>
            <NavBar />
            <h1 className='AddMusic-Header'>Add New Audio Track</h1>
            <div className='AddMusic-MainForm'>
                <div className='AddMusic-Form-img'>
                    <img src={DefaultImg} alt='' />
                </div>
                <form className='AddMusic-Form' onSubmit={handleForm}>
                    <TextField
                        className='Add-Field' htmlFor="standard-basic"
                        id="standard-basic"
                        label="Title"
                        type="text"
                        variant='standard'
                    //value={Name}
                    onChange={(e)=>{setShow({...song,songTitle:e.target.value})}}
                    />
                    <p></p>
                    <TextField
                        className='Add-Field' htmlFor="standard-basic"
                        id="standard-basic"
                        label="Artist"
                        type="text"
                        variant='standard'
                    //value={Name}
                    onChange={(e)=>{setShow({...song,artist:e.target.value})}}
                    />
                    <p></p>
                    <TextField
                        className='Add-Field' htmlFor="standard-basic"
                        id="standard-basic"
                        label="Genre"
                        type="text"
                        variant='standard'
                    //value={Name}
                    onChange={(e)=>{setShow({...song,genre:e.target.value})}}
                    />
                    <p></p>
                </form>
            </div>
            <div className='AddMusic-Filesupload'>
                <div className='Drag-drop'>
                    <img src={UploadImg} alt=''></img>
                    <p>Drag and Drop Files to upload</p>
                    <input type="file" onChange={(e)=>{setShow({...song,fileName:e.target.files[0]})}} />
                </div>
                <div className='Files-uploaded'>
                    <div className='Files-uploaded-file'>
                        {
                            fileList.length > 0 ? (
                                fileList.map((item, index) => (
                                    <div key={index} className="Files-uploaded-item">
                                        <img src={DefaultFileImg} alt='' />
                                        <div className='Files-uploaded-item-info'>
                                            <p>{item.songTitle}<br />{item.size}B</p>
                                        </div>
                                        <span className="Files-uploaded-item-del" onClick={() => fileRemove(item.name)}>x</span>
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                    <button type='submit' onClick={SubmitFileData}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default AddMusic;