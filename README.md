# Real-Time Chat Application

### FrontEnd For Chat App Here.
### [Backend For Chat App](https://github.com/fetian-debug/chat-app-backend)


A simple real-time chat application built with Node.js and Pusher. This application allows users to send and receive messages instantly in a chat interface.

## Features

- Real-time messaging using Pusher
- User authentication (optional)
- Message persistence (with a database, if implemented)
- Responsive design for mobile and desktop

## Technologies Used

- **Node.js**: Backend server to handle requests and manage WebSocket connections.
- **Express**: Web framework for Node.js.
- **Pusher**: Real-time communication service to facilitate instant messaging.
- **HTML/CSS**: For the frontend layout and styling.
- **Vuejs**: For Frontend JavaScript framework for building user interfaces and single-page applications. 
- **JavaScript**: For client-side interactivity.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Pusher account. Sign up at [Pusher](https://pusher.com/) and create a new app to get your credentials.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fetian-debug/chat-app-frontend
   cd chat-app-frontend
   ```
2- **Install dependencies:**:

  ```bash
  npm install
  ```

3- **Run the application:**:

   ```bash
   npm run serve
   ```
  The server should start on http://localhost:8080

### Usage
- You need to Run Backend Frist on http://localhost:3000
- Open your browser and navigate to http://localhost:8080
- You should see the chat interface.
- Open multiple tabs or browsers to test real-time messaging.


### Deployment

I deployed the Chat App on [Vercel App](https://vercel.com). You can access the the Chat App using the following link: [Chat App](https://chat-app-frontend-psi-silk.vercel.app/chat)

### API Endpoints

- Register: Use the /register endpoint to create a new user account.
- Login: Use the /login endpoint to authenticate existing use
- Chat: Use the /chat for Send a new message to the chat.

Feel free to test the app and start interacting with the chat application! If you have any questions or need further assistance, let me know!
