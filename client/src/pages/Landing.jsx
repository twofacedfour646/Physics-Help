import React from 'react'

const Landing = () => {
    return (
        <div className="landing-page">

			<iframe className="bg-video" src="https://www.youtube.com/embed/W9KHVlnJLjQ?autoplay=1&showInfo=0&controls=0&mute=1&loop=1" title="Flying Math Formula Equations Overlay Science Symbols on Blackboard 4K UHD 60fps 1 Hour Video Loop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			{/* <img className="bg-video" src="https://i.gifer.com/origin/64/647040910feebf23ecb28f47872d91a1.gif" alt="" /> */}

            <div class="jumbotron">
				
				<div className="container jumbo-text">
					<h1 class="display-4" style={{ textDecoration: "underline" }}>Welcome to Phyz Wiz!</h1>
					<p>This is an application that makes it easy, fun, and rewarding to learn about physics!</p>
					<hr class="my-4"/>
					<p>Test out your skills and knowledge on hundreds of our real life problems!</p>
					<p class="lead">
						<a class="btn btn-primary btn-lg" href="/login" role="button">Start Learning</a>
					</p>
				</div>
			</div>


			<section id="scroll">
				<div class="container px-5">
					<div class="row gx-5 align-items-center">
						<div class="col-lg-6 order-lg-2">
							<div class="p-5"><img style={{ width: "500px", height: "500px" }} class="rounded-circle shadow-lg" src="https://cdn.kastatic.org/googleusercontent/BO82YZEm2LGnHiU5RcqaKRltWAkf4MTXv-QcUCe09uVP2h-2FSWaYTzTtEHxhD2-sehTRstmwW1MdPpTI5aIKC4" alt="..." /></div>
						</div>
						<div class="col-lg-6 order-lg-1">
							<div class="p-5">
								<h2 class="display-4" style={{ textDecoration: "underline" }}>For high school students...</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="container px-5">
					<div class="row gx-5 align-items-center">
						<div class="col-lg-6">
							<div class="p-5"><img style={{ width: "500px", height: "500px" }} class="rounded-circle shadow-lg" src="https://miro.medium.com/max/1400/1*-nIZAvx-Es-7DemRAoHSFw.png" alt="..." /></div>
						</div>
						<div class="col-lg-6">
							<div class="p-5">
								<h2 class="display-4" style={{ textDecoration: "underline" }}>Undergraduates...</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="container px-5">
					<div class="row gx-5 align-items-center">
						<div class="col-lg-6 order-lg-2">
							<div class="p-5"><img style={{ width: "500px", height: "500px" }} class="rounded-circle shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Feynmann_Diagram_Gluon_Radiation.svg/1200px-Feynmann_Diagram_Gluon_Radiation.svg.png" alt="..." /></div>
						</div>
						<div class="col-lg-6 order-lg-1">
							<div class="p-5">
								<h2 class="display-4" style={{ textDecoration: "underline" }}>And physicists alike!</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="container"/>

			<div className="my-5 container">
				<h1 className="text-center" style={{ textDecoration: "underline" }}>Highest Quality Instruction</h1>
				<iframe width="720" className="mt-4 rounded shadow-lg" height="400" style={{ margin: "auto", display: "block" }} src="https://www.youtube.com/embed/PS9vzUeAdEY" title="Displacement, Time, and Average Velocity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>

			<hr className="container"/>

			<div className="d-flex mt-5">
				<img style={{ width: "50%" }} src="https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?cs=srgb&dl=pexels-oladimeji-ajegbile-2325729.jpg&fm=jpg" alt="" />
				<div className="bg-light w-50 p-5">
					<h1>The secrets to the universe are waiting for you!</h1>
					<hr />
					<h1>Are you ready?</h1>
					<a class="btn btn-success btn-lg" href="/login" role="button">Yes!</a>
				</div>
			</div>
        </div>
    )
}

export default Landing
