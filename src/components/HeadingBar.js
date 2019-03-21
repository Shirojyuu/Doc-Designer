const {EventBus} = require('./EventBus.js');

const HeadingBar = {
    name: "HeadingBar",
    data () {
        return {
            currentProjectTitle: 'DocDesigner',
            currentProjectDesc: 'Nothing opened'
        }
    },
    template: `
        <div>
            <div class="heading-bar">
                <transition name="slide-fade" mode="out-in">
                    <div :key="currentProjectTitle">
                    {{currentProjectTitle}}
                    </div>
                </transition>
                <span class="header-description">{{currentProjectDesc}}</span>
            </div>
        </div>
    `,
    mounted () {
        EventBus.$on('change-project', project => {
            this.currentProjectTitle = project.title
            this.currentProjectDesc = project.description
        })
    }
}

module.exports = {HeadingBar};