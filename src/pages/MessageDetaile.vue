<template>
  <ul>
    <li>
      Id:{{ $route.params.id }}
    </li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>

<script>
const allMessageDetail = [
  {id: 0, title: '肖炎',content:'001'},
  {id: 1, title: '娜南妍然',content:'002'},
  {id: 2, title: '小医仙',content:'003'},
]
export default {
  data() {
    return {
      detail:{

      }
    }
  },
  mounted() {
    console.log('detail')

    setTimeout(() => {
      const id = this.$route.params.id*1
      const newMessageDetail = allMessageDetail.find((item) => {
        return item.id === id
      })
      this.detail = newMessageDetail
    },1000)

  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        const id = to.params.id*1
        const newMessageDetail = allMessageDetail.find((item) => {
          return item.id === id
        })
        this.detail = newMessageDetail
      },1000)
    }
  }
}
</script>

<style scoped>
.router-link-active{
  color: red !important;
}
</style>