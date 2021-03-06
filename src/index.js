import Vue from 'vue';
import './css/basis.css';
import './css/composer.css';
import './css/addModal.css';
import { Sidebar } from './components/Sidebar.js';
import { AddModal } from './components/AddModal.js';
import { HeadingBar } from './components/HeadingBar.js';
import { EventBus } from './components/EventBus.js';

Vue.use(Sidebar);
Vue.use(AddModal);
Vue.use(HeadingBar);
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
            showModal: false,
        }
    },
    components: {
        'sidebar': Sidebar,
        'add-modal': AddModal,
        'heading-bar': HeadingBar
    },

    template: `
        <div>
            <heading-bar></heading-bar>
            <div class ="main-content">
                <sidebar></sidebar>
                <transition name="fadeswipe">
                    <add-modal v-if="showModal"></add-modal>
                </transition>
            </div>
        </div>
    `
})