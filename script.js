var cartItems = [];
var isTotalHidden = true;

var iPhone11Pro = {
 name: "Iphone 11 Pro",
 price: 1000
}

var iPhone11 = {
 name: "iPone11",
 price: 600
}

function addToCart(item) {
 cartItems.push(item);
 document.getElementById("itemCounter").innerHTML =
  cartItems.length;
 showTotal();
}

function clickCart() {
 isTotalHidden = !isTotalHidden;
 showTotal();
}

function showTotal() {
 var orderTotal = document.getElementById("orderTotal");
 orderTotal.innerHTML = "";
 
 if (isTotalHidden === false) {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
   total += cartItems[i].price;
  }
  orderTotal.innerHTML += "Total: $" + total;
 }
}
