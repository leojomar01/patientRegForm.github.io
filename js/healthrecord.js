
let btnBack = document.querySelector('#btnBack');
btnBack.addEventListener('click', ()=>{
    location.href="patientinfo.html";

})
let healthRecord = []
healthRecord = localStorage.getItem('PatientHealthRecord') ? JSON.parse(localStorage.getItem('PatientHealthRecord')):alert("No Record Found") ;

var form= document.querySelector('#myForm');
for(var i=0;i<form.length;i++){
    form.elements[i].readOnly = true;
}
document.querySelector('#fullName').value = healthRecord.fullName;
document.querySelector('#age').value = healthRecord.age;
document.querySelector('#gender').value = healthRecord.gender;
document.querySelector('#birthDay').value = healthRecord.birthDay;
document.querySelector('#address').value = healthRecord.address;
document.querySelector('#mobileNumber').value = healthRecord.mobileNumber;
document.querySelector('#medHistory').value = healthRecord.medHistory;
document.querySelector('#symptoms').value = healthRecord.symptoms;
document.querySelector('#medicineList').value = healthRecord.medicineList;


   
       