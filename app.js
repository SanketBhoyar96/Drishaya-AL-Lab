// selecting elements
let sum = document.getElementById("sum");
let td = document.querySelectorAll("td")
let tbody = document.querySelector("tbody");
let addBtn = document.querySelector(".add");
let dltBtn = document.querySelector(".dlt");


// Calculating sum
function totalOfRowCol (item) {
    let total = 0;
    for(let i=0; i<item.length; i++) {
        total += parseInt(item[i].innerText);
    }
   sum.innerText ="Sum:  " + total;
}
totalOfRowCol(td)


// generating random numbers
function randomNum() {
    let num = Math.ceil(Math.random()*100)
    return num;
}


// adding a row
addBtn.onclick = ()=> {
   let tr = document.createElement("tr")
   tr.innerHTML +=`<td>${randomNum()}</td>
   <td>${randomNum()}</td>
   <td>${randomNum()}</td>`;
   tbody.append(tr);
   let td = document.querySelectorAll("td");
   totalOfRowCol(td);
}


// deleting a row;
dltBtn.onclick = ()=> {
    let table = document.querySelector("table");

    let rowLength = table.rows.length;
    table.deleteRow(rowLength-1);
    let td = document.querySelectorAll("td");
    totalOfRowCol(td);
}

