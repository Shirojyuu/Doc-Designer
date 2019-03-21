const { EventBus } = require('./EventBus.js');
const { quillEditor } = require('vue-quill-editor');

const Composer = {
    name: "Composer",
    components: {
        quillEditor
    },
    model: {
        prop: 'content',
        event: 'content-updated'
    },
    props: {
        content: {
            type: Object,
           
        },
        show: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            editor: null
        }
    },
    
    template: `
        <div class="composer-area">
            <div v-if="!show" class="default-project-msg">
            Welcome!<br>To get started, open a project on the sidebar,<br>and select a section to edit.
            </div>
            <div class="composer-inner" v-show="show">
                <input class="composer-title-input" type="text" v-model="content.title"></input>
                <quill-editor v-model="content.text" ref="quillComposer"></quill-editor>
            </div>
        </div>
    `
}

module.exports = {Composer};