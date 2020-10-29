<template>
  <div>
    <p></p>
    <p>删除换行：将换行字符转换为空格。方便复制粘贴论文</p>
    <hr>
    <p>原文本</p>
    <textarea rows="9" cols="50" v-model="text"></textarea>
    <br>
    <p>目标文本</p>
    <textarea rows="9" cols="50" v-model="text2"></textarea>
  </div>
</template>

<script>
export default {
  name: "Index",
  data:function () {
    return {
      text:"",
      text2:""
    }
  },
  watch:{
    text:function (){
      this.text2 = this.text.replace(/\s+/g,' ')
    }
  }
}
</script>

<style scoped>

</style>