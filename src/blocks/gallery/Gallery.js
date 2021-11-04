import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';
import PropTypes from 'prop-types';
import GalleryMenuData from '../../data/gallery/galleryMenu';
import GalleryItemsData from '../../data/gallery/galleryItems';
import ModalChelcie from '../../pages/ModalChelcie';
import ModalRunBuddy from '../../pages/ModalRunBuddy';
import RespModal from '../../pages/RespModal';

import Modal from 'react-awesome-modal';

class Gallery extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: GalleryMenuData
        };
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }


    // state = {
    //     show: false
    //   };
    //   showModal = e => {
    //     this.setState({
    //       show: !this.state.show
    //     });
    //   };
    

    handleClick( i, e ) {
        e.preventDefault();

        this.setState( {
            selected: i
        } );

        return false
    }

    onFilterChange = ( newFilter ) => {
        var gallery_items_name = this.grid;
        var gallery_item_name  = '.gallery-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( gallery_items_name, {
                itemSelector: gallery_item_name,
                masonry: {
                    horizontalOrder: true
                }
            } );
        }

        if ( newFilter === '*' ) {
            this.iso.arrange( { filter: `*` } );

        } else {
            this.iso.arrange( { filter: `.${ newFilter }` } );
        }
    };

    componentDidMount() {
        var gallery_items_name = this.grid;
        var gallery_item_name  = '.gallery-item';

        var iso = new Isotope( gallery_items_name, {
            itemSelector: gallery_item_name,
            masonry: {
                horizontalOrder: true
            }
        } );

        var imgLoad = new ImagesLoaded( gallery_items_name );

        imgLoad.on( 'progress', function( instance, image ) {
            iso.layout();
        } );
    }

    render() {
        const listCount = this.state.list.length - 1;

        return (

                <div className="gallery">
                <div className="wrapper">
                    <ul className="gallery-filter list-unstyled no-space">
                        { this.state.list.map( ( item, key ) => (
                            <React.Fragment key={ key }>
                                <li>
                                    <a href="#my-works"
                                    title={ item.title }
                                    className={ "btn btn-link transform-scale-h click" + ( key === this.state.selected ? ' active' : '' ) }
                                    data-filter={ item.filter }
                                    onClick={ ( event ) => {
                                        this.onFilterChange( item.filter );
                                        this.handleClick( key, event )
                                    } }>
                                        { item.title }
                                    </a>
                                </li>

                                { key !== listCount ?
                                    <li>
                                        <span className="btn btn-link">-</span>
                                    </li>
                                    : ""
                                }
                            </React.Fragment>
                        ) ) }
                    </ul>                
                    </div>


                    <ModalChelcie />

                    <ModalRunBuddy />

                    <RespModal />


               {/* <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>


                                <a onClick={() => this.openModal()} title="Chelcie Fans" className="gallery-item active gallery-item-visible mern fullstack">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/chelciefans.png" alt="project named 'Chelcie Fans'" />
                                        <input type="button" value="Open" onClick={<ModalChelcie />} />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Chelcie Fans</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                


                                <a onClick={() => this.openModal()} title="Run Buddy" className="gallery-item active gallery-item-visible frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/runbuddy.png" alt="project named 'Run Buddy'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Run Buddy</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                    </div>
                </div> */}


                <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>
                        { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
                            return (
                                <a key={ key } title={ item.title } className={ "gallery-item active " + item.category } href={ process.env.PUBLIC_URL + item.link }>
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src={item.imgLink} alt={item.alt} />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>{ item.title }</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                { item.button }
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            );
                        } ) }
                    </div>
                </div>


{/* { this.props.seeMore ? */}
    <div className="text-center no-space">
        <a title="See more" className="btn btn-link border-0 p-0 transform-scale-h" target="_blank" rel="noopener noreferrer" href="https://github.com/Noemiegrau">See more projects on my GitHub profile <i className="icon-c icon-arrow-right" /></a>
    </div>
    {/* : "" */}
{/* } */}
</div>
            
       );
    }
}

Gallery.propTypes = {
    seeMore: PropTypes.string,
    paddingBottomClass: PropTypes.string
};

export default Gallery;


//  <div className="gallery">
// <div className="wrapper">
//     <ul className="gallery-filter list-unstyled no-space">
//         { this.state.list.map( ( item, key ) => (
//             <React.Fragment key={ key }>
//                 <li>
//                     <a href="#my-works"
//                        title={ item.title }
//                        className={ "btn btn-link transform-scale-h click" + ( key === this.state.selected ? ' active' : '' ) }
//                        data-filter={ item.filter }
//                        onClick={ ( event ) => {
//                            this.onFilterChange( item.filter );
//                            this.handleClick( key, event )
//                        } }>
//                         { item.title }
//                     </a>
//                 </li>

//                 { key !== listCount ?
//                     <li>
//                         <span className="btn btn-link">-</span>
//                     </li>
//                     : ""
//                 }
//             </React.Fragment>
//         ) ) }
//     </ul>
// </div>
// <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
//     <div className="gallery-items" ref={ ( c ) => this.grid = c }>
//         { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
//             return (
//                 <a key={ key } title={ item.title } className={ "gallery-item active " + item.category } href={ process.env.PUBLIC_URL + item.link }>
//                     <div className="img object-fit">
//                         <div className="object-fit-cover">
//                         <img src={require("./img/chelciefans.png")} alt="test" />
//                         </div>
//                     </div>

//                     <div className="gallery-hover">
//                         <div className="gallery-hover-wrapper">
//                             <h3>{ item.title }</h3>

//                             <span className="btn btn-link border-0 transform-scale-h p-0">
//                                 { item.button }
//                                 <i className="icon-c icon-arrow-right" />
//                             </span>
//                         </div>
//                     </div>
//                 </a>
//             );
//         } ) }
//     </div>
// </div>