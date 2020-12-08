import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faQuestion } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'


const Navbar = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand font-weight-light" href="#">Lasfam<span className="font-weight-bolder">Store</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <CartWidget />
            </nav>
        </>
     );
}
 
export default Navbar;