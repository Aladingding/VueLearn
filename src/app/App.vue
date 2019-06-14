
<template>
    <div id="app">
        {{ msg }}
        <!-- <App2 /> -->
        <app2 />
    </div>
</template>
<script>
    import App2 from '../components/app2'
    export default  {
        components:{
            App2
        },
        data(){
            return {
                msg: 'this is app.vue page'
            }
        }
    }
</script>
<style scoped>
    #app {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        text-align: center;
        font-size: 24px;
        color: green;
    }
</style>