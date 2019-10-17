import Controller from '@ember/controller';
import { computed } from '@ember/object';



export default Controller.extend({

    completedTasks: computed('tasks.[].isComplete', function () {
        let tasks = this.model;
        return tasks.filterBy('isComplete', true).length;
    }),
    pinnedTask: computed('tasks.[].isPinned', function () {
        let tasks = this.model;
        let taskPinned = tasks.filterBy('isPinned', true);
        return taskPinned;
    }),
    unPinnedTask: computed('tasks.[].isPinned', function () {
        let tasks = this.model;
        let taskUnpinned = tasks.filterBy('isPinned', false);
        return taskUnpinned;
    })

}) 