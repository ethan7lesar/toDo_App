let items =[]

function addItem(){
    
    let itemInfo={
        id: "",
        name: document.getElementById("listItem").value,
        createDate: "",
        completed: ""
    }


    items.push(itemInfo)

  let list = document.querySelector("#toDolist");
  list.innerHTML = "";
  items.forEach((data) => {
    list.innerHTML +=
    `<input type="checkbox" name="" id="done">
    <p>${data.name}</p>
    <button>❌</button>`
  });



}

function sort(){
 items.sort()


}

function deleteItem(){
    
};





