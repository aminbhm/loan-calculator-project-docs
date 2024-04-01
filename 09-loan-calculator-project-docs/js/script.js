const loanform = document.getElementById('loan-form');
const loanAmount = document.getElementById('loan-amount');
const loanInterest = document.getElementById('loan-interest');
const loanYears = document.getElementById('loan-years');
const button = document.querySelector('button');
const loanresults = document.getElementById('loan-results');
const monthlyresult = document.getElementById('monthly-result');
const paymentresult = document.getElementById('payment-result');
const interestresult = document.getElementById('interest-result');


function onLoanFormSubmit(e){
    e.preventDefault();

  if(loanAmount.value === ''||
    loanInterest.value === ''||
    loanYears.value === ''
    ) {
        alert('Please fill in all fields!');
        return;
    }
    
 // create results
 
 

 show();
 results();
 calaclactor();
}


function calaclactor(){

  const amount = parseFloat(loanAmount.value);
  const monthlyinterest = parseFloat(loanInterest.value)/100/12;
  const numberofpayments = parseFloat(loanYears.value)*12;

  const monthlypament = (amount*monthlyinterest/(1-Math.pow(1+ monthlyinterest,-numberofpayments)))
  const n = monthlypament.toFixed(2);
    

  const totalpayment = n*numberofpayments;
  const totalPay = totalpayment.toFixed(2);

  const toalInterest = (totalPay - amount);
  const NI = toalInterest.toFixed(2);

  // console.log(n , totalPay , NI);

  const span = document.createElement('span');
  span.appendChild(document.createTextNode(n));
  
  document.querySelector('#monthly-result').innerHTML = "$"+n;
  document.querySelector('#payment-result').innerHTML = "$"+totalPay;
  document.querySelector('#interest-result').innerHTML = "$"+NI;
  
}

function results(){
  
  loanresults.style.display = "none";     

};

let showspinner;

function show(){
  const showspinner = document.getElementById('spinner');
  showspinner.style.display = "block";
  setTimeout(()=>{
    showspinner.style.display = "none";
    loanresults.style.display = "block";     

    
  }, 1000);
  
}






loanform.addEventListener('submit', onLoanFormSubmit);
// calaclactor();
// results();


