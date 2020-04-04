<template>
    <div class="container">
        <div class="row">
            <div class="card aside col-md-4 my-3">
                <div class="card-body">
                    <div class="form-group">
                        <label for="">
                            链接
                            <small>(必须以 http:// 或 https:// 开头)</small>
                        </label>
                        <input type="text" v-model="src" class="form-control" placeholder="请输入链接">
                    </div>
                    <div class="form-group">
                        <label for="">刷新次数</label>
                        <input type="number" v-model="times" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">刷新间隔时间(毫秒)</label>
                        <input type="number" v-model="interval" class="form-control">
                    </div>
                    <div class="btn-group-sm">
                        <button class="btn btn-primary" @click="start">开始刷</button>
                        <button class="btn btn-danger" @click="stop">停止</button>
                    </div>
                </div>
            </div>
            <div class="col-md-8 my-3">
                <div class="alert alert-info">
                    {{ message }}
                </div>
                <iframe class="mt-2 w-100 h-100" ref="iframe_box" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
         return {
             src: "https://api.xygeng.cn/dailywd/api/get.php",
             times: 10,
             interval: 2000,
             job_id: "",
             count: 1,
             message: '网页预览小窗口'
         }
        },
        methods: {
            start() {
                this.message = '任务将会在' + this.interval / 1000 + 's 后开始';

                this.job_id = setInterval(() => {

                    this.message = '任务正在进行中 , 第' + this.count + '次'
                    if (++this.count > this.times) this.stop()
                    this.$refs.iframe_box.src = this.src

                }, this.interval)
            },
            stop() {
                this.message = '任务已结束'
                clearInterval(this.job_id)
                this.count = 1;
            }
        },
        mounted() {
            this.$store.commit('title',{ title:'网页刷新器' })
        }
    }
</script>

<style scoped>

</style>