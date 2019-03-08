import Vue from 'vue';
import './css/basis.css';
import './css/composer.css';
import './css/addModal.css';
import { Sidebar } from './components/Sidebar.js';
import { AddModal } from './components/AddModal.js';

Vue.use(Sidebar);
Vue.use(AddModal);

const vm = new Vue({
    el: '#root',
    data () {
        return {
            showModal: false
        }
    },
    components: {
        'sidebar': Sidebar,
        'add-modal': AddModal
    },
    //TODO: Add Section modal
    template: `
        <div>
            <sidebar></sidebar>
            <add-modal v-if="showModal"></add-modal>
        </div>
    `
})