const info = "https://swaykojo.github.io/wdd230/chamber/json/data.json"

async function getDirectoryData() {
    const response = await fetch(info);
    const data = await response.json();
    //console.table(data.businesses);
    displayDirectory(data.businesses);
}
getDirectoryData();

const displayDirectory = (businesses) => {
    const cards = document.querySelector("div.d-cards");

    businesses.forEach((business) => {
        // create elements to add to the div.cards element 
        let card = document.createElement("section");
        card.classList.add("bus-card");
        let busName = document.createElement("h2");
        let location = document.createElement("p");
        let contact = document.createElement("p");
        let url = document.createElement("a");
        let image = document.createElement("img");
        
        // Build the element out to show the data.
        busName.textContent = `${business.name}`;
        location.textContent = `Address: ${business.address}`;
        contact.textContent = `Phone: ${business.phone}`;
        url.textContent = `${business.link}`


        // Build the image portrait by setting all the relevant attribute
        image.setAttribute("src", business.logo);
        image.setAttribute("alt", `Logo for ${business.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");

        //Append the section(card) with the created elements
        card.appendChild(image);
        card.appendChild(busName);
        card.appendChild(location);
        card.appendChild(contact);

        cards.appendChild(card);

    });
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

