function generateList(arr) {
    const $ul = document.createElement('ul');
    $ul.style.listStyle = 'none';

    for (let i = 0; i < arr.length; i++) {

        let $li = document.createElement('li');

        $li.textContent = arr[i];
        if (Array.isArray(arr[i])) {
            $li.textContent = '';
            $li.append(generateList(arr[i]));
        }

        $ul.append($li);
    }
    document.body.append($ul);
    return $ul;
}

function generateTable() {
    const $table = document.createElement('table');
    $table.style.borderCollapse = 'collapse';
    for (let i = 0; i < 10; i++) {
        let $tr = document.createElement('tr');
        $table.append($tr);
        for (let j = 1; j <= 10; j++) {
            let $td = document.createElement('td');
            $td.style.padding = '10px';
            $td.style.border = '1px solid black';
            $td.style.textAlign = 'center';
            $td.textContent = i * 10 + j;
            $tr.append($td);
        }
    }
    document.body.append($table);
}

generateList([1, [1.1, 1.2, 1.3], 2, 3]);
generateTable();