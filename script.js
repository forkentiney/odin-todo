const projectList = document.querySelector("#project-list");
const projectDetails = document.querySelector("#project-details");

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

function clearContent(content) {
	while(content.childElementCount >= 1) {
		content.removeChild(content.firstChild);
	};
};

function controller() {
	clearContent(projectList);
	categories.forEach((category) => {
		const projectTitle = document.createElement("div");
		projectTitle.textContent = category.title;

		projectTitle.addEventListener("click", function() {
			clearContent(projectDetails);
			categoryTitle = document.createElement("h1");
			categoryTitle.textContent = category.title;
			projectDetails.appendChild(categoryTitle);
			category.todo.forEach((item) => {
				const todoTitle = document.createElement("div");
				todoTitle.textContent = item.title;

				projectDetails.appendChild(todoTitle);
			});
		});

		projectList.appendChild(projectTitle);
	});
}
