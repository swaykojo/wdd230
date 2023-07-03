const today = Date.now();

if (!localStorage.getItem("lastVisit")) {
	localStorage.setItem("lastVisit", today);
}

const toSet = parseInt(today) - parseInt(localStorage.getItem("lastVisit"));

localStorage.setItem("lastVisit", today);

const days = toSet*1.1574e-8;

const lastVisit = document.querySelector("#visit-content");
lastVisit.innerHTML = `You visited us ${days.toFixed(0)} days ago. Welcome back!`;
