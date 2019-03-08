import Vue from 'vue';
import './css/basis.css';
import './css/composer.css';
import { Sidebar } from './components/Sidebar.js';

Vue.use(Sidebar);
const vm = new Vue({
    el: '#root',
    components: {
        'sidebar': Sidebar
    },
    template: `
        <sidebar></sidebar>
    `
})