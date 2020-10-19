class ToDoList {
    notes;
    token;
    constructor(url) {
        this.baseUrl = url;
    }

    auth(login) {
        fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify({
                value: login,
            })
        })
            .then(response => response.json())
            .then(({ access_token }) => {
                this.token = access_token;
                this.getAllNotes();
            })
            .catch(({ message }) => console.log(message))
    }

    getAllNotes() {
        fetch(`${this.baseUrl}/todo`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                this.notes = data;
            })
            .catch(({ message }) => console.log(message))
    }

    addNote(value, priority) {
        fetch(`${this.baseUrl}/todo`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                value,
                priority,
            })
        })
            .then(response => response.json())
            .then(data => {
                this.notes.push(data);
            })
            .catch(({ message }) => console.log(message))
    }

    getNote(id) {
        fetch(`${this.baseUrl}/todo/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(({ message }) => console.log(message))
    }

    deleteNote(id) {
        fetch(`${this.baseUrl}/todo/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({ id })
        })
            .then(response => {
                if (response.status === 200) {
                    const index = this.notes.findIndex(({ _id }) => _id === id);

                    if (index !== -1) {
                        this.notes.splice(index, 1);
                    }
                }
            })
            .catch(({ message }) => console.log(message))
    }

    updateNote(id, { value, priority }) {
        fetch(`${this.baseUrl}/todo/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                value,
                priority
            }),
        })
            .then(response => response.json())
            .then(data => {
                this.notes.map(item => {
                    const index = this.notes.findIndex(({ _id }) => _id === id);

                    if (index !== -1) {
                        this.notes.splice(index, 1, data);
                    }
                })
            })
            .catch(({ message }) => console.log(message))
    }

    toggleNoteComplete(id) {
        fetch(`${this.baseUrl}/todo/${id}/toggle`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                const index = this.notes.findIndex(({ _id }) => _id === id);

                if (index !== -1) {
                    this.notes.splice(index, 1, data);
                }
            })
            .catch(({ message }) => console.log(message))
    }
}

const list = new ToDoList('https://todo.hillel.it')

list.auth('Penchev');

