<template>
	<v-container>
		<v-app-bar app color="#f0f3fa" dark scroll-threshold="100">
			<div class="d-flex align-center" style="">
				<v-img
					class="shrink ml-10"
					contain
					src="https://www.csxbank.com/Upload/Template/yizhu/SiteConfigPhoto/Original/202008/d8afdbe4-f5e2-4897-8f00-8e7b762b7e27.png"
					transition="false"
					width="220"
				/>
			</div>

			<v-chip
				class="ma-2"
				color="red"
				label
				style="height: 70%; font-weight: bolder"
				@click="goIndex"
			>
				秒杀系统
				<v-icon right> mdi-fire </v-icon>
			</v-chip>

			<v-spacer></v-spacer>

			<div class="my-2" v-if="condition === 0 || condition === 2">
				<v-btn class="ma-2" outlined color="indigo" @click="goLogin"
					>登陆</v-btn
				>
			</div>
			<div class="my-2" v-if="condition === 0 || condition === 1">
				<v-btn class="ma-2" outlined color="indigo" @click="goRegister"
					>注册</v-btn
				>
			</div>
			<div class="my-2" v-if="condition === 3">
				<v-btn class="ma-2" outlined color="indigo">欢迎</v-btn>
			</div>
		</v-app-bar>
	</v-container>
</template>

<script>
import { login } from '../api/common';
export default {
	name: "TopBar",
	data() {
		return {
			e1: 1,
			condition: 0,
		};
	},
	computed: {
		loginCondition() {
			condition = this.$store.state.loginCondition;
			console.log('condition',this.condition);
			return this.$store.state.loginCondition;
		},
	},
	// watch:{
	// 	loginCondition:function() {
	// 		console.log("侦听器");
	// 		this.condition = this.$store.state.loginCondition;
	// 		console.log("condition",condition);
	// 		return this.$store.state.loginCondition;
	// 	},
	// },

	methods: {
		goIndex() {
			// this.$store.commit("changeLoginCondition",{
			// 	loginCondition:0
			// });
			this.condition=0;
			this.$router.push("/");
			// console.log(this.$store.state.loginCondition);
		},
		goLogin() {
			// alert(1);
			// console.log(this.$store.state.loginCondition);
			// this.$store.commit("changeLoginCondition",{
			// 	loginCondition:2
			// });
			this.condition=2;
			this.$router.push("Login");
		},
		goRegister() {
			// alert(1);
			// this.$store.commit("changeLoginCondition",{
			// 	loginCondition:1
			// });
			this.condition=1;
			this.$router.push("Register");
		},
	},
};
</script>
