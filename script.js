const inputBox = document.getElementById("name");
const list = document.getElementById("list");

function addTodo(){
    if(inputBox.value === '')
        alert("Empty value.")

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        // alert("new todo added"+ list[0].value)

    }
}

function removeTodo(){
    list.remove()
}