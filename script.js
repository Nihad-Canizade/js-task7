let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let age = document.getElementById('age');
let btn = document.getElementById('btn');
let tablemain = document.getElementById('tablemain');
let btn2 = document.getElementById('btn2');

btn.addEventListener('click', () => {
    let fnvalue = firstname.value.trim();
    let lnvalue = lastname.value.trim();
    let agevalue = age.value.trim();

    let newtr = document.createElement("tr");
    let newtd1 = document.createElement("td");
    newtd1.innerHTML = firstname.value;
    let newtd2 = document.createElement("td");
    newtd2.innerHTML = lastname.value;
    let newtd3 = document.createElement("td");
    newtd3.innerHTML = age.value;

    tablemain.append(newtr);
    newtr.append(newtd1, newtd2, newtd3);

    if (fnvalue == "") {
        newtd1.innerHTML = "Not assigned";
    } if (lnvalue == "") {
        newtd2.innerHTML = "Not assigned";
    } if (agevalue == "") {
        newtd3.innerHTML = "Not assigned";
    }

    firstname.value = "";
    lastname.value = "";
    age.value = "";
    
});

