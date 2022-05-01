<template>
	<div>
		<top-bar></top-bar>

		<v-stepper v-model="e1" width="" class="mx-auto" style="margin-top: -26px">
			<v-stepper-header>
				<v-stepper-step editable :complete="e1 > 1" step="1"> 账号信息 </v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step editable :complete="e1 > 2" step="2"> 身份认证 </v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step editable step="3"> 其他信息 </v-stepper-step>
			</v-stepper-header>

			<v-stepper-items class="mx-auto">
				<v-stepper-content step="1">
					<v-card
						class="mb-12 mx-auto"
						color=""
						height="400px"
						max-width="500"
						outlined
					>
						<v-form
							class="mx-auto"
							ref="form"
							v-model="valid"
							lazy-validation
							style="width: 80%"
						>
							<v-row style="margin-top: 1vh">
								<v-col>
									<v-text-field
										v-model="regInfo.userName"
										:rules="rules.userNameRules"
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
										v-model="regInfo.password"
										:append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="rules.passwordRules"
										:type="showpwd ? 'text' : 'password'"
										label="密码"
										hint="10~15位数字或字母"
										counter
										clearable
										@click:append="showpwd = !showpwd"
										outlined
									></v-text-field>
								</v-col>
							</v-row>

							<v-row>
								<v-col>
									<v-text-field
										:append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="rules.passwordRules"
										:type="showpwd ? 'text' : 'password'"
										label="确认密码"
										hint="10~15位数字或字母"
										counter
										clearable
										@click:append="showpwd = !showpwd"
										outlined
									></v-text-field>
								</v-col>
							</v-row>

							<div width="100%" class="d-flex justify-space-around mb-6 mt-4">
								<v-btn color="primary" @click="e1 = 2" class="mx-auto">
									确认
								</v-btn>
								<v-btn color="primary" text class="mx-auto"> 取消 </v-btn>
							</div>
						</v-form>
					</v-card>
				</v-stepper-content>

				<v-stepper-content step="2">
					<v-card class="mb-12 mx-auto" color="" max-width="500" outlined>
						<v-form
							class="mx-auto"
							ref="form"
							v-model="valid"
							lazy-validation
							style="width: 80%"
						>
							<v-row style="margin-top: 1vh">
								<v-col>
									<v-text-field
										v-model="regInfo.name"
										:rules="rules.nameRules"
										label="姓名"
										required
										clearable
										outlined
									></v-text-field>
								</v-col>
							</v-row>

							<v-row style="margin-top: 1vh">
								<v-col>
									<v-text-field
										v-model="regInfo.phone"
										:counter="11"
										:rules="rules.phoneRules"
										label="手机号"
										required
										clearable
										outlined
									></v-text-field>
								</v-col>
							</v-row>

							<!-- 手机号验证 -->
							<div>
								<!-- <div class="ma-auto position-relative" style="max-width: 100%">
									<v-otp-input
										v-model="otp"
										:disabled="loading"
										@finish="onFinish"
									></v-otp-input>
									<v-overlay absolute :value="loading">
										<v-progress-circular
											indeterminate
											color="primary"
										></v-progress-circular>
									</v-overlay>
								</div> -->

								<v-snackbar
									v-model="snackbar"
									:color="snackbarColor"
									:timeout="2000"
								>
									{{ text }}
								</v-snackbar>
							</div>
							<v-row style="">
								<v-col>
									<v-text-field
										style="margin: auto"
										v-model="regInfo.cardNum"
										:rules="rules.cardNumRules"
										label="银行卡号"
										required
										clearable
										outlined
									></v-text-field>
								</v-col>
							</v-row>

							<!-- <v-file-input
								v-model="regInfo.idCard"
								:rules="IdCardRules"
								accept="image/png, image/jpeg, image/bmp"
								placeholder="Pick an avatar"
								prepend-icon="mdi-camera"
								label="身份证正面照"
								outlined
								style="width: 540px"
							></v-file-input> -->
						</v-form>

						<div width="100%" class="d-flex justify-space-around mb-6 mt-4">
							<v-btn color="primary" @click="e1 = 3"> 确认 </v-btn>

							<v-btn text> 取消 </v-btn>
						</div>
					</v-card>
				</v-stepper-content>

				<v-stepper-content step="3">
					<v-card
						class="mb-12 mx-auto"
						color=""
						height="400px"
						max-width="500"
						outlined
					>
						<v-row class="my-15">
							<div style="margin-left: 140px">
								<v-radio-group v-model="regInfo.gender" row>
									<v-radio label="男" value="1"></v-radio>
									<v-radio
										label="女"
										value="2"
										style="margin-left: 150px"
									></v-radio>
								</v-radio-group>
							</div>
						</v-row>

						<v-row>
							<v-col cols="12" sm="18" class="mx-10">
								<v-slider
									style="width: 80%"
									v-model="regInfo.age"
									color="blue"
									label="年龄"
									hint="Be honest"
									min="1"
									max="100"
									thumb-label
								></v-slider>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" sm="15" class="mx-10">
								<v-slider
									thumb-size="70"
									style="width: 80%; color: black"
									v-model="regInfo.money"
									color="blue"
									label="金额"
									hint="Be honest"
									min="10000"
									max="10000000"
									thumb-label
								></v-slider>
							</v-col>
						</v-row>

						<div width="100%" class="d-flex justify-space-around mb-6 mt-4">
							<v-btn color="primary" @click="confirmRegister"> 确认 </v-btn>

							<v-btn text> 取消 </v-btn>
						</div>
					</v-card>
				</v-stepper-content>
			</v-stepper-items>
		</v-stepper>
	</div>
</template>

<style lang="less">
.position-relative {
	position: relative;
}
::-webkit-scrollbar {
	width: 0 !important;
}
::-webkit-scrollbar {
	width: 0 !important;
	height: 0;
}
</style>

<script>
import TopBar from "../components/TopBar.vue";
import { register } from "../api/common";

export default {
	data: () => ({
		date: null,
		menu: false,
		regInfo: {
			userName: "",
			password: "",
			name: "",
			gender: 1,
			age: "",
			phone: "",
			cardNum: "",
			money: "",
		},
		e1: 1,
		showpwd: false,
		valid: true,
		rules: {
			userNameRules: [
				(v) => !!v || "请输入账号",
				(v) => (v && v.length <= 15 && v.length >= 10) || "10~15位数字或字母",
			],
			passwordRules: [
				(v) => !!v || "请输入密码",
				(v) => (v && v.length <= 15 && v.length >= 10) || "10~15位数字或字母",
			],
			cardNumRules: [
				(value) => !!value || "必填.",
				(v) => v.length >= 16 || "19位储蓄卡卡号",
				(v) => v.length <= 19 || "19位储蓄卡卡号",
			],
			nameRules: [],
			phoneRules: [
				(value) => !!value || "必填.",
				(v) => v.length >= 11 || "11位手机号",
				(v) => v.length <= 11 || "11位手机号",
			],
		},

		select: null,
		checkbox: false,
		//手机号验证
		loading: false,
		snackbar: false,
		snackbarColor: "default",
		otp: "",
		text: "",
		expectedOtp: "133707",
	}),

	components: {
		TopBar,
	},
	watch: {
		menu(val) {
			val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
		},
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

		async confirmRegister() {
			// for (let v in this.regInfo) {
			// 	if (this.regInfo[v] == "") {
			// 		this.$notify.error({
			// 			title: "信息不全",
			// 			message: "请重新填写",
			// 		});
			// 		return;
			// 	}
			// }
			this.regInfo.gender = this.regInfo.gender == "1" ? 1 : 2;
			console.log("注册信息", this.regInfo);
			await register(this.regInfo)
				.then((res) => {
					console.log("注册成功", res.data);
					if (res.data.code == 10000) {
						this.$store.commit("changeLoginCondition",{
							loginCondition:"2"
						})
						this.$router
							.push({
								path: this.redirect || "/",
							})
							.catch(() => {});
						this.$notify({
							title: `注册成功,请登录`,
							// message: `${this.loginForm.username}`,
							type: "success",
							duration: 3000,
							offset: 60,
						});
					} else {
						this.$notify.error({
							title: "注册失败",
							message: "请重试",
						});
						console.log("注册失败", err);
					}
				})
				.catch((err) => {
					this.$notify.error({
						title: "注册失败",
						message: "请重试",
					});
					console.log("注册失败", err);
					this.$router
							.push({
								path: this.redirect || "/",
							})
							.catch(() => {});
				});
		},
	},
};
</script>
