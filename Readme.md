Write the objective of the assignment yourself

### Refer to the image below:

Add UI reference image yourself

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1737986703/Assignment_UI_jwctqr.png" alt="ui">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Assignment Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities:

- ### **Component Structure**

Divide the application into modular and reusable components:

- **App Component**: The main wrapper that holds all child components.
- **UserList Component**: Displays the list of users fetched from the API.
- **UserForm Component**: Handles adding and editing user details.
- **ErrorBoundary Component**: Catches errors and displays user-friendly messages.

### **State Management**

- Use the `state` property in class components to manage data and UI updates:
    - **User Data**: Store the list of users fetched from the API.
    - **Form State**: Store the current user data for add/edit functionality.
    - **Error State**: Store any error messages to display when API requests fail.

### **Fetching and Displaying Users**

- Used the `componentDidMount()` lifecycle method to fetch the list of users from the `JSONPlaceholder` API and update the state.
- Displayed the users in a list format with "Edit" and "Delete" buttons.

### **Adding a New User**

- Create a button labeled "Add User" that opens a form (either inline or as a modal).
- Include fields for ID, First Name, Last Name, Email, and Department.
- On form submission, send a `POST` request to the `/users` endpoint using `axios` or `fetch`.
- Simulate adding the user to the state list (since JSONPlaceholder doesn't persist data).

### **Editing a User**

- When the "Edit" button is clicked for a user, populate the form fields with the user’s current data.
- Use a `PUT` request to send the updated data to the `/users` endpoint.
- Update the state with the new user details after a successful response.

### **Error Handling**

- Use `try-catch` blocks around all API calls to handle errors.
- Update the `error` state to show a friendly message to the user in case of failures.

</details>

### Assignment Completion Checklist

<details>
<summary>Click to view</summary>

- **Along with the below points, add your checklist specific to the assignment**

- The completion Checklist includes the below-mentioned points
  - I have completed all the functionalities written above
  - I have used only the resources (Frameworks, Design files, APIs, third-party packages) mentioned in the assignment
  - I have modified the README.md file based on my assignment instructions
  - I have completed the assignment **ON TIME**
  </details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- react-loader-spinner
- react-icons
</details>


### Resources

<details>
<summary>Data Fetch URLs</summary>
<br/>

- https://my-json-server.typicode.com/piyusht0108/userManagementDashboard/users

</details>


<details>
<summary>Colors</summary>
<br/>
    -#3b82f6
    -#000000
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
