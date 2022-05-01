<template>
    <div>
        <top-bar ></top-bar>
        <div class="d-flex flex-wrap justify-space-between">
			<!-- ProductCard里面的v-flex属性会报错 -->
			<ProductCard
				v-for="item in productInfos"
				:key="item.id"
				:initialData="item"
			></ProductCard>
		</div>
    </div>
</template>

<script>
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard.vue";
import {getProductList} from "../api/common"

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
    created(){
        getProductList();
    },
    methods:{
        async getProductList() {
			await getProductList()
				.then((res) => {
					console.log("获取成功", res);
					this.$notify({
						title: `更新产品列表成功,`,
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
						title: "刷新失败",
						message: "请重新登录",
					});
					console.log("登陆失败", err);
				});
		},
    },
    components:{
        TopBar,
        ProductCard
    }
}
</script>