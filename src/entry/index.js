// const root = document.getElementById('root');
// console.log(root);
// root.textContent = 'Welcome vue world';


import  Vue from 'vue'
import App from '../app/App'

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
})