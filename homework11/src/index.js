function toDoList() {
    this.notes = [];
}

Object.defineProperty(toDoList.prototype, 'addNote', {
    value: function (name, status, info) {
        return this.notes.push({
            id: this.notes.length + 1,
            name: name,
            status: status,
            info: info,
        })
    },


});

Object.defineProperty(toDoList.prototype, 'completeNote', {
    value: function (id) {
        this.notes = this.notes.map(item => ({
            ...item,
            status: item.id === id ? !item.completed : item.completed
        }))
    },



});

Object.defineProperty(toDoList.prototype, 'editNote', {
    value: function (id, info, confirm = true) {
        if (confirm) {
            this.notes = this.notes.map(item => {
                let extraNote = item;

                if (item.id === id) {
                    extraNote = {
                        ...item,
                        info,
                    }
                }
                return extraNote;
            })
        }
    },



});

Object.defineProperty(toDoList.prototype, 'deleteNote', {
    value: function (id, confirm = true) {
        if (confirm) {
            this.notes = this.notes.filter(item => item.id !== id)
        }
    },



});


// const list1 = new toDoList();


// list1.addNote('Vova', false, "msg");
// list1.addNote('Maria', false, "msg");
// console.log(list1.notes);

// list1.deleteNote(1);


// list1.editNote(2, "No more msg")
// console.log(list1.notes);

// list1.completeNote(2);
// console.log(list1.notes);

