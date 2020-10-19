class ToDoList {
    notes;

    constructor(name) {
        this.name = name;
        this.initialize();
    }

    initialize() {
        const data = localStorage.getItem(this.name);
        this.notes = data ? JSON.parse(data) : [];
    }

    save() {
        const data = JSON.stringify(this.notes);
        localStorage.setItem(this.name, data)
    }

    addNote(name, status, value) {
        this.notes.push({
            id: this.notes.length + 1,
            name,
            status,
            value
        });
        this.save();
    }

    deleteNote(id) {
        this.notes = this.notes.filter((item) => item.id !== id);
        this.save();
    }

    editNote(id, name, value) {
        this.notes = this.notes.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name,
                    value,
                }
            }
        });
        this.save();
    }

    completeNote(id) {
        this.notes = this.notes.map((item) => ({
            ...item,
            status: item.id === id ? true : item.status,
        }));
        this.save();
    }

    numberOfTasks() {
        const arr = this.notes.filter(({ status: st }) => st === false);
        return `Выполненные: ${this.notes.length - arr.length}\nНевыполненные: ${arr.length}\nВсего: ${this.notes.length}`
    }
}



const list = new ToDoList('Vova');

