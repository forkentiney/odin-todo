function category(title, details) {
  const category = title;
  const description = details;
  const todo = [];
  const done = [];

	const createItem = (name) => {
		const item = {
			title: name,
			active: 1,
			priority: "normal",
		};
		todo.push(item);
	};

  return { category, description, todo, done, createItem };
};

const defaultCategory = category("Default", "For all your general needs");
