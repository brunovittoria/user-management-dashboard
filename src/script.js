document.getElementById('fetch-users').addEventListener('click', fetchUsers);

let currentPage = 1;
const rowsPerPage = 5;
let users = []; // Store USERS for MANIPULATION

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users = response.data;
        displayUsers(users);
        document.getElementById('error-message').style.display = 'none';
    } catch (error) {
        console.error('Error while fetching users:', error);
        showError('Failed to fetch users. Please try again later.');
    }
}

// --- Display Users --- \\
function displayUsers(usersToDisplay) {
    const tableBody = document.querySelector('#user-table tbody');
    tableBody.innerHTML = ''; // Clean the tabel before adding new DATA

    const paginatedUsers = usersToDisplay.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    paginatedUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
        `;
        row.addEventListener('click', () => showUserDetails(user));
        tableBody.appendChild(row);
    });

    renderPagination(users.length);
}

// --- Filter Users -- \\
document.getElementById('search').addEventListener('input', filterUsers);

function filterUsers() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );

    displayUsers(filteredUsers);
}

// --- Sorting --- \\
document.querySelectorAll('#user-table th').forEach(header => {
    header.addEventListener('click', () => {
        const sortBy = header.getAttribute('data-sort');
        sortUsers(sortBy);
    });
});

// -- Sort Users --- \\
function sortUsers(sortBy) {
    users.sort((a, b) => {
        const aValue = a[sortBy].toString().toLowerCase();
        const bValue = b[sortBy].toString().toLowerCase();
        return aValue.localeCompare(bValue);
    });
    displayUsers(users);
}

// --- Pagination --- \\
function renderPagination(totalUsers) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalUsers / rowsPerPage)

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button')
        pageButton.innerText = i;
        pageButton.style.margin = '5px 5px'
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayUsers(users);
        });
        paginationContainer.appendChild(pageButton);
    }
}

// --- Modal --- \\
function showUserDetails(user) {
    const modal = document.getElementById('user-modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <br/>
        <p><strong>Name:</strong> ${user.name}</p>
        <hr/>
        <p><strong>Username:</strong> ${user.username}</p>
        <hr/>
        <p><strong>Email:</strong> ${user.email}</p>
        <hr/>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <hr/>
        <p><strong>Street:</strong> ${user.address.street}</p>
        <hr/>
        <p><strong>Suite:</strong> ${user.address.suite}</p>
        <hr/>
        <p><strong>City:</strong> ${user.address.city}</p>
        <hr/>
        <p><strong>Zip Code:</strong> ${user.address.zipcode}</p>
        <hr/>
        <p><strong>Latitude:</strong> ${user.address.geo.lat}</p>
        <hr/>
        <p><strong>Longitude:</strong> ${user.address.geo.lng}</p>
        <hr/>
        <p><strong>Website:</strong> ${user.website}</p>
        <hr/>
        <p><strong>Company Name:</strong> ${user.company.name}</p>
        <hr/>
        <p><strong>Company Catch Phrase:</strong> ${user.company.catchPhrase}</p>
        <hr/>
        <p><strong>Company bs:</strong> ${user.company.bs}</p>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Desactive the scrol at the body

    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Reactivate the scroll at the body
    };
}

// --- Close Modal on Outside Click --- \\
window.onclick = event => {
    const modal = document.getElementById('user-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Reactivate the scroll at the bodyy
    }
}

// --- Display Error Message --- \\
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}