const participants = [];

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const participantsList = document.getElementById("participants-list");
const message = document.getElementById("message");

function renderParticipants() {
    participantsList.innerHTML = "";
    for (const p of participants) {
        const li = document.createElement("li");
        li.textContent = `${p.name} • ${p.category}`;

        participantsList.appendChild(li);
    }
}

function addParticipant(participant) {
    participants.push(participant);
    renderParticipants();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let category = categoryInput.value.trim();
    switch (category) {
        case "2k": 
            category = "2K Fun Run";
            break;
        case "5k":
            category = "5K Running Enthusiast";
            break;
        case "10k":
            category = "10K Running Marathon";
            break;
        default:
            break;
    }

    if (!name || !email) {
        message.textContent = "Name and email are required.";
        message.style = "color: #ea4335; margin: 0 0 1rem;";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Please enter a valid email address.";
        message.style = "color: #ea4335; margin: 0 0 1rem;";
        return;
    }

    addParticipant({name, email, category});
    message.style = "color: #34a853; margin: 0 0 1rem;";
    message.textContent = "Registration Submitted!";

    setTimeout(() => {
        message.textContent = "";
        message.style.all = "unset";
    }, 3000);
    
    form.reset();
});

renderParticipants();
addParticipant({name:"Aziz Alfarisi", email:"a@a", category:"5K Running Enthusiast"});
addParticipant({name:"Fazel Mawlana", email:"b@b", category:"2K Fun Run"});