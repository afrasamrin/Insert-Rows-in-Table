const buttonTop = document.getElementById("addTop");
const buttonBottom = document.getElementById("addBottom");
const tbodyEl = document.querySelector("table");



buttonBottom.addEventListener('click', (e) => {
    e.preventDefault();

    let fnameEl = document.querySelector('#fname').value;
let lnameEl = document.querySelector('#lname').value;
let cityEl = document.querySelector('#city').value;
let countryEl = document.querySelector('#country').value;

    if(document.querySelector('input').value  == "" ){
        alert("Enter Data");
    }else{
  
    let rowCount =  tbodyEl.rows.length;
    let slNo = rowCount++;
tbodyEl.innerHTML += `
 <tr>
 <td>${slNo}</td>
 <td>${fnameEl}</td>
 <td>${lnameEl}</td>
 <td>${cityEl}</td>
 <td>${countryEl}</td>
</tr>
`; 
document.querySelector('#fname').value = "";
document.querySelector('#lname').value = "";
document.querySelector('#city').value = "";
document.querySelector('#country').value = "";

    }   
});
buttonTop.addEventListener('click', (e) => {
    
    e.preventDefault();
    if(document.querySelector('input').value == "" ){
        alert("Enter Data");
    }else{
    let row = tbodyEl.insertRow(1);
  
    row.insertCell(0).innerHTML = 1;
    row.insertCell(1).innerHTML = document.querySelector('#fname').value;
    row.insertCell(2).innerHTML = document.querySelector('#lname').value;
    row.insertCell(3).innerHTML = document.querySelector('#city').value;
    row.insertCell(4).innerHTML = document.querySelector('#country').value;
    
    let rowCount =  tbodyEl.rows.length;
    for(let i = 1;i<rowCount;i++){
        tbodyEl.rows[i].cells[0].innerHTML =  i; 
    }
}

document.querySelector('#fname').value = "";
document.querySelector('#lname').value = "";
document.querySelector('#city').value = "";
document.querySelector('#country').value = "";


});




