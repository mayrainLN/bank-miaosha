<template>
	<v-card class="mx-auto my-15" width="300" hover style="">
		<v-card-text>
			<div>{{ initialData.isOver }}</div>
			<p class="display-1 text--primary">{{ initialData.name }}</p>
			<div>
				<p>{{ initialData.startTime }}</p>
				<p>{{ initialData.endTime }}</p>
			</div>
			<div class="text--primary line-limit-length">
				{{ initialData.desc }}
			</div>
		</v-card-text>
		<v-card-actions>
			<v-btn text color="deep-purple accent-4" @click="getProductList"> 获取详情 </v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {getProductList,activityCheck} from "../api/common"

export default {
	props: {
		initialData: Object,
	},

	methods:{
		async getProductList(){
			await activityCheck({aid:this.initialData.id}).then(res=>{
				// if()
				console.log("activityCheck",res);
			})
		}
	}
};
</script>

<style>
.line-limit-length {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

</style>
