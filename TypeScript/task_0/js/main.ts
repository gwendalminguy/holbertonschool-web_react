interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Toulouse",
}

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Paris",
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = table.createTHead();
const headerRow = header.insertRow(0);
const headerCellName = headerRow.insertCell(0);
const headerCellLocation = headerRow.insertCell(1);
headerCellName.innerHTML = 'Name';
headerCellLocation.innerHTML = 'Location';

let i: number = 1;

for (const element of studentsList) {
  const row = table.insertRow(i);

  const cellName = row.insertCell(0);
  const cellLocation = row.insertCell(1);

  cellName.innerHTML = element.firstName;
  cellLocation.innerHTML = element.location;

  i++;
}

document.body.appendChild(table);
