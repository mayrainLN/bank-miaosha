<template>
  <v-card
    :loading="loading"
    class="mx-12 my-8"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="productInfos.imgSrc"
    ></v-img>

    <v-card-title>{{productInfos.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="buyBtn">
      <v-btn
        color="error"
        dark
        large 
        @click="reserve"
        style="width:100%;font-size:20px;font-weight:bolder"
      >
        秒       杀
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props:{
      initialData:Object,
    },
    computed: {
      productInfos:function(){
        return this.initialData;
      }
      
    },

    data: () => ({
      loading: false,
      selection: 1,
      // productInfos:this.initialData,不知道为啥这样写会报错，放在computed里就不会报错
    }),

    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
    mounted() {
      // console.log(this.initialData);
    },
  }
</script>

<style>
.buyBtn{
  justify-content: center;
}
</style>