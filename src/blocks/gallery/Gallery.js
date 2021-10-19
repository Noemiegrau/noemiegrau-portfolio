import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';
import PropTypes from 'prop-types';
import GalleryMenuData from '../../data/gallery/galleryMenu';
import GalleryItemsData from '../../data/gallery/galleryItems';

class Gallery extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: GalleryMenuData
        };
    }

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
                <div className={"gallery-item-wrapper" + this.props.paddingBottomClass} >
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>
                        { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
                            return (
                                <a key={ key } title={ item.title } className={ "gallery-item active " + item.category } href={ process.env.PUBLIC_URL + item.link }>
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ item.imgLink } alt={ item.title } />
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

                { this.props.seeMore ?
                    <div className="text-center no-space">
                        <a title="See more" className="btn btn-link border-0 p-0 transform-scale-h" href={ process.env.PUBLIC_URL + "/works" }>See more<i className="icon-c icon-arrow-right" /></a>
                    </div>
                    : ""
                }
            </div>
        );
    }
}

Gallery.propTypes = {
    seeMore: PropTypes.string,
    paddingBottomClass: PropTypes.string
};

export default Gallery;
