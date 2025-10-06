let currentDate;
let ticketNumber = 1;
const arrNames = ["Thompson", "Olu", "Bayo", "Ade", "Ben"];

function updateCol(modUserInput) {
    currentDate = new Date();
    let firstRow = document.querySelector("div.row:first-of-type");
    let newDiv = document.createElement("div");
    newDiv.classList.add("col-md-4");
    newDiv.innerHTML = ` <div class="bg-ticket py-1 my-2">
            <h1>Test Ticket <span><i class="fa-solid fa-xmark cancel" onclick ="deleteTicket()"></i></span></h1>
            <p></p>
            <div class="item-list">
                <div class="items px-1">
                    <p class="ticket-items">Ticket No.</p>
                    <p id="ticket-no">${ticketNumber}</p>
                </div>
                <div class="items px-1">
                    <p class="ticket-items">Attendee Name.</p>
                    <p>${modUserInput}</p>
                </div>
                <div class="items px-1">
                    <p class="ticket-items venue">Venue</p>
                    <p>Google Meet</p>
                </div>
            </div>
        </div>`;

    firstRow.appendChild(newDiv);

    // function to create date and time
    function createP() {

        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let formattDate = `${currentDate.getDate()} ${monthArr[currentDate.getMonth()]} 
        ${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
        return formattDate;
    };

    let dateParagraph = newDiv.querySelector(".bg-ticket p");
    dateParagraph.innerHTML = createP();

    // for updating ticket number
    ticketNumber++;
};


document.getElementById('btn').onclick = function () {
    let userInput;
    let modUserInput;

    do {
        userInput = prompt("Please enter Attendee Name:").trim();

        // Exit if user cancels the prompt
        if (userInput === null) {
            return;
        }

        modUserInput = userInput[0].toUpperCase() + userInput.slice(1);

        // Check if the input is a number or an invalid name
        if (!Number.isInteger(+(modUserInput)) && arrNames.includes(modUserInput)) {
            updateCol(modUserInput);
            return; // Exit the loop and function
        } else if (!Number.isInteger(+(modUserInput)) && !arrNames.includes(modUserInput)) {
            let x = confirm(`Do you want to get ${modUserInput} a ticket?`);
            if (x) {
                arrNames.push(modUserInput);
                updateCol(modUserInput);
                return; // Exit the loop and function
            }
        } else if (Number.isInteger(+(modUserInput))) {
            alert("Please enter a valid name, not a number.");
        }
    } while (true); // Continue until a valid name is provided or the user cancels
};




function deleteTicket() {
    const delTicket = document.querySelectorAll(".col-md-4");
    for (const eachDiv of delTicket) {
        let eachCancelBtn = eachDiv.querySelector(".cancel");
        eachCancelBtn.addEventListener("click", function () {
            eachDiv.remove();
        })
    }

};


/* function deleteTicket(button) {
    button.closest(".col-md-4").remove();
} */


/*  document.getElementById('btn').onclick = function () {
    let userInput = prompt("Please enter Attendee Name:").trim();
    let modUserInput = userInput[0].toUpperCase() + userInput.slice(1);
    
    // Check if the userInput is null or an empty string and to check array list
    if (Number.isInteger(+(modUserInput)) == false && arrNames.includes(modUserInput) == true) {
        updateCol(modUserInput);
    } else if (Number.isInteger(+(modUserInput)) == false && arrNames.includes(modUserInput) == false) {
        let x = confirm(`Do you want to get ${modUserInput} a ticket?`);
        if (x === true) {
            arrNames.push(modUserInput);
            updateCol(modUserInput);
        };
    } else if (Number.isInteger(+(modUserInput)) === true) {
        alert("No try am again");
}
}; */