let btnSubmit = document.querySelector('#btnSubmit');
let btnReset = document.querySelector('#btnReset');
let radiosMed = document.querySelectorAll('#medicine');
let btnLogout = document.querySelector('#btnLogout');
let btnShow = document.querySelector('#btnShow');

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let birthDay = document.querySelector('#birthDay');

let patientHealthrecord={
    fullName:"",
    age:0,
    gender:"",
    birthDay:"",
    address:"",
    mobileNumber:"",
    medHistory:"",
    symptoms:"",
    medicineList:"" 
}


function saveRecord(){
    localStorage.setItem('PatientHealthRecord',JSON.stringify(patientHealthrecord));
}
btnLogout.addEventListener('click',()=>{
    location.href="index.html";
})
btnShow.addEventListener('click',()=>{
    location.href="healthrecord.html";

})

btnSubmit.addEventListener('click',()=>{
    let confirmAction = confirm('Are you sure you want to save this record?');
    if(confirmAction){
        if(firstName.value==""){alert("Please Enter First Name"); return;}
        if(lastName.value==""){alert("Please Enter Last Name"); return;}
        if(!checkGender()){alert("Please Select Gender"); return;}
        if(birthDay.value==""){alert("Please Enter Birthday"); return;}
        getRecord();
        alert('Health Record Saved!')
    }
    return; 
    
})
btnReset.addEventListener('click',()=>{
    document.querySelector("#myForm").reset();  
})

function checkGender(){
    var gender = document.querySelectorAll('#gender');
    for (var i = 0, len = gender.length; i < len; i++) {
         if (gender[i].checked) {
             return true;
         }
    }

    return false;
}




function showRecord(){
    let message = confirm('Show Record')
    console.log(patientHealthrecord)
}
// enable/disable medicinelist
    radiosMed[0].addEventListener('change', ()=>{
        document.querySelector('#medicineList').disabled = false;
        return;
    })
    radiosMed[1].addEventListener('change', ()=>{
        document.querySelector('#medicineList').disabled = true;
        document.querySelector('#medicineList').value = "";
        return;
    })



function getRecord(){
    getName();
    getInfo();
    getHistory();
    getSymptoms();
    getMedicine();
    saveRecord();
}
function getMedicine(){
    let medicineList = document.querySelector('#medicineList');
    if(medicineList.value==""){
        patientHealthrecord.medicineList="none"
        return;
    }
    patientHealthrecord.medicineList=medicineList.value;
}

function getSymptoms(){
    let symptoms = document.querySelector('#symptoms')
    let selectedSymptoms = [...symptoms.options]
                .filter(option=>option.selected)
                .map(option=>option.value);
    patientHealthrecord.symptoms=selectedSymptoms;
}

function getHistory(){
    let checkedHistory=[];
    let medHistory = document.querySelectorAll(`input[name="medHistory"]:checked`)
    for(let y in medHistory){
        if(medHistory[y].checked){
            checkedHistory.push(medHistory[y].value);
        }
    }
    patientHealthrecord.medHistory=checkedHistory;
}

// get fullname
function getName(){
    let firstName = document.querySelector('#firstName');
    let middleName = document.querySelector('#middleName');
    let lastName = document.querySelector('#lastName');
    firstName = capitalize(firstName.value);
    lastName = capitalize(lastName.value);
    (middleName.value!="") ? middleName = capitalize(middleName.value):middleName="";
    let fullName =`${lastName}, ${firstName} ${middleName}`;
    patientHealthrecord.fullName=fullName;
}
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}
function getInfo(){
    let birthDay = document.querySelector('#birthDay');
    let address = document.querySelector('#address');
    let mobileNumber = document.querySelector('#mobileNumber');
    getAge(birthDay.value);
    getGender();
    patientHealthrecord.birthDay=birthDay.value;
    patientHealthrecord.address=address.value;
    patientHealthrecord.mobileNumber=mobileNumber.value;
}
function getGender(){
    let gender = document.querySelectorAll("#gender");
    let selectedGender;
    for(let x in gender){
        if(gender[x].checked){
            selectedGender=gender[x].value;
        } 
    }
    patientHealthrecord.gender=selectedGender;
}

function getAge(birthDay){
    let dateOfBirth = new Date(birthDay);
    let dateNow = new Date();
    let age = dateNow.getFullYear() - dateOfBirth.getFullYear();
    if(dateNow.getMonth()<dateOfBirth.getMonth()){
        age--
    }
    patientHealthrecord.age=age;
}