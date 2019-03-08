const Quill = require('quill');
const Composer = {
    name: "Composer",
    props: {
        content: {
            type: Object,
            default: {}
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
    data: function () {
        return {
            editor: null
        }
    },

    methods: {
        loadEditor(sect) {
            console.log("EEE");
        }
    },
    mounted: function () {
        this.editor = new Quill(this.$refs.editor, {
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, false] }],
                    ['bold', 'italic', 'underline']
                ]
            },
            theme: 'snow',
            formats: ['bold', 'underline', 'header', 'italic']
        })
    },
    template: `
        <div class="composer-area">
            <div class="composer-inner" v-show="show">
                <input class="composer-title-input" type="text" v-model="content.title"></input>
                <div ref="editor" v-html="value"></div>
            </div>
        </div>
    `
}

module.exports = {Composer};