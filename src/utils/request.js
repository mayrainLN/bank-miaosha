import axios from "axios";
import router from "../router";

// 创建axios实例
const axiosInstance = axios.create({
	baseURL: "http://47.106.160.24:9857",
	timeout: 10 * 1000,
	headers: {},
});

let whitelist = ["/user/login"]; // 拦截器白名单，登录时不添加 token

// 拦截器

// 1.请求拦截器 全局注入token
axiosInstance.interceptors.request.use(
	(config) => {
		// console.log("urlconfig", config);
		// 拦截白名单以及添加token
		if (whitelist.includes(config.url)) {
			return config;
		} else {
			console.log("localStorage",localStorage);
			let authToken = localStorage.authToken;
			config.headers.token ="Bearer"+authToken;
			console.log("headers.token",config.headers.authToken);
			return config;
		}
	},
	(err) => {
		return Promise.reject(error);
	}
);

// 2.响应拦截器
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(e) => {
		// 对响应错误做点什么 除了200 - 300
		// ----------------
		// 如果是401 token失效  跳回到登录页
		if (e.response && e.response.status === 401) {
			// route 内置了转码操作

			const redirectUrl = encodeURIComponent(
				router.currentRoute.value.fullPath
			);
			router.push("/login?redirectUrl=" + redirectUrl);
		}
		return Promise.reject(e);
	}
);

export default function request({ url, method, reqData }) {
	return axiosInstance({
		url,
		method,
		[method.toLowerCase() === "get" ? "params" : "data"]: reqData,
	});
}
