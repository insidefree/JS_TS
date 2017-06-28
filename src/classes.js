class Task {

    constructor(title) {
        this.title = title
        this._done = false
        Task._count += 1
    }

    complete() {
        this.done = true
        console.log('Task was completed')
    }

    get done() {
        return this._done
    }

    set done(state) {
        if (typeof state === 'boolean') {
            this._done = state
        } else {
            console.error('Insert correct data')
        }
    }

    static get count() {
        return Task._count
    }

    static set count(value) {
        Task._count = value
    }

    show() {
        console.log(this.title, this.done, this.prop)
    }
}
// static fields
Task.count = 0
// end static fields


let task = new Task('Learn JS')
task.show()
task.complete()
task.show()
console.log(Task.count)

let task2 = new Task('Learn Python')
task2.show()
console.log(Task.count)