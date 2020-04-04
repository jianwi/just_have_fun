<template>
  <div class="home offset-md-3 col-md-6">
    <div class="card m-1 mt-3 pt-2">
      <div class="card-header-pills">
        原创区域
      </div>
      <div class="card-body">

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
  components: {
  },
  mounted() {
    this.$store.commit('title',{title:'好玩的小工具站'})
  }
}
</script>
