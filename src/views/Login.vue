<template>
	<div class="main-box">
		<top-bar></top-bar>
		<v-card
			class="login-box mx-auto"
			max-width="500"
			height="350"
			outlined
			style="margin-top: 10vh"
		>
			<v-form
				class="mx-auto"
				ref="form"
				v-model="valid"
				lazy-validation
				style="width: 80%"
			>
				<v-row style="margin-top: 5vh">
					<v-col>
						<v-text-field
							v-model="loginForm.userName"
							:rules="userNameRules"
							label="账号"
							required
							clearable
							outlined
						></v-text-field>
					</v-col>
				</v-row>

				<v-row>
					<v-col>
						<v-text-field
							v-model="loginForm.password"
							:append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="passWordRules"
							:type="showpwd ? 'text' : 'password'"
							name="input-10-1"
							label="密码"
							@click:append="showpwd = !showpwd"
							outlined
						></v-text-field>
					</v-col>
				</v-row>

				<a href="#" class="text-decoration-none">找回密码</a>

				<div class="d-flex justify-space-around mb-6 mt-4">
					<div class="mx-auto">
						<v-btn depressed small color="primary" large @click="Login"
							>密码登陆</v-btn
						>
					</div>

					<!-- <div class="mx-auto">
						<v-btn depressed small color="primary" large @click="loginByPhone"
							>手机号登陆</v-btn
						>
					</div> -->
				</div>
			</v-form>
		</v-card>
	</div>
</template>

<style lang="less">
.main-box {
	background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.tn-wy.com%2F%3Fsmimg%2F190614%2F12-1Z614162159123.jpg&refer=http%3A%2F%2Fwww.tn-wy.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644932879&t=3cd4aa1c192504a540eafc2c07b01f40");
	background-size: 100% 100%;
	width: 100%;
	height: 100%;

	.login-box {
		opacity: 0.9;
	}
	::-webkit-scrollbar {
		width: 0 !important;
	}
	::-webkit-scrollbar {
		width: 0 !important;
		height: 0;
	}
}
</style>

<script>
import TopBar from "../components/TopBar.vue";
import { login } from "../api/common";
import store from "../store";

export default {
	data: () => ({
		// LoginCondition: 1, //已点击登陆,位于登陆界面
		redirect: "",
		showpwd: false,
		loginForm: {
			userName: "",
			password: "",
		},
		valid: true,
		userNameRules: [
			(v) => !!v || "请输入账号",
			(v) =>
				(v && v.length>= 10&& v.length>= 15) || "10~15数字或字母",
		],
		passWordRules: [
			(v) => !!v || "请输入密码",
			(v) =>
				(v && v.length>= 10&& v.length>= 15) || "10~15数字或字母",
		],
		select: null,
		checkbox: false,
	}),

	components: {
		TopBar,
	},

	methods: {
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
		resetValidation() {
			this.$refs.form.resetValidation();
		},

		async Login() {
			if (
				this.loginForm.userName.length < 10 ||
				this.loginForm.userName.length > 15 ||
				this.loginForm.password.length < 10 ||
				this.loginForm.password.length > 15
			) {
				this.$notify.error({
					title: "账号或密码错误",
					message: "请重新填写",
				});
			}
			await login(this.loginForm)
				.then((res) => {
					if (res.data.code == 10000) {
						this.$router
							.push({
								path: this.redirect || "/",
							})
							.catch(() => {});
						this.$notify({
							title: `欢迎您,`,
							// message: `${this.loginForm.username}`,
							type: "success",
							duration: 3000,
							offset: 60,
						});
						localStorage.authToken = res.data.data.token;
						this.$store.commit("saveToken", {
							authToken: res.data.data.token,
						});
						this.$store.commit("changeLoginCondition", {
							loginCondition: 3,
						});
					} else {
						this.$notify.error({
							title: "登陆失败",
							message: "请重新登录",
						});
						console.log("登陆失败", err);
					}
				})
				.catch((err) => {
					this.$notify.error({
						title: "登陆失败",
						message: "请重新登录",
					});
					console.log("登陆失败", err);
				});
		},
	},
};
</script>
