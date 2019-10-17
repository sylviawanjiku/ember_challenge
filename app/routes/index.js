import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      this.store.createRecord('task', {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 2,
        name: 'A task',
        description: 'This is a task.',
        isComplete: true,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 3,
        name: 'Clean the kitchen',
        description: 'It\'s filthy!',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 4,
        name: 'Clean the bedroom',
        description: 'It\'s filthy!',
        isComplete: false,
        isPinned: false,
        creator: 2
      })
    ];
  }
}
