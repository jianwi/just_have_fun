<template>
    <nav class="navbar bg-secondary text-light">
        <div class="container align-items-center">
            <div class="navbar-brand">
                {{ title }}
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        computed:{
            title(){
                return this.$store.state.title
            }
        }
    }
</script>

<style scoped>

</style>