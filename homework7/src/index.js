
const toDoList = {
    tasks: [],

    get taskGet() {
        return toDoList.tasks;
    },

    checkTask(context) { //проверка уникальности задачи по контенту
        let unique = true;
        toDoList.tasks.forEach(function(item) {
            if(item.text === context) {
                unique = false;
            }

        });
        return unique;
    },

    addTask(value) { //установщик задач
        [time, isDone, name, text] = value.split(" ");
        const id = toDoList.tasks.length + 1;
        if(toDoList.checkTask(text)) {
            toDoList.tasks.push({ id, time, isDone, name, text });
        } else {
            console.log("Задача с похожим текстом уже существует: " + text);
        }
    },

    deleteTask(id, bool) { //позволяет удалить задачу
        if (bool) {
            toDoList.tasks.splice(id - 1, 1);
        }
    },

    modify(number, value, bool) { //позволяет редактировать задачу
        [time, isDone, name, text] = value.split(" ");
        const index = toDoList.tasks.findIndex(function (item) {
            return item.id == number;
        });
        if (bool) {
            toDoList.tasks[index] = {
                id: number,
                time,
                isDone,
                name,
                text
            };
        }
    },

    numberOfTasks() { //Выводит кол-во задач и их статусы
        const arr = toDoList.tasks.filter(function (item) {
            return toDoList.tasks.isDone === 'false';
        });
        return ("Кол-во задач : " + toDoList.tasks.length + "\nВыполнили : " + (toDoList.tasks.length - arr.length) + "\nОсталось : " + arr.length)
    },

    
}

function edit() { 
    const confirmation = confirm("Вы точно хотите изменить задачу?");
    return confirmation;
};

function remove() {
    const confirmation = confirm("Вы точно хотите удалить задачу?");
    return confirmation;
};

Object.freeze(toDoList);



// toDoList.addTask("11:03:24 false visitDoctor 50$");
// toDoList.addTask("12:00:00 false TVshow watch");
// toDoList.addTask("11:03:24 false visitDoctor 50$");
// console.log(toDoList.tasks);  
// toDoList.deleteTask(2, remove());
// toDoList.modify(1, "18:00:00 false visitDoctor 150$", edit());
// toDoList.numberOfTasks;
// console.log(toDoList.taskGet);

