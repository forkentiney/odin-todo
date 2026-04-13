const categories = [];

function createCategory(title, details) {
	const category = {
		title: title,
		description: details,
		todo: [],
		done: [],
		createItem: (name) => {
			const item = {
				title: name,
				active: 1,
				priority: "normal",
			};
			category.todo.push(item);
		},
	};
	categories.push(category);
	return { category };
};

createCategory("Default", "For all your general needs");
