document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    addToTable(name, phone);
    document.getElementById('nameInput').value = "";
    document.getElementById('phoneInput').value = "";
});

document.getElementById('clearAllBtn').addEventListener('click', function () {
    const tableBody = document.getElementById('contactTable');
    tableBody.innerHTML = '';
});

function addToTable(name, phone) {
    const tableBody = document.getElementById('contactTable');
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Excluir';
    deleteButton.addEventListener('click', function () {
        tableBody.removeChild(row);
    });
    cell3.appendChild(deleteButton);
}
