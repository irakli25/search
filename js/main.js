
let search = document.getElementById("search");

let searchClass = new Search();

search.addEventListener("keyup", () => {  // on keyup 
    searchClass.setWord = search.value;
    searchClass.filterMessage();

});

