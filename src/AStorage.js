export const loadANotes = async (setChange) => {
  const notes = await JSON.parse(localStorage.getItem("Notes"));
  if (notes) {
    setChange(notes);
  } else {
    setChange([]);
  }
};

export const setANotes = (notes) => {
  localStorage.setItem("Notes", JSON.stringify(notes));
};
