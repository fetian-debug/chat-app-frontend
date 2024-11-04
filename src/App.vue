<template>
    <div id="app">
      <header>
        <h1>Real-Time Chat Application</h1>
        <nav>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/chat">Chat</router-link>
        </nav>
      </header>
      <main>
        <router-view></router-view> <!-- This is where the routed components will be displayed -->
      </main>
      <footer>
        <p>&copy; 2024 All Rights Reserved by Osolutions</p>
      </footer>
    </div>
  </template>
  
<script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  /* Add some basic styling */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  
  header {
    background-color: #42b983;
    color: white;
    padding: 10px 0;
  }
  
  nav {
    margin: 10px 0;
  }
  
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  footer {
    margin-top: 20px;
    font-size: 0.8em;
  }
</style>