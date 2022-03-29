<template>
	<div>
		<top-bar></top-bar>

		<v-stepper v-model="e1" width="" class="mx-auto" style="margin-top: -26px">
			<v-stepper-header>
				<v-stepper-step :complete="e1 > 1" step="1"> 账号信息 </v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step :complete="e1 > 2" step="2"> 身份认证 </v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step step="3"> 财务认证 </v-stepper-step>
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
							style="width: 80%; "
							
						>
							<v-row style="margin-top: 1vh;margin-top:60px">
								<v-col>
									<v-text-field
										v-model="regInfo.userName"
										:counter="10"
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
										:rules="[rules.required, rules.min]"
										:type="showpwd ? 'text' : 'password'"
										label="密码"
										hint="不少于8位"
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
										:counter="10"
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
										:counter="10"
										:rules="rules.phoneRules"
										label="手机号(回车确认)"
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

							<v-row>
								<v-col>
									<v-text-field
										v-model="regInfo.idCard"
										:append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.idCardRules.required, rules.idCardRules.min]"
										:type="showpwd ? 'text' : 'password'"
										label="身份证号/护照"
										hint="不少于8位"
										counter
										clearable
										@click:append="showpwd = !showpwd"
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
						<v-row style="margin-top: 30%">
							<v-col>
								<v-text-field
									style="width:80%;margin:auto"
									v-model="regInfo.cardNum"
									:counter="10"
									:rules="rules.cardNumRules"
									label="银行卡号"
									required
									clearable
									outlined
								></v-text-field>
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

export default {
	data: () => ({
		regInfo: {
			userName: "",
			password: "",
			Name: "",
			phone:"",
			idCard: "",
			cardNum: "",
		},
		e1: 1,
		showpwd: false,
		//身份证号校验

		valid: true,
		rules: {
			userNameRules: [
				(v) => !!v || "请输入账号",
				(v) =>
					(v && v.length <= 15&&v.length>=9 ) || "9~15位数字或字母",
			],
			passWordRules: [
				(v) => !!v || "请输入密码",
				(v) => (v && v.length <= 10) || "密码不少于10位",
			],
			// IdCardRules: [
			// 	(value) =>
			// 		!value ||
			// 		value.size < 2000000 ||
			// 		"Avatar size should be less than 2 MB!",
			// ],
			idCardRules: {
				required: (value) => !!value || "必填.",
				min: (v) => v.length >= 18 || "18位身份证号",
				min: (v) => v.length <= 18 || "18位身份证号",
			},
			cardNumRules:{
				required: (value) => !!value || "必填.",
				min: (v) => v.length >= 19 || "19位储蓄卡卡号",
				max: (v) => v.length <= 19 || "19位储蓄卡卡号",
			},
			nameRules:{
				required: (value) => !!value || "必填.",
				min: (v) => v.length >= 2 || "19位储蓄卡卡号",
				max: (v) => v.length <= 8 || "19位储蓄卡卡号"
			}
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
		loginByPwd() {
			//
		},
		loginByPhone() {
			//
		},
		//手机号验证
		onFinish(rsp) {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
				this.snackbarColor = rsp === this.expectedOtp ? "success" : "warning";
				this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`;
				this.snackbar = true;
			}, 3500);
		},
		confirmRegister() {
			// ....
			this.$router.push("Login");
		},
	},
};
</script>
