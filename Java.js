(function(){
    var counter = 0,
        $items = document.querySelectorAll('.diy-slideshow figure'),
        numItems = $items.length;

    var showCurrent = function(){
        var itemToShow = Math.abs(counter % numItems);
        [].forEach.call( $items, function(el){
            el.classList.remove('show');
        });
        $items[itemToShow].classList.add('show');
    };

    document.querySelector('.next').addEventListener('click', function() {
        counter++;
        showCurrent();
    }, false);

    document.querySelector('.prev').addEventListener('click', function() {
        counter--;
        showCurrent();
    }, false);


})();


// Get a reference to the button and the nav ul element
const toggleNavButton = document.getElementById("toggleNavButton");
const navUl = document.querySelector("nav ul");

// Add a click event listener to the button
toggleNavButton.addEventListener("click", function() {
//   Toggle the display property of the nav ul element
  if (navUl.style.display === "none" || navUl.style.display === "") {
    navUl.style.display = "flex";
  } else {
    navUl.style.display = "none";
  }
});




