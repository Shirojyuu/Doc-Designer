const _ = require('lodash');

const AddModal = {
    name: "AddModal",
    data () {
        return {
            showModal: false
        }
    },
    template: `
        <div class="add-modal-popup">
        <div class="modal-header">Add New...</div>
            <div class="modal-content">

            </div>
        </div>
    `
}

module.exports = {AddModal};