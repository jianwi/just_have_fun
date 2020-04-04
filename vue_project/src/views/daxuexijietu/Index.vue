<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
            <div class="form-group">
                <div class="card">
                    <div class="card-body">
                        <div class="alert alert-info text-left">
                            本工具可以生成青年大学习的截图。
                            <br>
                            帮助你记录每次学习的经历
                            <hr>
                            <div>
                                <b>说明：</b>
                                有时候获取到的图片是空白的。纯属正常，毕竟人无完人，程序也会出错。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card p-2">
                <div class="my-2 card-header-pills">
                    一键获取图片
                </div>
                <hr>
                    <div class="w-auto mx-auto input-group my-2">
                        <label for="" class="input-group-text px-3">第</label>
                        <div class="input-group-prepend">
                            <select id="ji" v-model="ji" class="form-control">
                                <option :key="key" v-for="(ji,key) in jis">{{ ji }}</option>
                            </select>
                        </div>
                        <label for="" class="input-group-text px-3">季</label>
                    </div>
                    <div class="input-group mx-auto w-auto my-1">
                        <label for="" class="input-group-text px-3">第</label>
                        <div class="input-group-prepend">
                            <select id="qi" v-model="qi" class="form-control px-3">
                                <option :key="key" v-for="(qi,key) in qis">{{ qi }}</option>
                            </select>
                        </div>
                        <label for="" class="input-group-text px-3">期</label>
                    </div>
                    <div class="my-3">
                        <router-link :to="{name:'大学习图片',params:{'ji':ji,'qi':qi}}" class="d-block btn btn-primary mx-auto w-100 mt-5">获取图片</router-link>
                    </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                ji:8,
                jis:[2,3,4,5,6,7,8,9,10,11],
                qi:1,
                qis:[1,2,3,4,5,6,7,8,9]
            }
        },
        created() {
            this.$store.commit('title',{ title:'青年大学习截图生成' })
        }
    }
</script>

<style scoped>

</style>