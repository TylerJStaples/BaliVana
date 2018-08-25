import React, {Component} from "react";
import "./Form.css";

//after post
// window.location = '/all';

class Form extends Component {
	state = {
		
	};

	apiPost(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		fetch("/submit", {
			method: "POST",
			body: data,
			}
		);
		
	}

	render() {
		return (
			<div className="uk-container-large">
				<div className ="uk-position-center">
				<form id="submition" onSubmit={this.apiPost}>
					<fieldset className="uk-fieldset">
						<legend className="uk-legend">Submit a Balisong</legend>
						<div className="uk-margin">
							<label for="knife-name"><b>*</b>Knife Name</label><br />
							<input type="text" className="uk-input uk-form-small uk-form-width-medium" name="knife-name" id="name" /><br />
						</div>
						<div className="uk-margin">
							<label for="knife-maker"><b>*</b>Knife Manufacturer</label><br />
							<input type="text" className="uk-input uk-form-small uk-form-width-medium" name="knife-maker" id="maker" /><br />
						</div>
						<div className="uk-margin">
							<label for="knife-price"><b>*</b>Retail Price (USD)</label><br />
							<input type="number" className="uk-input uk-form-small uk-form-width-medium" name="knife-price" id="price" /><br />
						</div>
						<div className="uk-margin">
							<label for="knife-handle">Handle Length (in inches)</label><br />
							<input type="number" className="uk-input uk-form-small uk-form-width-medium" name="knife-handle" id="handle" step="0.01" /><br />
						</div>
						<div class="uk-margin">
							<label for="knife-blade">Blade Length (in inches)</label><br />
							<input type="number" className="uk-input uk-form-small uk-form-width-medium" name="knife-blade" id="blade" step="0.01" /><br />
						</div>
						<div className="uk-margin">
							<label for="knife-weight">Knife Weight (in ounces)</label><br />
							<input type="number" className="uk-input uk-form-small uk-form-width-medium" name="knife-weight" id="weight" step="0.01" /><br />
						</div>
						<div className="uk-margin">
							<div className="uk-form-select data-uk-form-select">
								<label for="knife-pivots"><b>*</b>Pivot Type</label><br />
								<select name="knife-pivots" id="pivot" className="uk-select uk-form-small uk-form-width-medium">
									<option value="Washers">Washers</option>
									<option value="Bushings">Bushings</option>
									<option value="Bearings">Bearings</option>
								</select>
							</div>
						</div>
						<input type="submit" className="uk-button uk-form-width-medium" id="submit" />
					</fieldset>
				</form>
				</div>
			</div>
		)
	}
}

export default Form;