import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
    
    return (
		<nav>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	);

}

    // render() {
    //     return (
    //             <div className="align-self-center animated fadeinright w-100">
    //                 <nav className="menu-primary">
    //                     <ul className="clearfix list-unstyled">
    //                         <li className={ "menu-item" + ( window.location.pathname === '/' ? " current-menu-item" : "" ) }>
    //                             <a title="Home" href={ process.env.PUBLIC_URL + "/" }>Home</a>
    //                         </li>

    //                         <li className={ "menu-item" + ( window.location.pathname === '/about' ? " current-menu-item" : "" ) }>
    //                             <a title="About" href={ process.env.PUBLIC_URL + "/about" }>About</a>
    //                         </li>

    //                         <li className={ "menu-item" + ( window.location.pathname === '/works' ? " current-menu-item" : "" ) }>
    //                             <a title="Works" href={ process.env.PUBLIC_URL + "/works" }>Works</a>
    //                         </li>

    //                         <li className={ "menu-item" + ( window.location.pathname === '/journal' ? " current-menu-item" : "" ) }>
    //                             <a title="Journal" href={ process.env.PUBLIC_URL + "/journal" }>Journal</a>
    //                         </li>

    //                         <li className={ "menu-item" + ( window.location.pathname === '/contacts' ? " current-menu-item" : "" ) }>
    //                             <a title="Contacts" href={ process.env.PUBLIC_URL + "/contact" }>Contacts</a>  
    //                         </li>

    //                     </ul>
    //                 </nav>
    //             </div>
    //     );
    // }


export default Nav;
