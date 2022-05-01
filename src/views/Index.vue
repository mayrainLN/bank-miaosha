<template>
	<v-container style="width: 100vw">
		<TopBar></TopBar>

		<!-- <div class="my-2" style="width: 100%; height: 30px">
			<v-btn
				class="ma-2 updateBtn"
				outlined
				color="indigo"
				@click="getActivityList"
				>刷新活动</v-btn
			>
		</div> -->
			<!-- ProductCard里面的v-flex属性会报错 -->
		<div class="d-flex flex-wrap justify-space-between">
			<AcitivityCard
				v-for="item in activityInfos"
				:key="item.id"
				:initialData="item"
			></AcitivityCard>
		</div>
		<div class="d-flex flex-wrap justify-space-between">
			<!-- ProductCard里面的v-flex属性会报错 -->
			<ProductCard
				v-for="item in productInfos"
				:key="item.id"
				:initialData="item"
			></ProductCard>
		</div>
	</v-container>
</template>

<script>
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard.vue";
import AcitivityCard from "../components/ActivityCard.vue";
import { getActivityList } from "../api/common";
export default {
	data() {
		return {
			activityInfos: [
				{
					name: "xax",
					desc: "xas",
					startTime: "2022-03-27T22:24:07Z",
					endTime: "2022-03-27T22:24:10Z",
					IsOver: 0,
					id: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动1",
					desc: "限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动限时活动限时活动限时活动,限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
			],
			productInfos: [
				{
					id: 1,
					imgSrc:
						"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00765-3496.jpg",
					name: "美国5年期国债",
					letfNum: 15,
					beginTime: "2022-2-2",
					price: 9999,
					requirements: {},
				},
				{
					id: 2,
					imgSrc:
						"https://img0.baidu.com/it/u=1139418122,654776531&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
					name: "中国10年期国债",
					letfNum: 20,
					beginTime: "2022-6-6",
					price: 1000,
					requirements: {},
				},
				{
					id: 3,
					imgSrc:
						"https://img1.baidu.com/it/u=770894738,113138824&fm=253&fmt=auto&app=138&f=JPEG?w=823&h=500",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
				{
					id: 4,
					imgSrc:
						"https://img0.baidu.com/it/u=1139418122,654776531&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
				{
					id: 5,
					imgSrc:
						"https://tse1-mm.cn.bing.net/th/id/OIP-C.7Hg-InU_LCBc2shhaJTogAHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
				{
					id: 6,
					imgSrc:
						"https://tse1-mm.cn.bing.net/th/id/OIP-C.7Hg-InU_LCBc2shhaJTogAHaE7?w=272&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
				{
					id: 7,
					imgSrc:
						"https://tse1-mm.cn.bing.net/th/id/OIP-C.7Hg-InU_LCBc2shhaJTogAHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
				{
					id: 8,
					imgSrc:
						"https://tse1-mm.cn.bing.net/th/id/OIP-C.7Hg-InU_LCBc2shhaJTogAHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					name: "3年定期储蓄",
					letfNum: 88,
					beginTime: "2022-2-2",
					price: 30000,
					requirements: {},
				},
			],
		};
	},
	created: function () {
		getActivityList();
	},
	methods: {
		async getActivityList() {
			await getActivityList()
				.then((res) => {
					console.log("获取活动成功", res);
					this.$notify({
						title: `更新活动列表成功,`,
						// message: `${this.loginForm.username}`,
						type: "success",
						duration: 3000,
						offset: 60,
					});
					// if(!this.$store.token){
					// 	this.$store.commit("saveToken",{
					// 		token:res.data.data
					// 	})
					// }
				})
				.catch((err) => {
					this.$notify.error({
						title: "登陆失败",
						message: "请重新登录",
					});
					console.log("登陆失败", err);
				});
			return [
				{
					name: "活动1",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动2",
					desc: "限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动3",
					desc: "限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动4",
					desc: "限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
				{
					name: "活动5",
					desc: "限时活动",
					startTime: "2022-3-20",
					endTime: "2022-4-5",
					IsOver: 0,
				},
			];
		},
		initialList() {
			return;
		},
	},
	name: "Index",
	components: {
		TopBar,
		AcitivityCard,
	},
};
</script>

<style>
.updateBtn {
	float: right;
}
</style>
