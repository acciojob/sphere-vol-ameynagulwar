// Get references to the form elements
// Get references to the form elements


// Function to calculate the volume of a sphere
function volume_sphere() {
  let radius = document.getElementById('radius').value;
	let volume = (4/3) * Math.PI * Math.pow(radius, 3);
	document.getElementById('volume').value = volume;
}

// Event listener for the form submission


