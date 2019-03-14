const _ = require('lodash');
const {EventBus} = require('./EventBus.js');


const AddModal = {
    name: "AddModal",
    data () {
        return {
            projectTitle: '',
            projectAuthor: '',
            projectAbbrev: '',
            projectDesc: '',
        }
    },
    methods: {
        cancelAdd () {
            this.projectTitle = '';
            this.projectAuthor = '';
            this.projectAbbrev = '';
            this.projectDesc = '';
            EventBus.$emit('cancel-add-project');
        },

        //Make a new empty project with the paramaters entered
        addProject () {
            let projectData = {
                uri: -1,
                title: this.projectTitle,
                author: this.projectAuthor,
                abbrev: this.projectAbbrev,
                description: this.projectDesc,
                sections: []
            }

            EventBus.$emit('add-project', projectData);
        }

    },
    template: `
        <div class="add-modal-popup">
        <div class="modal-header">Add New Project</div>
            <div class="modal-content">
                <div><label class="field">Title:</label> <input class="userInput" v-model="projectTitle"></div>
                <div><label class="field">Author:</label> <input class="userInput" v-model="projectAuthor"></div>
                <div><label class="field">Abbreviation:</label> <input class="userInput" style="text-transform:uppercase" maxlength=2 v-model="projectAbbrev"></div>
                <div><label class="field">Description:</label> <textarea class="userDesc" rows=3 v-model="projectDesc"></textarea></div>
                <button class="modal-button" @click="cancelAdd">Cancel</button>
                <button class="modal-button" @click="addProject">Add</button>
            </div>
        </div>
    `
}

module.exports = {AddModal};