function insert_Row(){
    const table = document.getElementById('sampleTable');
    const row = table.insertRow(table.rows.length);

    const cell1=row.insertCell(0);
    const cell2=row.insertCell(1);

    cell1.innerHTML = 'New Row cell 1';
    cell2.innerHTML = 'New Row cell 2';
}