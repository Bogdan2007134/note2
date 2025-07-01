import React from "react";

class CategoriesClass extends React.Component {
  constructor() {
    super();
    this.changedCategory = {
      name: "Все",
      id: "all",
      priority: false,
    };
    this.categories = JSON.parse(localStorage.getItem("Category"));
  }
  setCategory(item) {
    this.changedCategory = item;
  }

  setCategories(item) {
    this.categories = item;
  }

  removeCategory(item) {
    const finishTasks = this.categories.filter((note) => note.id !== item.id);
    localStorage.setItem("Category", JSON.stringify(finishTasks));
    this.categories(finishTasks);
  }

  addCategory(value) {
    const newItem = {
      name: value,
      id: this.categories.length,
      priority: false,
    };
    this.categories.push(newItem);
    localStorage.setItem("Category", JSON.stringify(this.categories));
  }

  updateCategories() {
    this.categories = JSON.parse(localStorage.getItem("Category"));
  }

  getCategory() {
    return this.changedCategory;
  }

  getCategories() {
    return this.categories;
  }
}

export default CategoriesClass;
