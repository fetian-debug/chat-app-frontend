<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" :disabled="isSubmitting" class="submit-button">Register</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      register() {
        axios.post('https://chat-app-backend-production-970c.up.railway.app/register', { username: this.username, password: this.password })
          .then(() => {
            this.$router.push('/login');
          })
          .catch(error => {
            alert(error.response.data.message);
          });
      }
    }
  };
</script>

<style scoped>
.registration-form {
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007BFF;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>