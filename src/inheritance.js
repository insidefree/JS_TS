class Task {
    constructor(title) {
        this._title = title
        this.done = false
        Task.count += 1
        console.log('Task creating')
    }

    complete() {
        this.done = true
        console.log(`Task "${this.title}" was completed`)
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    static getDefaultTitle() {
        return 'Task'
    }
}

Task.count = 0


class SubTask extends Task {
    constructor(title, parent) {
        super(title)
        this.parent = parent
        console.log('Subtask creating')
    }

    complete() {
        super.complete()
        console.log(`Subtask "${this.title}" was completed`)
    }
}


let task = new Task('Learn JS')
let subtask = new SubTask('Learn ES6', task)

console.log(SubTask.getDefaultTitle())
console.log(SubTask.count)

task.complete()
subtask.complete()

console.log(task)
console.log(subtask)
console.log(subtask instanceof Task)
console.log(subtask instanceof SubTask)

