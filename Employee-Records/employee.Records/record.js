// fill in javascript code here

let arr = JSON.parse(localStorage.getItem("empList")) || [];
displayTable(arr);

document.querySelector("form").addEventListener("submit", imployeForm);
function imployeForm(event) {
    event.preventDefault();
    let Ename = document.querySelector("#name").value;
    let Eid = document.querySelector("#employeeID").value;
    let Edepart = document.querySelector("#department").value;
    let Eexp = document.querySelector("#exp").value;
    let Eemail = document.querySelector("#email").value;
    let Embl = document.querySelector("#mbl").value;


    let obj = {
        Ename,
        Eid,
        Edepart,
        Eexp,
        Eemail,
        Embl
    }
    // console.log(Ename, Eid, Edepart, Eexp, Eemail, Embl);
    arr.push(obj);
    // console.log(arr)
    localStorage.setItem("empList", JSON.stringify(arr))
    displayTable(arr)
}
function displayTable(arr) {
    document.querySelector("tbody").innerHTML = ""
    arr.forEach((element, index) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.Ename;

        let td2 = document.createElement("td");
        td2.innerText = element.Eid;

        let td3 = document.createElement("td");
        td3.innerText = element.Edepart;

        let td4 = document.createElement("td");
        td4.innerText = element.Eexp;

        let td5 = document.createElement("td");
        td5.innerText = element.Eemail;

        let td6 = document.createElement("td");
        td6.innerText = element.Embl;

        let td7 = document.createElement("td");

        if (element.Eexp > 5) {
            td7.innerText = "Senior";
        }
        else if (element.Eexp <= 5 && element.Eexp >= 2) {
            td7.innerText = "Junior";
        }
        else {
            td7.innerText = "Fresher";
        }

        let td8 = document.createElement("td")
        td8.innerText = "delete";
        td8.style.backgroundColor = "darkred"
        td8.style.color = "white"

        td8.addEventListener("click", function () {
            arr.splice(index, 1)
            localStorage.setItem("arr", JSON.stringify(arr));
            displayTable(arr)
        })

        row.append(td1, td2, td3, td4, td5, td6, td7, td8)
        document.querySelector("tbody").append(row)
    });
}


