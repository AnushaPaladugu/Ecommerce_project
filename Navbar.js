import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Commerce</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <Link class="nav-link " aria-current="page" to="/">Catalog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/cart1">Cart</Link>
                    </li>
                    </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
