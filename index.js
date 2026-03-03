let index=1;

function addTodo(){

   const element=document.getElementById("todoInput")
   const todo=element.value;

   if(element.value=="")return;

   const todoDiv=document.createElement("div");
   todoDiv.setAttribute("id","todo"+index);
  
   const todoSpan=document.createElement("span");
   todoSpan.textContent=todo;
   todoDiv.appendChild(todoSpan);

   const todoButton=document.createElement("button");
   todoButton.textContent="Delete";
   todoButton.setAttribute("onclick","deleteTodo("+index+")");
   todoDiv.appendChild(todoButton);

   document.getElementById("todos").appendChild(todoDiv);
   element.value="";
   index++;
}

function deleteTodo(index){
      const divElement=document.getElementById("todo"+index);
      document.getElementById("todos").removeChild(divElement);
}