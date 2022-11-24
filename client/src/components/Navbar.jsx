import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
  				<div class="container">
				    <a class="navbar-brand" href="/">Phyz Wiz</a>
				    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				      <span class="navbar-toggler-icon"></span>
				    </button>
				    <div class="collapse navbar-collapse" id="navbarColor01">
				      <ul class="navbar-nav ms-auto">

				        <li class="nav-item">
				          <a class="nav-link navbar-brand" href="/login">Login</a>
				        </li>

						<li class="nav-item">
				          <a class="nav-link navbar-brand" href="/sign-up">Sign Up</a>
				        </li>

						<li class="nav-item">
				          <a class="nav-link navbar-brand" href="/home">Temp</a>
				        </li>

				      </ul>
				    </div>
				  </div>
				</nav>
    )
}

export default Navbar