function newItem(){

//I am adding new item to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}

  function crossOut() {
    li.classList.toggle("strike");
  }

  li.addEventListener("dblclick",crossOut);

  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);

  function deleteListItem(){
    li.classList.add("delete")
  }

  $('#list').sortable();

}