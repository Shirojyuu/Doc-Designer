import Vue from 'vue';
import './css/basis.css';
import './css/composer.css';
import './css/addModal.css';
import { Sidebar } from './components/Sidebar.js';
import { AddModal } from './components/AddModal.js';
import { EventBus } from './components/EventBus.js';

Vue.use(Sidebar);
Vue.use(AddModal);
//Event Bus receives IPC events.
EventBus.$on('add-click', () => {
    vm.showModal = true;
})

EventBus.$on('cancel-add-project', () => {
    vm.showModal = false;
})

EventBus.$on('add-project', () => {
    vm.showModal = false;
})


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

    template: `
        <div>
            <sidebar></sidebar>
            <transition name="fadeswipe">
                <add-modal v-if="showModal"></add-modal>
            </transition>
        </div>
    `
})