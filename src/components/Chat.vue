
<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <strong>{{ msg.username }}:</strong> <span>{{ msg.message }}</span>
      </div>
    </div>
    <div class="input-container">
      <input
        v-model="message"
        @keyup.enter="sendMessage"
        placeholder="Type your message..."
        class="message-input"
      />
      <button @click="sendMessage" class="send-button">Send</button>
    </div>
  </div>
</template>



<script>
import { jwtDecode } from 'jwt-decode';
import Pusher from 'pusher-js';
import axios from 'axios';

export default {
  data() {
    return {
      messages: [],
      message: '',
      pusher: null,
      channel: null,
    };
  },
  created() {
    this.initializePusher();
  },
  beforeUnmount() {
    // Unsubscribe from Pusher channel when component is destroyed
    if (this.channel) {
      this.channel.unbind_all();
      this.channel.unsubscribe();
    }
  },
  methods: {
    initializePusher() {
      this.pusher = new Pusher('fcbb3283a93e7841f699', {
        cluster: 'eu',
      });

      this.channel = this.pusher.subscribe('chat');
      this.channel.bind('message', this.addMessage);
    },
    addMessage(data) {
      this.messages.push(data);
    },
    async sendMessage() {
      if (!this.message.trim()) return; // Prevent sending empty messages

      try {
        const token = localStorage.getItem('token');
        const { username } = jwtDecode(token); // Decode the token to get the username

        await axios.post('https://chat-app-backend-production-970c.up.railway.app/message', {
          username,
          message: this.message,
        });

        this.message = ''; // Clear the input after sending
      } catch (error) {
        console.error('Error sending message:', error);
        // Optionally, show an error message to the user
      }
    },
  },
};
</script>


<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #f9f9f9;
}

.messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  max-height: 400px; /* Adjust based on your needs */
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: #e1f5fe; /* Light blue background */
  color: #333;
}

.input-container {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.message-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.send-button {
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>