var minIngredients = 2;
var burgerBasePrice = 30;
var discount = 0.2;
var coupon = [
  'ed4857ghu8',
  'fr52420hf7',
  'se39057j4f'
]

var burgerName = document.getElementById('burger-name');
var listaContainer = document.getElementsByClassName('chose-element')[0];
var listaIngredienti = listaContainer.getElementsByTagName('input');

var priceElement = document.getElementById('price');
var couponElement = document.getElementById('coupon');

var counterValidIngredients = 0;
var price;

document.getElementById("checkout").addEventListener("click", function() {

  counterValidIngredients = 0;
  price = burgerBasePrice;

for(i = 0; i < listaIngredienti.length; i++) {

  if(listaIngredienti[i].checked) {
    counterValidIngredients++;

    price += parseInt(listaIngredienti[i].value);
  }
}

if(counterValidIngredients < minIngredients) {
  alert('seleziona due ingredienti');
} else if(burgerName.value.length === 0) {
  alert('Dai un nome al tuo Hamburger');

}else {
  if(coupon.indexOf(couponElement.value) !== -1){
  price = price - ( price*discount)
}

  priceElement.innerText = '$' + price;
}

})
