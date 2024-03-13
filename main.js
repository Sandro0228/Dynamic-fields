const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const parsedData = document.querySelector(".section-2")

// Function to add a new input field
function addField() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    container.appendChild(input);
}

// Function to convert input data to JSON and display it in section 2
function convertToJSON() {
    const inputs = container.querySelectorAll("input");
    let data = [];

    inputs.forEach(input => {
        data.push(input.value);
    });

    const jsonData = JSON.stringify(data);

    const paragraph = document.createElement("p")
    paragraph.textContent = jsonData;
    parsedData.appendChild(paragraph)
}

// Event listeners
add.addEventListener("click", addField);
convert.addEventListener("click", convertToJSON);