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
        
        const b  = document.createElement("b");
        b.textContent = p.name;
        const text = document.createTextNode(` [${p.category}]`);
        
        li.appendChild(b);
        li.appendChild(text);
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
        showStatus("Name and email are required.", true);
        return;
    }

    if (!email.includes("@")) {
        showStatus("Please enter a valid email address.", true);
        return;
    }

    addParticipant({name, email, category});
    showStatus("Registration Submitted!");
    form.reset();
});

renderParticipants();
addParticipant({name:"Aziz Alfarisi", email:"a@a", category:"5K Running Enthusiast"});
addParticipant({name:"Fazel Mawlana", email:"b@b", category:"2K Fun Run"});