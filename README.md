# Book Management Dashboard

## Overview
The Book Management Dashboard is a web application that allows users to visualize and manage book data through interactive charts. It provides insights into available books categorized by genre, enabling both admin and owner roles to access relevant information.

## Features
- **User Roles**:
  - **Admin Access**: Admin users can view all books in the database.
  - **Owner Access**: Owners can view only their own books.

- **Interactive Pie Chart**:
  - Displays the distribution of books across different categories (Fiction, Self-Help, Business).
  - Visual representation of data for quick insights.

- **Responsive Design**:
  - The dashboard is designed to be user-friendly and responsive across various devices.

- **Data Fetching**:
  - Fetches book data from a backend API.
  - Filters data based on user role for personalized views.

- **Real-Time Updates**:
  - Automatically updates the chart when new data is fetched or user roles change.

## Technologies Used
- React.js: For building the user interface.
- Material-UI: For styling and layout components.
- JWT (JSON Web Tokens): For user authentication and role management.
- Fetch API: For retrieving data from the backend.
- Zod for validation
   
