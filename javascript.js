// Define an object to store categories and subcategories
var categories = {
	// Define a function to add a new category
	addCategory: function(name) {
		var newCategory = {
			name: name,
			subcategories: []
		};
		this.list.push(newCategory);
		return newCategory;
	},
	// Define a function to add a new subcategory
	addSubcategory: function(name, parentCategory) {
		var newSubcategory = {
			name: name,
			parent: parentCategory
		};
		parentCategory.subcategories.push(newSubcategory);
		return newSubcategory;
	},
	// Define a function to remove a category
	removeCategory: function(index) {
		var removedCategory = this.list.splice(index, 1)[0];
		return removedCategory;
	},
	// Define a function to remove a subcategory
	removeSubcategory: function(subcategory, parentCategory) {
		var index = parentCategory.subcategories.indexOf(subcategory);
		var removedSubcategory = parentCategory.subcategories.splice(index, 1)[0];
		return removedSubcategory;
	},
	// Define a
