import React from "react";

class NotesClass extends React.Component {
  constructor() {
    super();
    this.notes = JSON.parse(localStorage.getItem("Notes"));
  }

  handleClick() {
    console.log(this.notes);
  }
}

export default NotesClass;
