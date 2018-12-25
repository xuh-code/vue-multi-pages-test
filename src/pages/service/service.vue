<template>
	<div id="app">
		<div id="nav">
			<h1>This is service page</h1>
			<router-link to="/">service.htmn</router-link> |
			<router-link to="/list">list</router-link> |
		</div>
		<router-view />
	</div>

</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
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
