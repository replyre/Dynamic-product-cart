const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];
let Products_display = "Products";
Products.forEach((e) => {
  Products_display += `<div>${e.name} <span>${e.price}</span> <span> <span class="dec" id=${e.id}>&#8211;</span> <span id="count-${e.id}">0</span> <span class="inc" id=${e.id}>+</span></span></div>`;
});
document.querySelector(".left").innerHTML = Products_display;
let cart_map = {};
let carts_display = "Cards";
document.querySelectorAll(".inc").forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (e.target.id in cart_map) {
      cart_map[e.target.id]++;
    } else cart_map[e.target.id] = 1;
    document.getElementById(`count-${e.target.id}`).innerHTML =
      cart_map[e.target.id];
    display_cart();
  });
});
document.querySelectorAll(".dec").forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (cart_map[e.target.id] > 1 && cart_map[e.target.id] !== undefined) {
      cart_map[e.target.id]--;
    } else delete cart_map[e.target.id];
    // console.log(e.target.id);
    document.getElementById(`count-${e.target.id}`).innerHTML =
      cart_map[e.target.id] || 0;
    display_cart();
  });
});
document.querySelector(".right").innerHTML =
  "<div>Cart</div> <span class='total'>Total:<span>0<span></span>";
function display_cart() {
  let cart_display = "<div>Cart";
  let total = 0;
  for (a in cart_map) {
    // console.log(a);
    const temp_prod = Products.filter((e) => {
      return a == e.id;
    });
    // console.log(temp_prod);
    temp_prod.forEach((e) => {
      cart_display += `<div>${e.name} <span>${cart_map[e.id]} &#215;${
        e.price
      } </span></div>`;
      total += cart_map[e.id] * e.price;
    });
  }
  //   console.log(total);
  document.querySelector(".right").innerHTML =
    cart_display +
    "</div>" +
    `<span class="total">Total:<span>${total}<span></span>`;
}
