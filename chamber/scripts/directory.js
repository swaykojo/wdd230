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
        

        busName.textContent = `${business.name}`;
        // Build the p content out to show the details
        location.textContent = `Address: ${business.address}`;
        contact.textContent = `Phone: ${business.phone}`;

       

        //Append the section(card) with the created elements
        card.appendChild(busName);
        card.appendChild(location);
        card.appendChild(contact);

        cards.appendChild(card);

    });
}
