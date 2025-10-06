let ticketNumber = 1; // Initialize ticket number

// Array of valid names
const validNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

function updateCol(userInput) {
    // Get the current date and time
    let currentDate = new Date();

    // Find the last row or create a new one if necessary
    let lastRow = document.querySelector("div.row:last-of-type");

    // Create a new div element for the column
    let newDiv = document.createElement("div");
    newDiv.classList.add("col-md-4");

    // Set the inner HTML for the new column
    newDiv.innerHTML = `
        <div class="bg-ticket py-1">
            <h1>${userInput}</h1> <!-- Use the user input here -->
            <p></p> <!-- This p will hold the date -->
            <div class="item-list">
                <div class="items px-1">
                    <p class="ticket-items">Ticket No.</p>
                    <p id="ticket-no">${ticketNumber}</p> <!-- Incrementing ticket number -->
                </div>
                <div class="items px-1">
                    <p class="ticket-items">Attendee Name.</p>
                    <p>${userInput}</p>
                </div>
                <div class="items px-1">
                    <p class="ticket-items">Venue</p>
                    <p>Google Meet</p>
                </div>
            </div>
        </div>`;

    // Append the new column to the last row
    lastRow.appendChild(newDiv);

    // Function to create a formatted date string
    function createP() {
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let formattedDate = `${currentDate.getDate()} ${monthArr[currentDate.getMonth()]} ${currentDate.getFullYear()}, 
        ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
        return formattedDate;
    }

    // Update the date inside the new ticket
    let dateParagraph = newDiv.querySelector(".bg-ticket p");
    dateParagraph.innerHTML = createP();

    // Increment the ticket number for the next ticket
    ticketNumber++;
}

// Button click event to trigger prompt and updateCol function
document.getElementById('btn').onclick = function() {
    let userInput = prompt("Please enter Attendee Name:");

    // Check if the userInput is not empty and is present in the validNames array
    if (userInput && userInput.trim() !== "" && validNames.includes(userInput.trim())) {
        updateCol(userInput);
    } else {
        // If no valid input is given, alert the user and terminate the function
        alert("Invalid name. Please enter a valid attendee name.");
    }
};
