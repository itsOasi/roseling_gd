import { Arrow90degRight, ArrowRight, FileEarmarkTextFill, FolderFill } from "react-bootstrap-icons"
import Button from "../components/Button"
import "./Services.css"

function Services(props) {
		return (
			<>
			<div className="col container services">
				<h1>Our Services</h1>
				<div className='row container spread'>
					<div className="container col left">
						<h2>Document Writing</h2>
						<p>Resumes, Business Cards, Contracts, Invoice Templates, etc </p>
						<li>Each $100</li>
						<li>Pack (3-5) $250</li>
						<a className="row" href="https://forms.gle/xMTyGRRkWJkbAecSA">
						<Button action="true" 
							msg={"Order Now"}
							href="https://forms.gle/xMTyGRRkWJkbAecSA"/>
						<ArrowRight />
						</a>
					</div>
					<div className="container col left">
						<h2>Illustration/Graphic</h2>
						<p>Caricatures, Digital Paintings,  Product Sketches</p>
						<li>Each $150</li>
						<li>3D Modeling, Animation, Video Editing</li>
						<li>Each $300</li>
						<a className="row" href="https://forms.gle/32zQKzaoUiy1Mx9K9">
						<Button action="true" 
							msg={"Order Now"}
							href="https://forms.gle/32zQKzaoUiy1Mx9K9"/>

						<ArrowRight />
						</a>
					</div>
					<div className="container col left">
						<h2>Website/App</h2>
						<li>Basic Websie/App $3000</li>
						<li>Social Media Package $4500</li>
						<a className="row" href="https://forms.gle/xMTyGRRkWJkbAecSA">
						<Button action="true"
							msg={"View Pricing Plans"}
							href="https://forms.gle/xMTyGRRkWJkbAecSA"/>
						<ArrowRight />
						</a>
					</div>
				</div>
			</div>
			</>
		)
}

export default Services