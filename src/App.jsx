import React from 'react'
import './App.css'

export default function App() {
	return (
		<div className='app'>
			<header className='header'>
				<div className='logo'>🍍Fpalace</div>
				<img
					src='/src/img/6.png'
					alt=''
					style={{ width: '100px', height: '50px' }}
				/>
				<nav>
					<ul>
						<li>Search</li>
						<li>Menu</li>
					</ul>
				</nav>
			</header>

			<section className='hero'>
				<div className='hero-text'>
					<h1>
						Good Food <br /> Good Mood
					</h1>
					<p>
						The food palace is an neighborhood restaurant serving seasonal
						global cuisine driven by the faire.
					</p>
					<button>Explore Food Menu</button>
				</div>
				<div className='hero-img'>
					<img src='/src/img/Image (33).png' alt='' style={{ width: '80%' }} />
				</div>
			</section>

			<section className='hero'>
				<div className='hero-img'>
					<img src='/src/img/Image (30).png' alt='' style={{ width: '80%' }} />
				</div>
				<div className='hero-text'>
					<h1>Simple Way of Eating Delicious</h1>
					<p>
						Keep healthy food readily available. When you get hungry, you’re
						more likely to eat the first thing you see on the counter or in the
					</p>
					<button>Explore Food Menu</button>
				</div>
			</section>

			<section className='services'>
				<h2>Our Awesome Services</h2>
				<div className='service-items'>
					<div>
						<img src='/src/img/food (1).png' alt='' />
						<h3>Quality Food</h3>
						<p>
							Keep healthy food readily available. When you get hungry, you’re
							more likely to{' '}
						</p>
					</div>
					<div>
						<img src='/src/img/Mouth.png' alt='' />
						<h3>Super Taste</h3>
						<p>
							Keep healthy food readily available. When you get hungry, you’re
							more likely to{' '}
						</p>
					</div>
					<div>
						<img src='/src/img/truck.png' alt='' />
						<h3>Fast Delivery</h3>
						<p>
							Keep healthy food readily available. When you get hungry, you’re
							more likely to{' '}
						</p>
					</div>
				</div>
			</section>

			<section className='popular'>
				<h2>Most Popular Items</h2>
				<div className='items'>
					<div>
						<div className='img-placeholder'>
							<img
								src='/src/img/Rectangle 32.png'
								alt=''
								style={{ width: '250px', height: '150px' }}
							/>
						</div>
						<h4>Flame-boiled dish</h4>
						<p>$18.99</p>
					</div>
					<div>
						<div className='img-placeholder'>
							<img
								src='/src/img/Rectangle 31.png'
								alt=''
								style={{ width: '250px', height: '150px' }}
							/>
						</div>
						<h4>Peach Melba dish</h4>
						<p>$20.99</p>
					</div>
					<div>
						<div className='img-placeholder'>
							<img
								src='/src/img/Rectangle 32.png'
								alt=''
								style={{ width: '250px', height: '150px' }}
							/>
						</div>
						<h4>Delmonico Steak dish</h4>
						<p>$18.99</p>
					</div>
				</div>
				<button>See More Recipes</button>
			</section>

			<section className='about' style={{ display: 'flex' }}>
				<div className='about-text'>
					<h2>Simple Way To Order Your Food</h2>
					<p>
						Keep healthy food readily available. When you get hungry, you’re
						more likely to eat the first thing you see on the counter or in the
						cupboard.
					</p>
					<button>Explore Our Story</button>
				</div>
				<div className='about-img'>
					<img src='/src/img/Image (31).png' alt='' style={{ width: '60%' }} />
				</div>
			</section>

			<section className='hero'>
				<div className='hero-img'>
					<img src='/src/img/Image (30).png' alt='' style={{ width: '80%' }} />
				</div>
				<div className='hero-text'>
					<h1>That’s what our Client Says</h1>
					<p>
						“Food palace is an awesome place. Food is everything we are. It’s an
						extension of nationalist feeling, ethnic feeling, your personal
						history, your province”
					</p>
					<button>Explore Food Menu</button>
				</div>
			</section>

			<section className='testimonial'>
				<h2>That's what our Client Says</h2>
				<blockquote>
					"Food palace is an awesome place. Food is everything we are. It's an
					extension of nationalistic feeling, ethnic feeling, your personal
					history, your province."
				</blockquote>
				<p>- Jessica Parker</p>
			</section>

			<footer className='footer'>
				<div className='footer-info'>
					<div>
						<h4>Our menu</h4>
						<ul>
							<li>Breakfast</li>
							<li>Lunch</li>
							<li>Dinner</li>
						</ul>
					</div>
					<div>
						<h4>Information</h4>
						<ul>
							<li>About us</li>
							<li>Event</li>
						</ul>
					</div>
					<div>
						<h4>Useful Links</h4>
						<ul>
							<li>Services</li>
							<li>Support</li>
							<li>Conditions</li>
						</ul>
					</div>
					<div>
						<h4>Social Handles</h4>
						<ul>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>YouTube</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	)
}
