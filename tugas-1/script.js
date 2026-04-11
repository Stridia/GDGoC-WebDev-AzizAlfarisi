const participants = [];

const body = document.getElementById("body");
const toggleTheme = document.getElementById("toggle-theme");
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const participantsList = document.getElementById("participants-list");
const message = document.getElementById("message");

const CATEGORY_MAP = {
    "2k" : "2K Fun Run",
    "5k" : "5K Running Enthusiast",
    "10k" : "10K Running Marathon" 
};

function renderParticipants() {
    participantsList.innerHTML = "";
    for (const p of participants) {
        const li = document.createElement("li");
        li.innerHTML = `<b>${p.name}</b> [${p.category}]`;
        participantsList.appendChild(li);
    }
}

function addParticipant(participant) {
    participants.push(participant);
    renderParticipants();
}

function showStatus(content, isError=false) {
    message.textContent = content;
    message.className = "message " + ((isError) ? "status-error" : "status-success");

    setTimeout(() => {
        message.textContent = "";
        message.className = "message";
    }, 5000);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const category = categoryInput.value.trim();

    if (!name || !email) {
        showStatus("Name and email are required.", true);
        return;
    }

    if (!email.includes("@")) {
        showStatus("Please enter a valid email address.", true);
        return;
    }

    addParticipant({name, email, category: CATEGORY_MAP[category] || category});
    showStatus("Registration Submitted!");
    form.reset();
});

let mode = "light";
toggleTheme.addEventListener("click", (event) => {
    event.preventDefault();
    toggleTheme.innerHTML="";

    if (mode == "light") {
        body.className = "dark-mode";
        toggleTheme.textContent = "Light";
        mode = "dark";
    } else {
        body.className = "";
        toggleTheme.textContent = "Dark";
        mode = "light";
    }
});

renderParticipants();
addParticipant({name:"Aziz Alfarisi", email:"a@a", category:"5K Running Enthusiast"});
addParticipant({name:"Fazel Mawlana", email:"b@b", category:"2K Fun Run"});