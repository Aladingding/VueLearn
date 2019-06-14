
<template>
    <div class="app2">
        <span v-bind:title='msg'> {{ msg }}</span>
        <p>{{ message }}</p>
        <div v-html="message"></div>
        <a v-on:click="handleAlert">...</a>
        <h1>{{details()}}</h1>
        <div v-bind:class="{'classUse': use}">
            v-bind:class 指令
             {{ ok ? 'YES' : 'NO' }}<br>
        </div>
        <p v-if="seen">现在你看到我了</p>
        <pre><a v-bind:href="url">菜鸟教程</a></pre>
        <p>{{ message }}</p>
        <input v-model="message">
        <div>
            {{ value | capitalize }}
        </div>
        <p v-if="seen">现在你看到我了</p>
        <template v-if="ok">
            <h1>菜鸟教程</h1>
            <p>学的不仅是技术，更是梦想！</p>
            <p>哈哈哈，打字辛苦啊！！！</p>
        </template>
        <div v-else>
             No Sorry
        </div>
        <h1 v-show="ok">Hello!</h1>
        <ul>
            <li v-for="(el, index) in item" v-bind:key="index">
                 {{ el.name }}{{ index }}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key) in object" :key="key">
                 {{ key }} : {{ value }}
            </li>
        </ul>
        <ul>
             <li v-for="n in 10" :key="n">
                 {{ n }}
            </li>
        </ul>
        <div>
            <p>原始字符串: {{ txt }}</p>
            <p>计算后反转字符串: {{ reversedTxt }}</p>
        </div>
        <div>{{sites}}</div>
        <button @click = "counter++" style = "font-size:25px;">点我{{ counter }}</button>
    </div>
</template>
<script>
    const App2 =  {
        name: 'app2',
        data(){
            return {
                txt: '我是一条河，从东流到西',
                msg: 'Page 2',
                site: "菜鸟教程",
                message: '<h1>菜鸟教程</h1>',
                use: true,
                ok: true,
                seen: false,
                
                value: 'abcde',
                item: [{name:'Runoob'},{name:'Google'}, { name:'Taobao'}],
                object: {
                    name: '菜鸟教程',
                    url: 'http://www.runoob.com',
                    slogan: '学的不仅是技术，更是梦想！'
                },

                names: 'Google',
                url: 'http://www.google.com',

                counter: 0
            }
        },
        methods:{
            handleAlert(){
                alert('aaa')
            },
            details: function() {
                return  this.site + " - 学的不仅是技术，更是梦想！";
            }
        },
        filters: {
            capitalize: function (value) {
                console.log(value,'value');
                if (!value) return '';
                value = value.toString();
                const newVal = value.charAt(0).toUpperCase() + value.slice(1);
                return newVal;
            }
        },
        computed: {
            // 计算属性的 getter
            reversedTxt: function () {
                console.log(this,'---------message--------');
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            sites: {
                // getter
                get: function () {
                    return this.names + ' ' + this.url
                },
                    // setter
                set: function (newValue) {
                    let names = newValue.split(' ')
                    this.names = names[0];
                    this.url = names[names.length - 1]
                }
            }
        }
    }
    // const app2 = new App2();
    // app2.sites = '菜鸟教程  http://www.runoob.com';
    // console.log(app2,app2.sites,'-----------App2----------');
    export default App2;
</script>
<style scoped>
    #app {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        text-align: center;
        font-size: 24px;
        color: blue;
    }
</style>