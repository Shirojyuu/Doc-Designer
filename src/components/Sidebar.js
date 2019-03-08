const _ = require('lodash');
const {Composer} = require('./Composer.js');

const Sidebar = {
    name: "Sidebar",
    components: {
        'composer': Composer
    },
    data () {
        return {
            showSections: false,
            displayedSections: [],
            currentContent: {},
            selectedId: '',
            allDocs: [
                {
                    uri: 0,
                    title: 'Dragon Adventurer',
                    abbrev: 'DA',
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
                    description: '2D Action RPG-Platformer',
                    author: 'Alec Day',
                    sections: [
                        {id: "QxxzA", content: {title: "Characters"}}
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
        displaySections (toDisplay) {
            this.displayedSections = toDisplay;
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
        }
    }, 

    template: `
    <div class="sidebar-container">
        <div class="control-column">
            <ul id="docList" class="doc-list">
                <li class="doc-bubble" v-for="d in allDocs" :key="d.uri" v-bind:doc="d" v-on:click="displaySections(d.sections)">
                    <span class="doc-bubble-abbrev">{{d.abbrev}}</span>
                </li>
                <div class="doc-bubble add">
                    <span class="doc-bubble-abbrev add">+</span>
                </div>
            </ul>
        </div>
        <div class="detail-column" v-bind:class="{'shown': showSections}">
            <ul id="sectionList" class="section-list">
                <li class="section-item" v-for="s in displayedSections" :key="s.id" 
                v-on:click="setSection(s)" v-bind:style="{'selected': isSectionSelected}">
                    <span class="detail-list-item">{{s.content.title}}</span>
                </li>
            </ul>
        </div>
        <composer v-bind:show="!(_.isEmpty(currentContent))" :key="selectedId" v-model="currentContent"></composer>
    </div>
    `
}

module.exports = {Sidebar};