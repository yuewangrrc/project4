/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}
	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}
/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear form?')) {
		// Ensure all error fields are hidden
		hideErrors();
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		resetAllFileds();
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}
// Reset all fields in the form
function resetAllFileds() {

	// Reset all input fields
	let inputs = document.getElementsByTagName("input");
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == "text") {
			inputs[i].value = "";
		}
		if (inputs[i].type == "radio") {
			inputs[i].checked = false;
		}
	}
}
/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
	let flag = false;
	//	Complete the validations below
	//  inputValues
	const requirdFields = ["fullname", "address", "city", "postal", "province", "email", "phone","description"];
	for (let i = 0; i < requirdFields.length; i++) {
		const item = requirdFields[i];
		const element = document.getElementById(item);
		if (trim(element.value) == "" || element.value == null) {
			document.getElementById(item + "_error").style.display = "block";
			// Form has errors
			if (!flag) {
				element.focus();
				element.select && element.select();
			}
			flag = true;
		}
	}

	// Valid Postal Code
	let regex = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/);
	let postal = document.getElementById("postal").value;
	if (postal && !regex.test(postal)) {
		document.getElementById("postalformat_error").style.display = "block";
		if (!flag) {
			document.getElementById("postal").focus();
			document.getElementById("postal").select()
			// Raise the error flagerrorFlag = true;
		}
		flag = true;
	}
	// Valid Email
	let regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	let email = document.getElementById("email").value;
	if (email && !regexEmail.test(email)) {
		document.getElementById("emailformat_error").style.display = "block";
		if (!flag) {
			document.getElementById("email").focus();
			document.getElementById("email").select()
		}
		flag = true;
	}
	// check phone number
	let regexPhone = new RegExp(/^\d{3}-?\d{3}-?\d{4}$/);

	let phone = document.getElementById("phone").value;
	if (phone && !regexPhone.test(phone)) {
		document.getElementById("phoneformat_error").style.display = "block";
		if (!flag) {
			document.getElementById("phone").focus();
			document.getElementById("phone").select()
		}
		flag = true;
	}
	return flag;
}


/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	//	Populate the year select with up to date values

	// Add event listener for the form submit
	document.getElementById("contactForm").addEventListener("submit", validate);
	document.getElementById("contactForm").addEventListener("reset", resetForm);
	hideErrors();
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);












