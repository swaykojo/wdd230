const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myBook = input.value;
    input.value = '';

    const listInput = document.createElement('li');
    const listText = document.createElement('span');
    const listBtton = document.createElement('button');

    listInput.appendChild(listText);
    listText.textContent = myBook;
    listInput.appendChild(listBtton);
    listBtton.textContent = "❌";
    list.appendChild(listInput);

    listBtton.addEventListener('click', () => {
         list.removeChild(listInput);
    }
    );

    input.focus();
});

let d = new Date();
const year = d.getFullYear()
document.getElementById("currentdate").textContent = new Date()
document.getElementById("todayyear").textContent = year