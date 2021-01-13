/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var hearts = document.querySelectorAll("button.wish");


for (i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", addToFavorites);
}

function addToFavorites(event) {
  var clickedHeart = event.target;

  if (clickedHeart.innerHTML == "🧡") {
    clickedHeart.innerHTML = "✅";
    clickedHeart.setAttribute("aria-label", "Remove from Favorites");
    updateWishlist("plus");
  }

  else {
    clickedHeart.innerHTML = "🧡";
    clickedHeart.setAttribute("aria-label", "Add to Favorites");
    updateWishlist("min");
  }
}

function updateWishlist(action) {
  let wishlist = document.querySelector(".wishlist");
  let wishlistAmount = wishlist.querySelector("span");

  let currentAmount = wishlistAmount.innerHTML;
  currentAmount = parseInt(currentAmount);

  let newAmount;

  if (action == "plus") {
    newAmount = currentAmount + 1;

    if (newAmount == 1) {
      wishlistAmount.classList.add("positive");
    }
  }

  else {
    newAmount = currentAmount - 1;

    if (newAmount == 0) {
      wishlistAmount.classList.remove("positive");
    }
  }

  wishlistAmount.innerHTML = newAmount;

  wishlist.classList.add("updated");

  wishlist.addEventListener("animationend", function(event){
    wishlist.classList.remove("updated");
  }, { once: true });

}
