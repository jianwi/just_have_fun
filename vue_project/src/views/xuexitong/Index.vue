<template>
    <div class="container mt-1">
        <toast
                :type="toast.type"
                :message="toast.message"
                >

        </toast>
        <div class="row">
            <div class="col-lg-3">
                <div class="form-group">
                    <div class="card">
                        <div class="card-body">
                            <div class="alert alert-info text-left">
                                本工具可以生成学习通倍速播放课程的代码。
                                <br>
                                防止同学们在听课过程中因为老师讲的太快而跟不上，落下学习。

                                <div>
                                    如果不会操作，可以
                                    <router-link class="text-primary font-weight-bolder" to="xuexitong/help">查看帮助</router-link>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="card p-2">
                    <div class="form-group">
                        <label for="">播放速度</label>
                        <select v-model="rate" class="form-control">
                            <option :key="rate.key" :value="rate.rate" v-for="rate in rates">{{ rate.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">自定义播放速(填写0-16之间的实数)</label>
                        <input type="number" class="form-control" min="0" max="16" v-model="rate">
                    </div>


                    <button class="btn btn-primary" @click="generate">一键生成</button>

                    <div class="alert">
                        <textarea v-show="code" id="codearea" class="mt-2 form-control" :value="code" rows="5">

                        </textarea>

                    </div>
                    <button ref="clipbtn" v-show="code" class="btn-clipboard btn btn-primary btn-block" data-clipboard-action="copy" data-clipboard-target="#codearea">一键复制</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import clipboard from 'clipboard';
    import Toast from "../../components/Toast";
    export default {
        name: "Index",
        components: {Toast},
        data(){
            return {
                code:'',
                rate:0.5,
                rates:[
                    {
                      name: '0.5倍速',
                      rate: 0.5
                    },
                    {
                      name: '0.1倍速',
                      rate: 0.1
                    },
                    {
                        name:'1.2倍速',
                        rate: 1.2
                    },
                    {
                        name: '1.5倍速',
                        rate: 1.5
                    },
                    {
                        name: '2倍速',
                        rate: 2
                    },
                    {
                        name: '3倍速',
                        rate: 3
                    },
                    {
                        name: '5倍速',
                        rate: 5
                    },
                    {
                        name: '10倍速',
                        rate: 10
                    },
                    {
                        name: '15倍速',
                        rate: 15
                    }
                ],
                toast:{
                    type:'info',
                    message: '',
                }
            }
        },
        methods:{
          generate(){
              let code = 'var v = document.querySelector("iframe").contentWindow.document.querySelector("iframe").contentWindow.document.getElementById("video_html5_api")'+
                  ';v.playbackRate=' + this.rate +
                      ';v.play()'
              let base_code = 'eval(window.atob("' + window.btoa(code) + '"))'

              this.code = base_code
                setTimeout(()=>{
                    this.$refs.clipbtn.click()
                },500)
          }
        },
        mounted() {

            this.$store.commit('title',{ title:'学习通倍速播放代码生成器' })
            let clip = new clipboard('.btn-clipboard');
            clip.on('success', ()=> {
                this.$store.commit('toast_hidden',{ hidden:false })
                this.toast.message = '复制成功 :)'
                this.toast.type = 'success'
            });

            clip.on('error', ()=> {
                this.toast.message = '一键复制失败 :( 手动复制吧'
                this.toast.type = 'error'
            });
        }
    }
</script>

<style scoped>

</style>