let customerList: any[];

function fetchCustomerList(): void{

    const table = document.querySelector('table');

    fetch('/db')
        .then((response) => response.json())
        .then((data) => {
            customerList = data;
            console.log(data);

            for (let i = 0; i < customerList.length; i++) {
                if (table) {

                    let newRows = 
                    `<tr>
                        <td>${customerList[i].customerNumber}</td>
                        <td>${customerList[i].customerName}</td>
                        <td>${customerList[i].contactLastName}</td>
                        <td>${customerList[i].contactFirstName}</td>
                        <td>${customerList[i].phone}</td>
                        <td>${customerList[i].addressLine1}</td>
                        <td>${customerList[i].addressLine2}</td>
                        <td>${customerList[i].city}</td>
                        <td>${customerList[i].state}</td>
                        <td>${customerList[i].postalCode}</td>
                        <td>${customerList[i].country}</td>
                        <td>${customerList[i].salesRepEmployeeNumber}</td>
                        <td>${customerList[i].creditLimit}</td>
                    </tr>`;
                    
                    table.insertRow().innerHTML = newRows;
                }
            }
        })
        .catch(err => console.log(err));   
}

fetchCustomerList();