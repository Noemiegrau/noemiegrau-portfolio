import React from 'react';
import dataFooterMenu from '../../data/footer/footerMenu';

const FooterMenu = () => {
    return (
        <nav className="menu-secondary">
            <ul className="clearfix list-unstyled">
                { dataFooterMenu && dataFooterMenu.map( ( item, key ) => {
                    return (
                        <li key={ key }>
                            <a
                                title={ item.title }
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href={ item.link }
                            >
                                { item.title }
                            </a>
                        </li>
                    );
                } ) }
            </ul>
        </nav>
    );
};

export default FooterMenu;
