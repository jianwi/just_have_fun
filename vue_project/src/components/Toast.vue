<template>
    <div id="toast" :class="'alert alert-' + type" :hidden="toast_hidden">
        <div id="x" @click="hideMe">
            <span  class="font-weight-bolder">X</span>
        </div>
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        computed:{
          toast_hidden(){
              return  this.$store.state.toast_hidden
          }
        },
        methods:{
            hideMe(){
                return this.$store.commit('toast_hidden',{ hidden:true })
            }
        },
        props: ['message','type']
    }
</script>

<style scoped>
#toast{
    width: 80%;
    position: fixed;
    padding-top: 30px;
    padding-bottom: 30px;
    top: 10%;
    right: 10%;
    /*transform: translate(-50%,50%);*/
    z-index: 999;
    max-width: 500px;
    }
    #x{
        width: 26px;
        height: 26px;
        border: rebeccapurple 1px solid;
        border-radius: 50%;
        position: absolute;
        right: 15px;
        top: 5px;
    }
</style>