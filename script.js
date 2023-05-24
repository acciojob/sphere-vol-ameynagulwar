// Get references to the form elements
var radiusInput = document.getElementById("radius");
var volumeOutput = document.getElementById("volume");
var calculateButton = document.getElementById("submit");

// Function to calculate the volume of a sphere
function volume_sphere(radius) {
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  return volume.toFixed(2); // Round the volume to 2 decimal places
}

// Event listener for the form submission
calculateButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  var radiusValue = parseFloat(radiusInput.value);
  if (!isNaN(radiusValue)) {
    var volume = volume_sphere(radiusValue);
    volumeOutput.value = volume;
  }
});

