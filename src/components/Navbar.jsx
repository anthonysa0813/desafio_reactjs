import React from 'react'


const Navbar = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand font-weight-light" href="#">Lasfam<span className="font-weight-bolder">Store</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Categorías <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">QUIÉNES SOMOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Carrito</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;