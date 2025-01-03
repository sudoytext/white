const logs = [
    { path: "E:/echo-tool/build/Hackirtool.exe", status: "Accepted", executedAt: "2025-01-01 10:34:56" },
    { path: "C:/Windows/System32/Vape.exe", status: "Suspected", executedAt: "2025-01-01 10:20:34" },
    { path: "C:/Users/User/Documents/Pedaret.exe", status: "Pending", executedAt: "2025-01-01 09:50:12" },
    { path: "C:/Program Files/ToolX.exe", status: "Accepted", executedAt: "2025-01-01 09:45:00" },
    { path: "D:/Games/SpeedHack.exe", status: "Suspected", executedAt: "2025-01-01 09:30:25" }
];

function populateLogs(logArray) {
    const tableBody = document.getElementById("log-table");
    tableBody.innerHTML = "";

    logArray.forEach((log) => {
        const row = document.createElement("tr");

        const filePath = document.createElement("td");
        filePath.textContent = log.path;

        const status = document.createElement("td");
        status.textContent = log.status;
        status.style.color = log.status === "Accepted" ? "green" : log.status === "Suspected" ? "red" : "orange";

        const executedAt = document.createElement("td");
        executedAt.textContent = log.executedAt;

        row.appendChild(filePath);
        row.appendChild(status);
        row.appendChild(executedAt);

        tableBody.appendChild(row);
    });
}

document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredLogs = logs.filter(log => log.path.toLowerCase().includes(query));
    populateLogs(filteredLogs);
});

document.addEventListener("DOMContentLoaded", () => populateLogs(logs));
