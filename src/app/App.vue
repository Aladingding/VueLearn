
<template>
    <div id="app">
        <Header />
        <Articles />
        <Runoob />
        {{ msg }}
        <App2 />
    </div>
</template>

<script>
    import Vue from 'vue';
    import App2 from '../components/app2';
    import Header from '../components/Header'
    // 全局组件
    Vue.component('Articles', {
        template: '<h1>这是自定义组件!</h1>'
    });

    const Child = {
        template: '<h1>局部自定义组件!</h1>'
    }

    export default  {
        components:{
            Header,
            Runoob:Child,
            App2,
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
        padding: 0;
        text-align: center;
        font-size: 24px;
        color: green;
    }
    * {
        padding: 0;
        margin: 0;
    }
</style>