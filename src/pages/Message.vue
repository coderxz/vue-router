<template>
<div>
  <ul>
    <li v-for="item in message" :key="item.id">
      <router-link :to="`/home/message/detail${item.id}`">{{item.title}}</router-link>
      --<button @click="Jump(item.id,true)">push查看</button>
      --<button @click="Jump(item.id,false)">replace查看</button>
    </li>
    <button @click="$router.back()">返回</button>
  </ul>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
    return{
      message:[]
    }
  },
  mounted(){
    console.log('message')
    setTimeout(() => {
      const message = [
        {id:0,title:'肖炎'},
        {id:1,title:'娜南妍然'},
        {id:2,title:'小医仙'},
      ]
      this.message = message
    },1000)
  },
  methods:{
    Jump(id,flag){
      if (flag){
        this.$router.push(`/home/message/detail${id}`)
      }else{
        this.$router.replace(`/home/message/detail${id}`)
      }
    }
  }
}
</script>

<style scoped>
.router-link-active{
  color: red !important;
}
</style>