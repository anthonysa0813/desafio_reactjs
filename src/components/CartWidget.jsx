import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faQuestion } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return ( 
        <>
            <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Categorías <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">QUIÉNES SOMOS <FontAwesomeIcon icon={faQuestion} /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Carrito <FontAwesomeIcon icon={faStore} /></a>
                            
                        </li>
                        
                    </ul>
            </div>
            
        </>
     );
}
 
export default CartWidget;