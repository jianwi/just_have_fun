<template>
    <div>
        <img :src="img_src">
        <div class="m-3">
            正在加载图片，等一哈
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pic",
        data(){
          return{
              ji:'',
              qi:'',
              ch: ['',"一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一"],
              q2p: ['',"q","w",'e','r','t','y','u','i','o','p'],
              img_src: ''
            }
          },
        created() {
            this.ji = this.$route.params.ji
            this.qi = this.$route.params.qi
            this.$store.commit('title',{ title:'"青年大学习"第'+  this.ch[this.ji] + '季第' + this.ch[this.qi] +'期来啦！'})
            document.title = '"青年大学习"第'+  this.ch[this.ji] + '季第' + this.ch[this.qi] +'期来啦！'
            this.img_src = 'http://h5.cyol.com/special/daxuexi/daxuexi' + this.ji + this.q2p[this.qi] + this.qi + '/images/end.jpg'

        }

    }
</script>

<style scoped>
    img{
        width: 100%;
        top: 0px;
        left: 0px;
        position: fixed;
        background: #000;
    }
</style>