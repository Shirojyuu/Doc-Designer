const _ = require('lodash');
const {Composer} = require('./Composer.js');
const {EventBus} = require('./EventBus.js');

//TODO: Adding a section to a project.
const Sidebar = {
    name: "Sidebar",
    components: {
        'composer': Composer
    },
    data () {
        return {
            eventBus: EventBus,
            nextUri: 2,
            isAddingNewSection: false,
            nextSectionName: '',
            showSections: false,
            displayedProject: {},
            displayedSections: [],
            currentContent: {},
            selectedId: '',
            allDocs: [
                {
                    uri: 0,
                    title: 'A Tale of Blades',
                    abbrev: 'TB',
                    description: '2D Action RPG-Platformer',
                    author: 'Alec Day',
                    sections: [
                        {id: "AzsCb", content: {title: "Premise", text: ""}},
                        {id: "SW32z", content: {title: "Characters", text: ""}}
                    ]
                },
                {
                    uri: 1,
                    title: 'Secret Delivery',
                    abbrev: 'SD',
                    description: '2D Stealth Platformer',
                    author: 'Alec Day',
                    sections: [
                        {id: "QxxzA", content: {title: "Characters", text: ""}}
                    ]
                },
            ]
        }
    },

    computed: {
        sectionNames () {
            return this.displayedSections.map(s=>s.name);
        },

        isSectionSelected: function() {
            return this.selectedId === this.currentContent.id;
        }
    },
    methods: {
        displaySections (project) {
            this.displayedProject = project;
            this.displayedSections = project.sections;
            this.showSections = true;
        },
        
        setSection (section) {
            this.currentContent = section.content;
            this.selectedId = section.id;
            console.log("Title: " + this.currentContent.title, "Text: " + this.currentContent.text)
        },
        genId () {
            var text = "";
            var set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for(let i = 0; i < 5; i++) text += set.charAt(Math.floor(Math.random() * set.length));
            return text;
        },
        addNewDocument () {
            EventBus.$emit('add-click');
        },

        addProject (project) {
            project.uri = this.nextUri++;
            console.log(project);
            this.allDocs.push(project);
        },
        prepareNewSection () {
            console.log('preparing')
            this.isAddingNewSection = true;
            this.$refs.newSec.focus();
        },
        addNewSection () {
            this.isAddingNewSection = false;
            this.displayedProject.sections.push({
                id: this.genId(),
                content: {title: this.nextSectionName, text: ""}
            });
            this.nextSectionName = '';
        }
    }, 
    mounted () {
        //EventBus catches IPC and processes it.
        EventBus.$on('add-project', (projectData) => {
            this.addProject(projectData);
        })
    },
    template: `
    <div class="sidebar-container">
        <div class="control-column">
            <ul id="docList" class="doc-list">
                <li class="doc-bubble" v-for="d in allDocs" :key="d.uri" v-bind:doc="d" v-on:click="displaySections(d)">
                    <span class="doc-bubble-abbrev">{{d.abbrev}}</span>
                </li>
                <div class="doc-bubble add" @click="addNewDocument()">
                    <span class="doc-bubble-abbrev add">+</span>
                </div>
            </ul>
        </div>
        <div class="detail-column" v-bind:class="{'shown': showSections}">
            <ul id="sectionList" class="section-list">
                <button class="sect-button" @click="prepareNewSection">New Section</button>
                <li class="section-item" v-for="s in displayedSections" :key="s.id" 
                v-on:click="setSection(s)" v-bind:style="{'selected': isSectionSelected}">
                    <span class="detail-list-item">{{s.content.title}}</span>
                </li>
                <div id="newSection" class="section-item" v-show="isAddingNewSection">
                    <input ref="newSec" id="newSectionInput" class="userInput" type="text" v-model="nextSectionName" v-on:keyup.enter="addNewSection">
                </div>
            </ul>
        </div>
        <composer v-bind:show="!(_.isEmpty(currentContent))" :key="selectedId" v-model="currentContent"></composer>
    </div>
    `
}


module.exports = {Sidebar};