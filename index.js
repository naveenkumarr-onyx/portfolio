function search() {
    var input = document.getElementById("search-input").value.toLowerCase();
    console.log(input)
    
    // Get the search input value and convert it to lowercase for case-insensitive search
    var items = document.getElementsByClassName("searchable-item"); // Get all the elements with the "searchable-item" class
  
    for (var i = 0; i < items.length; i++) {
      var itemText = items[i].innerText.toLowerCase(); // Get the text content of the current item and convert it to lowercase
  
      if (itemText.includes(input)) {
        items[i].style.display = ""; // Show the item if the search input is found in its text
      } else {
        items[i].style.display = "none"; // Hide the item if the search input is not found
      }
    }
  }