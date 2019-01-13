<template>
	<div>
		<header id="header">
			<nav id="main-menu" class="navbar navbar-default navbar-fixed-top">
				<div class="container">
					<div class="navbar-header navbar-left">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="index.html"><img src="@/assets/images/logo.png" alt="logo"></a>
					</div>
					<div class="collapse navbar-collapse navbar-right">
						<ul class="nav navbar-nav">
							<li class="scroll" :class="{active: menu_value == 1}"><a href="/">首页</a></li>
							<li class="scroll" :class="{active: menu_value == 2}"><a href="about.html">走进佳博</a></li>
							<li class="scroll" :class="{active: menu_value == 3}"><a href="service.html">技术服务</a></li>
							<li class="scroll" :class="{active: menu_value == 4}"><a href="product.html">产品中心</a></li>
							<li class="scroll"><a href="news">新闻资讯</a></li>
							<li class="scroll" :class="{active: menu_value == 6}"><a href="content.html">联系我们</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'pageHeader',
		props:["menu_value"]
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/* @import '@/assets/style/main.css'; */
	/* @import '@/assets/style/responsive.css'; */
	/* @import '@/assets/style/fontfont-awesome.min.css'; */
</style>
