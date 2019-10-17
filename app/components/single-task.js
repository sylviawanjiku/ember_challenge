import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import { action } from '@ember/object'


export default 
@tagName('')
class SingleTaskComponent extends Component {
    
    @action
    pinTask() {
        let task = this.task;
        task.set('isPinned', false);

    }

    @action
    unPinTask() {
        let task = this.task;
        task.set('isPinned', true);
       
    }

    @action
    inCompleteTask() {
        let task = this.task;
        task.set('isComplete', false);

    }

    @action
    completeTask() {
        let task = this.task;
        task.set('isComplete', true);
    }
}
