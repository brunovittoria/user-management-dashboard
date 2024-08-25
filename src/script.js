document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        displayUsers(users);
    } catch (error) {
        console.error('Error while fetching users:', error);
        alert('Failed to fetch users.');
    }
}

// --- Display Users --- \\
function displayUsers(users) {
    const tableBody = document.querySelector('#user-table tbody');
    tableBody.innerHTML = ''; // Clean the tabel before adding new DATA

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
        `;
        tableBody.appendChild(row);
    });
}

// --- Filter Users -- \\
document.getElementById('search').addEventListener('input', filterUsers);

function filterUsers() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#user-table tbody tr');

    rows.forEach(row => {
        const name = row.children[0].textContent.toLowerCase();
        row.style.display = name.includes(searchTerm) ? '' : 'none';
    });
}
