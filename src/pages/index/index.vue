<template>
  <div id="app">
    <div id="nav">
			<b-btn disabled variant="success">Disabled</b-btn>
			<b-btn type="button" class="my-btn btn btn-success">Disabled</b-btn>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
		<div id="footer"></div>
    <router-view/>
  </div>
</template>

<script>
	
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
