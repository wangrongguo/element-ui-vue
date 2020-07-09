<template>
	<div id="app">
		<el-container>
			<el-header height="50">

				<el-row :gutter="20">
					<el-col :span="21">
						<!--logo-->
						<el-image style="width: 40px; height: 40px;margin: -20px -10px -16px 20px;" :src="logo_url"></el-image>
					</el-col>
					<el-col :span="2" style="text-align: right;">
						<el-dropdown>
							<span class="el-dropdown-link">
								管理员<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>
									<router-link to="/">首页</router-link>
								</el-dropdown-item>
								<el-dropdown-item>狮子头</el-dropdown-item>
								<el-dropdown-item>螺蛳粉</el-dropdown-item>
								<el-dropdown-item disabled>双皮奶</el-dropdown-item>
								<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col :span="1">
						<!-- 用户 -->
						<el-avatar style="margin-bottom: -15px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu :default-openeds="['1']">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>主页</template>
							<el-menu-item index="1-1">
								<router-link to="/" class="rl" exact>列表</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link to="/form" class="rl">表单</router-link>
							</el-menu-item>
							<el-menu-item index="1-3">
								<router-link to="/detail" class="rl">详情</router-link>
							</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>列表</template>
							<el-menu-item index="2-1">
								<router-link to="#" class="rl">列表</router-link>
							</el-menu-item>
							<el-menu-item index="2-2">
								<router-link to="#" class="rl">列表</router-link>
							</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-setting"></i>设置</template>
							<el-menu-item index="3-1">
								<router-link to="#" class="rl">列表</router-link>
							</el-menu-item>
							<el-menu-item index="3-2">
								<router-link to="#" class="rl">列表</router-link>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<router-view></router-view>
					</el-main>
					<!-- <el-footer>Footer</el-footer> -->
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logo_url: require('./assets/logo.png')
			}
		},
		methods: {}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
		height: 100%;
	}

	.el-container {
		height: calc(100% - 20px);
	}

	.el-header,
	.el-footer {
		background-color: #b4d8f3;
		color: #333;
		text-align: left;
		line-height: 50px;
	}

	.el-aside {
		background-color: #fff;
		color: #333;
		text-align: left;
		width: 150px !important;
		min-height: 31.25rem;
		overflow-x: hidden;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 100%;
	}

	body>.el-container {
		margin-bottom: 0px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-submenu .el-menu-item {
		height: 30px !important;
		line-height: 30px !important;
		padding: 0 0px 0px 0px !important;
		min-width: 100px !important;
	}

	.el-submenu__title {
		padding-left: 1 !important;
		height: 40px !important;
		line-height: 40px !important;
	}

	a {
		text-decoration: none;
	}

	a:active {
		color: #409EFF;
	}

	.rl {
		padding: 6px 73px;
		margin: 0px -24px;
	}

	.active {
		color: #409EFF;
		background-color: #ecf5ff;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #111;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
