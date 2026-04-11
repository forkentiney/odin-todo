function category(title) {
  const category = title;
  const description = ``;
  const todo = [];
  const done = [];

  const newTodo = (name) => {
    const item = name;
    item.active = true;
    item.priority = "Default";
    todo.push(item);

    return { item };
  }

  const finishTodo = (item) => {
    todo.find(item).status = "complete";
  }

  return { category, description, todo, done, newTodo };
};

const defaultCategory = category("default");
defaultCategory.description = "For all your general needs";
