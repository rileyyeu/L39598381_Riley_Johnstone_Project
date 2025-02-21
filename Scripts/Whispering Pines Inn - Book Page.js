// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the form and the input fields by their IDs
    const form = document.getElementById("bookingform");
    const locationField = document.getElementById("location");
    const checkInField = document.getElementById("check-in");
    const checkOutField = document.getElementById("check-out");
    const guestsField = document.getElementById("guests");

    // Add an event listener to handle form submission
    form.addEventListener("submit", (e) => {
        // Start by assuming the form is valid
        let valid = true;

        // Get and trim the values of the form fields
        const locationValue = locationField.value.trim();
        const checkInValue = checkInField.value;
        const checkOutValue = checkOutField.value;
        const guestsValue = parseInt(guestsField.value); // Convert guests value to integer

        // Check if the location field is empty
        if (!locationValue) {
            alert("Please enter a valid location.");
            valid = false; // Set valid to false if location is empty
        }

        // Check if the check-in date is not selected
        if (!checkInValue) {
            alert("Please select a check-in date.");
            valid = false; // Set valid to false if check-in date is missing
        }

        // Check if the check-out date is not selected
        if (!checkOutValue) {
            alert("Please select a check-out date.");
            valid = false; // Set valid to false if check-out date is missing
        }

        // Check if the check-out date is before the check-in date
        if (checkInValue && checkOutValue && (new Date(checkInValue) >= new Date(checkOutValue))) {
            alert("Check-out date must be after check-in date.");
            valid = false; // Set valid to false if check-out date is invalid
        }

        // Check if the number of guests is valid (greater than or equal to 1)
        if (!guestsValue || guestsValue < 1) {
            alert("Please enter a valid number of guests.");
            valid = false; // Set valid to false if guests value is invalid
        }

        // Prevent the form from submitting if any validation fails
        if (!valid) e.preventDefault();
    });
});
