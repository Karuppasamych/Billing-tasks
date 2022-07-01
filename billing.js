

var clickselect = document.querySelector('.unitprice');

var setprice = document.querySelector('.price');
var price = 0;

document.querySelectorAll('.myButton').forEach(function(select){
    select.addEventListener('change', handleChange);

});


function handleChange(evt){
  evt.preventDefault();

  var selectvalues = evt.target.value
  var closest = evt.target.closest(".button").querySelector('.unitprice');
  var sip = evt.target.closest(".button").querySelector('.price');
  
  var mul = selectvalues * closest.innerText
  sip.innerText = mul

  price += mul

  var settotal = document.querySelector('.total-price').innerText = price;

  var getpercentage = settotal * 0.18   
  console.log(getpercentage)
  var setpercentage = document.querySelector('.tax-price');
  
  setpercentage.innerText  = getpercentage;

  var grandtotal = Number(setpercentage.innerText) + settotal

  document.querySelector('.grand-total').innerText = grandtotal
  
}
