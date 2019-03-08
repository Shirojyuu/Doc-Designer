const Quill = require('quill');
const Composer = {
    name: "Composer",
    model: {
        prop: 'content',
        event: 'input'
    },
    props: {
        content: {
            type: Object,
            default: () => {return {title:"RRR", text: "DDDD"}}
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

    watch: {
        content(newContent, oldContent) {
            // this.editor.root.innerHTML = newContent.text;
        }
    },
    
    mounted() {
            this.editor = new Quill(this.$refs.editor, {
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, false] }],
                        ['bold', 'italic', 'underline']
                    ]
                },
                theme: 'snow',
                formats: ['bold', 'underline', 'header', 'italic']
            });
    
            if(this.show)
            {
                this.editor.root.innerHTML = this.content.text;
            }
            this.editor.on('text-change', () => {
                this.update();
            });
    },
    
    methods: {
        update() {
            let uText = this.editor.getText() ? this.editor.root.innerHTML : '';
            let updated = {title: this.content.title, text: uText};
            this.$emit('input', updated);
        }
    },
    
    template: `
        <div class="composer-area">
            <div class="composer-inner" v-show="show">
                <input class="composer-title-input" type="text" v-model="content.title"></input>
                <div ref="editor"></div>
            </div>
        </div>
    `
}

module.exports = {Composer};