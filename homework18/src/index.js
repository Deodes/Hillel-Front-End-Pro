const form = document.forms.form;
const input = document.querySelector('input');
const ul = document.getElementById('list');
const hideButton = document.getElementById('hide');

ul.style.listStyle = 'none';


form.addEventListener('submit', e => {
    e.preventDefault();
    addNote(input.value);
})

hideButton.addEventListener('click', () => {
    const arr = document.getElementsByTagName('li');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].dataset.status === 'true') {
            arr[i].hidden = !(arr[i].hidden);
        }
        
    }
})

function addNote(value) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');

    li.style.cssText = "margin-bottom: 10px; font-size: 18px; font-weigth: bold";
    span.style.marginRight = "15px";

    deleteButton.textContent = 'Удалить';
    completeButton.textContent = 'Завершить';

    li.dataset.complete = false;

    deleteButton.addEventListener('click', () => {
        li.remove();
    })

    completeButton.addEventListener('click', () => {
        span.innerHTML = `<s>${value}</s>`
        li.dataset.status = 'true';
    })

    span.textContent = value;

    li.append(span);
    li.append(deleteButton);
    li.append(completeButton);
    ul.append(li);

    input.value = '';
}
