import { FileEarmarkTextFill, FolderFill } from "react-bootstrap-icons"
import Button from "../components/Button"
import "./Services.css"

function Services(props) {
		return (
			<>
			<div className="col container services">
				<h1>Our Services</h1>
				<div className='row container spread'>
					<div>
						<p></p>
						<Button action="true" icon={<FileEarmarkTextFill />}
							msg={"Document"}
							href="https://forms.gle/xMTyGRRkWJkbAecSA"/>
					</div>
					<div>
						<p></p>
						<Button action="true" 
							icon={<FolderFill /> }
							msg={"Graphic/Illustration"}
							href="https://forms.gle/32zQKzaoUiy1Mx9K9"/>
					</div>
					<div>
						<p></p>
						<Button action="true" 
							icon={<FolderFill /> }
							msg={"Web Development"}
							href="https://forms.gle/xMTyGRRkWJkbAecSA"/>
					</div>
				</div>
			</div>
			</>
		)
}

export default Services