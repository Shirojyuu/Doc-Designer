const {EventBus} = require('./EventBus.js');

const HeadingBar = {
    name: "HeadingBar",
    data () {
        return {
            currentProjectTitle: 'DocDesigner'
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
            </div>
        </div>
    `,
    mounted () {
        EventBus.$on('change-project', project => {
            this.currentProjectTitle = project.title
        })
    }
}

module.exports = {HeadingBar};