<template>
  <div class="home offset-md-3 col-md-6">
    <div class="card m-1 mt-3 pt-2">
      <div class="card-header-pills">
        原创区域
      </div>
      <div class="card-body container text-left">
          <router-link class="my-1 offset-md-1 col-md-4 btn btn-primary" :key="key" :to="original.link" v-for="(original,key) of original_list">{{ original.name }}</router-link>

      </div>
    </div>
    <div class="card m-1 mt-2 pt-2">
      <div class="card-header-pills">
        非原创
      </div>
      <div class="card-body">

      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return{
      original_list: [
        {
          name: '学习通倍速播放代码',
          link:'/xuexitong'
        },
        {
          name: '青年大学习截图生成',
          link: '/daxuexi'
        },
        {
          name: '网页刷新器',
          link: '/web_refresh'
        }
      ]
    }
  },
  components: {
  },
  mounted() {
    this.$store.commit('title',{title:'好玩的小工具站'})
  }
}
</script>
