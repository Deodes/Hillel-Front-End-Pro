class List {
  items

  constructor() {
    this.init()
  }

  init() {
    const data = localStorage.getItem('items');
    this.items = data ? JSON.parse(data) : [];
  }

  save() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  add(note) {
    this.items.push({
      id: this.items.length + 1,
      value: note,
      status: false,
    })
    this.save();
  }

  remove(id) {
    this.items = this.items.filter(note => note.id != id);
    this.save();
  }

  edit(id, value) {
    const note = this.items.find(note => note.id == id);
    note.value = value;
    this.save();
  }

  changeStatus(id) {
    const note = this.items.find(note => note.id == id);
    note.status = !note.status;
    this.save();
  }
}

class ListUI extends List {
  constructor() {
    super();
    this.render();
  }

  render() {
    const container = document.querySelector('.container');
    const form = document.forms[0];
    const note = document.forms.form.elements.input;
    const ul = document.querySelector('.list');

    for (let i = 0; i < this.items.length; i++) {
      const li = document.createElement('li');
      const p = document.createElement('p');
      const deleteButton = document.createElement('button');
      const completeButton = document.createElement('button');

      p.textContent = this.items[i].value;
      deleteButton.textContent = 'X';
      completeButton.textContent = '✓';

      li.setAttribute('data-id', `${this.items[i].id}`);

      completeButton.classList.add('button--complete');
      deleteButton.classList.add('button--delete');
      li.classList.add('list__item');

      if(this.items[i].status) {
        p.classList.toggle('text--complete');
      }

      li.append(p);
      li.append(deleteButton);
      li.append(completeButton);
      ul.append(li);
    }


    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (note.value) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const deleteButton = document.createElement('button');
        const completeButton = document.createElement('button');

        p.textContent = note.value;
        deleteButton.textContent = 'X';
        completeButton.textContent = '✓';

        li.setAttribute('data-id', `${this.items.length + 1}`)

        completeButton.classList.add('button--complete');
        deleteButton.classList.add('button--delete');
        li.classList.add('list__item');

        li.append(p);
        li.append(deleteButton);
        li.append(completeButton);

        this.add(note.value);
        ul.append(li);
        form.reset();
      }
    });

    container.onclick = (e) => {
      const button = e.target;
      const li = button.closest('li');


      if (button.className === 'button--delete') {
        this.remove(li.dataset.id)
        li.remove();
        return;
      }

      if (button.className === 'button--complete') {
        const p = li.children[0];
        this.changeStatus(li.dataset.id);
        p.classList.toggle('text--complete');
        return;
      }

    }
  }
}


const list = new ListUI();

