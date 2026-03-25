const API = "http://localhost:3000";

function startEscalator() {
    fetch(API + "/start", { method: "POST" });
    document.getElementById("status").innerText = "Status: RUNNING";
}

function stopEscalator() {
    fetch(API + "/stop", { method: "POST" });
    document.getElementById("status").innerText = "Status: STOPPED";
}

function changeDirection() {
    let direction = document.getElementById("direction").value;
    fetch(API + "/direction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ direction })
    });
}

function changeSpeed() {
    let speed = document.getElementById("speed").value;
    fetch(API + "/speed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ speed })
    });
}
