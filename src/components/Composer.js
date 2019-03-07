const Composer = {
    name: "Composer",
    props: ['content', 'show'],
    template: `
        <div class="composer-area">
            <div class="composer-inner" v-if="show">
                <input class="composer-title-input" type="text" v-model="content.title"></input>
                <textarea class="composer-textarea" v-model="content.text"></textarea>
            </div>
        </div>
    `
}