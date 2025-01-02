const logs = [
    { path: "E:/echo-tool/build/Hackirtool.exe", status: "Accepted", executedAt: "2025-01-01 10:34:56" },
    { path: "C:/Windows/System32/Vape.exe", status: "Suspected", executedAt: "2025-01-01 10:20:34" },
    { path: "C:/Users/User/Documents/Pedaret.exe", status: "Pending", executedAt: "2025-01-01 09:50:12" },
];

function populateTable() {
    const tableBody = document.getElementById("log-table");
    logs.forEach((log) => {
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

document.addEventListener("DOMContentLoaded", populateTable);
