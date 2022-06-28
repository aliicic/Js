let todos = [
  { id: 1, name: "todos one", status: false },
  { id: 2, name: "todos two", status: false },
  { id: 3, name: "todos three", status: true },
];

let enter = prompt("1-add todo \n 2-delete todo \n 3-done todo");
let searchres = false;

switch (enter) {
  case "1":
    let enteredTodo = prompt("enter todo name");
    let newTodo = {
      id: todos.length + 1,
      name: enteredTodo,
      status: false,
    };
    todos.push(newTodo);
    console.log(todos);
    break;
  case "2":
    let enteredTodo1 = prompt("enter todo name");
    todos.some((i, index) => {
      //   i.name === enteredTodo1 ? todos.splice(index, 1) : console.log('entered task is wrong');
      if (i.name === enteredTodo1) {
        todos.splice(index, 1);
        searchres = true;
        return true;
      }
    });
    console.log(searchres ? "yes object found" : "object not found");
    console.log(todos);
    break;
  case "3":
    let enteredTodo2 = prompt("enter todo name");
    todos.some((i) => {
      //   i.name === enteredTodo1 ? i.status = true : console.log('entered task is wrong');
      if (i.name === enteredTodo1) {
        todos.splice(index, 1);
        i.status = true;
        searchres = true;
        return true;
      }
    });

    console.log(searchres ? "yes object found" : "object not found");
    console.log(todos);
    break;
  default:
    console.log("some thing wrong");
    break;
}
