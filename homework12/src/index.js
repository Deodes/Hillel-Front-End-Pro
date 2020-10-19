class List {
    notes = [];
    constructor() {
    }

    addNote(name, status, value) {
        return this.notes.push({
            id: this.notes.length + 1,
            name: name,
            status: status,
            value: value,
        });
    }

    deleteNote(id, confirm = true) {
        if (confirm) {
            this.notes = this.notes.filter(item => item.id !== id)
        }
    }

}


class ToDoList extends List {
    constructor(...args) {
        super(...args)
    }

    mark(id, value) {
        this.notes = this.notes.map(item => {
            if (item.id === id) {
                item.isMarked = value;
            }
        });
    }

    completeNote(id) {
        this.notes = this.notes.map(item => ({
            ...item,
            status: item.id === id ? !item.completed : item.completed
        }))
    }

    numberOfTasks() { 
        const arr = this.notes.filter(({status: st}) => st === false);
        return `Выполненные: ${this.notes.length - arr.length}\nНевыполненные: ${arr.length}\nВсего: ${this.notes.length}`
    }
}

class ContactList extends List {
    constructor(...args) {
        super(...args)
    }

    findNote(value) {
        const result = this.notes.filter((item) => {
            for (let key in item) {
                if(item[key] === value) {
                    return item;
                }   
            }
        });

        return result;
    }
}

const todo = new ToDoList();
// todo.addNote('meeting', false, '50$');
// todo.addNote('school', false, 'food');
// todo.addNote('doctor', true, 'head');
// console.log(todo.numberOfTasks());
// console.log(todo);

