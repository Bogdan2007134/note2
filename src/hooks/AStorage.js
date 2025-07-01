export const loadANotes = (setChange) => {
  const notes = JSON.parse(localStorage.getItem("Notes") || []);
  setChange(notes);
};

export const setANotes = (notes) => {
  localStorage.setItem("Notes", JSON.stringify(notes));
};
