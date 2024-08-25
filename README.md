# User Management Dashboard

## Description

The **User Management Dashboard** is a simple web application that allows users to view, filter, and manage user data. The application fetches user data from an external API and displays it in an interactive table. It was developed using HTML, CSS, and JavaScript, with the Axios library used for HTTP requests.

## Features

- **Data Fetching**: Users are loaded from an external API (JSONPlaceholder) when the "Fetch Users" button is clicked.
- **Real-Time Filtering**: Users can be filtered by name as you type in the search input. The table updates automatically.
- **Responsive Interface and Interactivity**: The application is styled to be simple and functional, with a layout that adapts to different screen sizes.
- **Sorting**: Users can sort the data by clicking on the table headers (name, email, etc.).
- **Pagination**: The table supports pagination, allowing users to navigate through large datasets efficiently.
- **User Details Modal**: Clicking on a user row opens a modal displaying more detailed information about the selected user.
- **Error Handling**: Displays a clear error message in the UI if the API request fails or if any issues occur during the data fetching process.


## How to Run the Project Locally

### Prerequisites

1. **Browser**: Any modern browser such as Chrome, Opera or Mozilaa.
2. **Text Editor**: A text editor like VS Code.
3. **Live Server**: To run the project locally you can just install the Live Server Extension: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

### Steps

1. **Clone the Repository**:
   - Download or clone the repository to your local machine.

2. **Project Structure**:
   - **index.html**: Contains the HTML structure of the application.
   - **style.css**: Contains the styling for the application.
   - **script.js**: Contains the JavaScript logic for API interaction and DOM manipulation.

3. **Axios Installation**:
   - **No manual installation** of Axios is needed as it is included via CDN directly in the `index.html` file.

4. **Open the Project**:
   - Open the `index.html` file directly in your browser.

### Project Structure

- **HTML**: The basic structure of the application, including the search field, fetch button, and the table where user data is displayed.
- **CSS**: Styling for the application, including responsiveness, hover effects on the table, modal styling, and error message display.
- **JavaScript**: 
  - **Axios**: Used to make GET requests to the JSONPlaceholder API.
  - **DOM Manipulation**: To display data in the table, implement real-time filtering, sorting, pagination, and modal functionality.
  - **Error Handling**: Displays an error message if the API request fails.

### API Used

The application uses the JSONPlaceholder API to fetch fake user data. The API URL is:

- `https://jsonplaceholder.typicode.com/users`

### How It Works

1. **Loading Users**:
   - When the "Fetch Users" button is clicked, the application makes a request to the API and retrieves a list of users.
   - The user data is then displayed in a table.

2. **Filtering Users**:
   - As you type in the search field, the table is filtered in real-time to display only users whose names match the input.

3. **Sorting Data**:
   - Users can click on the table headers (e.g., Name, Email) to sort the data in ascending or descending order.

4. **Pagination**:
   - The application divides the data into pages, allowing users to navigate through large datasets using pagination buttons.

5. **Viewing User Details**:
   - Clicking on a user row opens a modal that shows more detailed information about the selected user.

6. **Error Handling**:
   - If the API request fails or encounters an issue, an error message is displayed to inform the user.

