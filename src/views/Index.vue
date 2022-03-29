<template>
	<v-container>
		<TopBar></TopBar>
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
export default {
	data() {
		return {
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
	created() {
		
	},
	name: "Index",
	components: {
		TopBar,
		ProductCard,
	},
};
</script>
