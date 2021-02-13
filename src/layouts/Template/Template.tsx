import React from 'react';

const Template = () => {
	return (
		<div>
			<h1 className="ui center aligned header">Responsive UI Examples</h1>

			<h2 className="ui center aligned header">Basic Responsive</h2>

			<h3 className="ui center aligned header">Container</h3>
			<div className="ui container">
				<div className="ui segments">
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
				</div>
			</div>
			<h3 className="ui center aligned header">Text Container</h3>
			<div className="ui text container">
				<div className="ui segments">
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Stackable Grid</h3>
			<div className="ui two column stackable grid">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="three column row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="ten wide column">
					<div className="ui segment">Content</div>
				</div>
				<div className="six wide column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Doubling Grid</h3>
			<div className="ui three column doubling grid">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Doubling Stackable Grid</h3>
			<div className="ui three column doubling stackable grid">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Nested Stackable Grid</h3>
			<div className="ui two column grid">
				<div className="column">
					<div className="ui stackable doubling two column grid">
						<div className="column">
							<div className="ui segment">Content</div>
						</div>
						<div className="column">
							<div className="ui segment">Content</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="ui stackable doubling three column grid">
						<div className="column">
							<div className="ui segment">Content</div>
						</div>
						<div className="column">
							<div className="ui segment">Content</div>
						</div>
						<div className="column">
							<div className="ui segment">Content</div>
						</div>
					</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Stackable Grid Container</h3>
			<div className="ui two column stackable grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Doubling Grid Container</h3>
			<div className="ui three column doubling grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">
				Doubling Stackable Grid Container
			</h3>
			<div className="ui three column doubling stackable grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h2 className="ui center aligned header">Device Adjustment</h2>

			<h3 className="ui center aligned header">Device Column Width</h3>
			<div className="ui grid">
				<div className="three wide computer nine wide tablet six wide mobile column">
					<div className="ui segment">Content</div>
				</div>
				<div className="four wide column">
					<div className="ui segment">Content</div>
				</div>
				<div className="nine wide computer three wide tablet six wide mobile column">
					<div className="ui segment">Content</div>
				</div>
				<div className="nine wide computer three wide tablet six wide mobile column">
					<div className="ui segment">Content</div>
				</div>
				<div className="four wide column">
					<div className="ui segment">Content</div>
				</div>
				<div className="three wide computer nine wide tablet six wide mobile column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Device Visibility</h3>
			<div className="ui four column grid">
				<div className="widescreen only ten wide column">
					<div className="ui segment">Widescreen</div>
				</div>
				<div className="widescreen only six wide column">
					<div className="ui segment">Widescreen</div>
				</div>
				<div className="large screen only six wide column">
					<div className="ui segment">Large Screen</div>
				</div>
				<div className="large screen only ten wide column">
					<div className="ui segment">Large Screen</div>
				</div>
				<div className="tablet only mobile only eight wide column">
					<div className="ui segment">Tablet and Mobile</div>
				</div>
				<div className="tablet only mobile only eight wide column">
					<div className="ui segment">Tablet and Mobile</div>
				</div>
				<div className="mobile only sixteen wide column">
					<div className="ui segment">Mobile</div>
				</div>
				<div className="computer only two column row">
					<div className="column">
						<div className="ui segment">Computer and Up</div>
					</div>
					<div className="column">
						<div className="ui segment">Computer and Up</div>
					</div>
				</div>
				<div className="tablet only column">
					<div className="ui segment">Tablet Only Content</div>
				</div>
				<div className="tablet only column">
					<div className="ui segment">Tablet Only Content</div>
				</div>
				<div className="tablet only column">
					<div className="ui segment">Tablet Only Content</div>
				</div>
				<div className="tablet only column">
					<div className="ui segment">Tablet Only Content</div>
				</div>
			</div>

			<h2 className="ui center aligned header">
				Responsive Grid with Variations
			</h2>

			<h3 className="ui center aligned header">Stackable Divided Grid</h3>
			<div className="ui stackable two column divided grid container">
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
			</div>

			<h3 className="ui center aligned header">
				Stackable Vertically Divided Grid
			</h3>
			<div className="ui stackable two column vertically divided grid container">
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Celled Stackable Grid</h3>
			<div className="ui stackable celled grid container">
				<div className="two column row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="three column row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
				<div className="two column row">
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
					<div className="column">
						<div className="ui segment">Content</div>
					</div>
				</div>
			</div>
			<h3 className="ui center aligned header">
				Consecutive Doubling Stackable Grid
			</h3>
			<div className="doubling stackable three column ui grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>
			<div className="doubling stackable three column ui grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Grid Container</h3>
			<div className="ui three column grid container">
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h1 className="ui center aligned header">Responsive Elements</h1>

			<h3 className="ui center aligned header">Responsive Vertical Divider</h3>

			<div
				className="ui stackable two column very relaxed grid container"
				// style="position:relative;"
			>
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
				{/* <div className="ui vertical divider">Or</div> */}
				<div className="column">
					<div className="ui segment">Content</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Responsive Table</h3>

			<div className="ui container">
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Employee</th>
							<th>Correct Guesses</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<h4 className="ui image header">
									<img
										src="assets/images/wireframe/square-image.png"
										className="ui mini rounded image"
									/>
									<div className="content">
										Lena
										<div className="sub header">Human Resources</div>
									</div>
								</h4>
							</td>
							<td>22</td>
						</tr>
						<tr>
							<td>
								<h4 className="ui image header">
									<img
										src="assets/images/wireframe/square-image.png"
										className="ui mini rounded image"
									/>
									<div className="content">
										Matthew
										<div className="sub header">Fabric Design</div>
									</div>
								</h4>
							</td>
							<td>15</td>
						</tr>
						<tr>
							<td>
								<h4 className="ui image header">
									<img
										src="assets/images/wireframe/square-image.png"
										className="ui mini rounded image"
									/>
									<div className="content">
										Lindsay
										<div className="sub header">Entertainment</div>
									</div>
								</h4>
							</td>
							<td>12</td>
						</tr>
						<tr>
							<td>
								<h4 className="ui image header">
									<img
										src="assets/images/wireframe/square-image.png"
										className="ui mini rounded image"
									/>
									<div className="content">
										Mark
										<div className="sub header">Executive</div>
									</div>
								</h4>
							</td>
							<td>11</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 className="ui center aligned header">Responsive Menu</h3>

			<div className="ui stackable container menu">
				<div className="item">
					<img src="assets/images/logo.png" />
				</div>
				<a className="item">Features</a>
				<a className="item">Testimonials</a>
				<a className="item">Sign-in</a>
			</div>

			<h3 className="ui center aligned header">Responsive Item</h3>

			<div className="ui container">
				<div className="ui relaxed divided items">
					<div className="item">
						<div className="ui small image">
							<img src="assets/images/wireframe/image.png" />
						</div>
						<div className="content">
							<a className="header">Content Header</a>
							<div className="meta">
								<a>Date</a>
								<a>Category</a>
							</div>
							<div className="description">
								A description which may flow for several lines and give context
								to the content.
							</div>
							<div className="extra">
								<img
									src="assets/images/wireframe/square-image.png"
									className="ui circular avatar image"
								/>{' '}
								Username
							</div>
						</div>
					</div>
					<div className="item">
						<div className="ui small image">
							<img src="assets/images/wireframe/image.png" />
						</div>
						<div className="content">
							<a className="header">Content Header</a>
							<div className="meta">
								<a>Date</a>
								<a>Category</a>
							</div>
							<div className="description">
								A description which may flow for several lines and give context
								to the content.
							</div>
							<div className="extra">
								<div className="ui right floated primary button">
									Primary
									<i className="right chevron icon"></i>
								</div>
								<div className="ui label">Limited</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="ui small image">
							<img src="assets/images/wireframe/image.png" />
						</div>
						<div className="content">
							<a className="header">Content Header</a>
							<div className="meta">
								<a>Date</a>
								<a>Category</a>
							</div>
							<div className="description">
								A description which may flow for several lines and give context
								to the content.
							</div>
							<div className="extra">
								<div className="ui right floated primary button">
									Primary
									<i className="right chevron icon"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h3 className="ui center aligned header">Responsive Steps</h3>

			<div className="ui last container">
				<div className="ui three steps">
					<div className="step">
						<div className="content">
							<div className="title">Shipping</div>
							<div className="description">Choose your shipping options</div>
						</div>
					</div>
					<div className="active step">
						<div className="content">
							<div className="title">Billing</div>
							<div className="description">Enter billing information</div>
						</div>
					</div>
					<div className="disabled step">
						<div className="content">
							<div className="title">Confirm Order</div>
							<div className="description">Review your order details</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Template;
