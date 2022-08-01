import './SongDetails.css';
import * as React from 'react';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { Link } from 'react-router-dom';
import icon from './../../assets/UserIcon.svg'
import logo from './../../assets/Logo.png';
import {registerLicense} from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxLeUx0RWFbb1p6d1FMZVlBNQtUQF1hS35UdE1jXn9ccHJdQGNd');

class SongDetails extends React.Component{

    // dropdown= false;
    // setDropdown(state){
    //     dropdown= state;
    // }
    dataSource =
            [
                {
                    id: 1,
                    src: "https://c-fa.cdn.smule.com/smule-gg-s-sf-bck2/arr/83/ee/036d0701-93fe-4bcc-a300-54ce0da4039b_1024.jpg",
                    name: "Lily",
                    date: "14 December 2018",
                    singer: "Alan Walker, Emelie Hollow, K-391",
                },
                {
                    id: 2,
                    src: "https://i1.sndcdn.com/artworks-hHRNAPyoL1gTPNV7-mUwz9A-t500x500.jpg",
                    name: "Shape Of You",
                    date: "6 January 2017",
                    singer: "Ed Sheeran"
                },
                {
                    id: 3,
                    src: "https://i.scdn.co/image/ab67616d0000b2737636e1c9e67eaafc9f49aefd",
                    name: "Without Me",
                    date: "15 May 2002",
                    singer: "Halsey"
                },
                {
                    id: 4,
                    src: "https://i1.sndcdn.com/artworks-000101311168-1c6eo0-t500x500.jpg",
                    name: "18",
                    date: "17 November 2014",
                    singer: "1-Direction"
                },
                {
                    id: 5,
                    src: "https://c.saavncdn.com/393/Happier-English-2018-20180815234257-500x500.jpg",
                    name: "Happier",
                    date: "16 August 2018",
                    singer: "Marshmello ft. Bastille"
                },
                {
                    id: 6,
                    src: "https://i1.sndcdn.com/artworks-000357525834-ayfg35-t500x500.jpg",
                    name: "Back To You",
                    date: "10 May 2018",
                    singer: "Selena Gomez"
                },
                {
                    id: 7,
                    src: "https://m.media-amazon.com/images/I/61WAMcRj32L._AC_SL1200_.jpg",
                    name: "Dancing On My Own",
                    date: "15 April 2016",
                    singer: "Calum Scott"
                }
            ];
        splitterInstance
        data = this.dataSource;
        paneSize1 = "20%";
        minimumSize1 = "27%";
        paneSize2 = "30%";
        minimumSize2 = "23%";
        paneSize3 = "60%";
        minimumSize3 = "30%";

        // nodeTemplate='<div>'+
        //         '<div className="treeviewdiv">'+
        //             '<div className="textcontent">'+
        //                 '<span className="treeName">{data.name}</span>'+
        //             '</div>'+
        //         '</div>'+
        //     '</div>';
            nodeTemplate(data){
                return(<div>
                    <div className="treeviewdiv">
                        <div className="textcontent">
                            <span className="treeName">{data.name}</span>
                        </div>
                    </div>
                </div>);
            };

        content1() {
            return (<div className='splitter-content'>
                <TreeViewComponent id='splitter-tree' fields={this.treeFields} nodeTemplate={this.nodeTemplate}
                />
            </div>);
        };

        content3() {
            return (
                <div className='details'>
                    <img src={this.data.src} alt="" className='image'></img>
                    <p className='title'>{this.data.name}</p>
                    <div className='details-content'><span className='header'>RELEASE SONG:</span>{this.data.date}</div>
                    <div className='details-content'><span className='header'>SINGER:</span>{this.data.singer}</div>
                </div>
            );
        };

        onSelect(e) {
            this.splitterInstance.paneSettings[2].content = this.content3.bind(e);
        }

        content2() {
            return (<div className='splitter-content'>
                <ListViewComponent id='groupedList-split' fields={this.listFields} className='splitter-list' dataSource={this.dataSource}
                    cssClass={'e-list-template'} template={this.listTemplate} select={this.onSelect.bind(this)}
                    ref={(listview) => { this.listViewObj = listview; } } />
            </div>);
        };

        listTemplate = '<div class="settings e-list-wrapper e-list-multi-line e-list-avatar Song">' +
            '<p><span class="index">0${id}</span>' +
            '<span class="Title">${name}</span><p>' +
            '</div>';

        listFields = { text: 'name' };
        mailBox = [
            { id: 1, name: 'Go Back', hasChild: false },
            { id: 2, name: 'Menu', hasChild: true, expanded: true },
            { id: 2, pid: 2, name: 'Home' },
            { id: 3, pid: 2, name: 'About Us' },
            { id: 4, pid: 2, name: 'Contact Us' }
        ];
        treeFields = { dataSource: this.mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

        render() 
        {return (<div>
            <nav className='NavbarItems'>
        <img className='NavLogo' src={logo} alt=""/>
        <input 
        id="searchbar" 
        type="text" 
        placeholder="SEARCH"
        ></input>
        <button className='UserIconBt'>
        {/* //onMouseEnter={setDropdown(true)}
          //onMouseLeave={setDropdown(false)} */}
          
          <img className='Usericon' src={icon} alt=""/>
          {/* {dropdown && <Dropdown/>}   */}
        </button> 
        </nav>
            <div id="target" className="control-section outlook-style">
            <SplitterComponent
                id="splitter1" height="100%" width="1520px"
                ref={(splitter) => { this.splitterInstance = splitter; } }
            >
                <PanesDirective>
                    <PaneDirective size={this.paneSize1} min={this.minimumSize1} content={this.content1.bind(this)}>
                    </PaneDirective>
                    <PaneDirective size={this.paneSize2} min={this.minimumSize2} content={this.content2.bind(this)}>
                    </PaneDirective>
                    <PaneDirective size={this.paneSize3} min={this.minimumSize3}>
                    </PaneDirective>
                </PanesDirective>
            </SplitterComponent>
        </div>
        </div>
        );}
}

export default SongDetails