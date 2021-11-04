import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';
import PropTypes from 'prop-types';
import GalleryMenuData from '../../data/gallery/galleryMenu';
// import GalleryItemsData from '../../data/gallery/galleryItems';
// import RespModal from '../../pages/RespModal';
// import Modal from 'react-awesome-modal';

import ModalChelcie from '../../pages/modal-pages/ModalChelcie';
import ModalRunBuddy from '../../pages/modal-pages/ModalRunBuddy';
import ModalFoodForward from '../../pages/modal-pages/ModalFoodForward';
import ModalPawpals from '../../pages/modal-pages/ModalPawpals';
import ModalPasswordGenerator from '../../pages/modal-pages/ModalPasswordGenerator';
import ModalCodingQuiz from '../../pages/modal-pages/ModalCodingQuiz';
import ModalShopShop from '../../pages/modal-pages/ModalShopShop';
import ModalBookSearchEngine from '../../pages/modal-pages/ModalBookSearchEngine';
import ModalTaskMasterPro from '../../pages/modal-pages/ModalTaskMasterPro';
import ModalWeatherDashboard from '../../pages/modal-pages/ModalWeatherDashboard';

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

                {/* GALLERY GRID */}
                <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>


                                {/* CHELCIE FANS */}
                                <a title="Chelcie Fans" className="gallery-item active gallery-item-visible mern fullstack">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/chelciefans.png" alt="project named 'Chelcie Fans'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Chelcie Fans</h3>
                                            

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more 
                                                <ModalChelcie />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                

                                {/* RUN BUDDY */}
                                <a title="Run Buddy" className="gallery-item active gallery-item-visible frontend">
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
                                                <ModalRunBuddy />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* FOOD FORWARD */}
                                <a title="Food Forward" className="gallery-item active gallery-item-visible fullstack sql">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/foodforward.png" alt="project named 'Food Forward'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Food Forward</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalFoodForward />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* PAWPALS */}
                                <a title="Pawpals" className="gallery-item active gallery-item-visible frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/pawpals.png" alt="project named 'Pawpals'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Pawpals</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalPawpals />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* PASSWORD GENERATOR */}
                                <a title="Password Generator" className="gallery-item active frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/passwordgen.png" alt="project named 'Password Generator'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Password Generator</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalPasswordGenerator />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* CODING QUIZ */}
                                <a title="Coding Quiz" className="gallery-item active frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/codingquiz.png" alt="project named 'Coding Quiz'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Coding Quiz</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalCodingQuiz />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* SHOP SHOP */}
                                <a title="Shop Shop" className="gallery-item active mern fullstack">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/shopshop.png" alt="project named 'Shop Shop'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Shop Shop</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalShopShop />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* BOOK SEARCH ENGINE */}
                                <a title="Book Search Engine" className="gallery-item active mern fullstack">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/booksearch.png" alt="project named 'Book Search Engine'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Book Search Engine</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalBookSearchEngine />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* TASKMASTER PRO */}
                                <a title="Taskmaster Pro" className="gallery-item active frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/taskmaster.png" alt="project named 'Taskmaster Pro'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Taskmaster Pro</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalTaskMasterPro />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* TASKMASTER PRO */}
                                <a title="Taskmaster Pro" className="gallery-item active frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/taskmaster.png" alt="project named 'Taskmaster Pro'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Taskmaster Pro</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalTaskMasterPro />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                {/* WEATHER DASHBOARD */}
                                <a title="Weather Dashboard" className="gallery-item active frontend">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/weatherdash.png" alt="project named 'Weather Dashboard'" />
                                        </div>
                                    </div>

                                    <div className="gallery-hover">
                                        <div className="gallery-hover-wrapper">
                                            <h3>Weather Dashboard</h3>

                                            <span className="btn btn-link border-0 transform-scale-h p-0">
                                                Learn more
                                                <ModalWeatherDashboard />
                                                <i className="icon-c icon-arrow-right" />
                                            </span>
                                        </div>
                                    </div>
                                </a>

                    </div>
                </div>



                {/* <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>
                        { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
                            return (
                                <div key={ key } title={ item.title } className={ "gallery-item active " + item.category } href={ process.env.PUBLIC_URL + item.link }>
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
                                </div>
                            );
                        } ) }
                    </div>
                </div> */}


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