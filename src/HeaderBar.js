
export const HeaderBar = ({ setOpen }) => {
  return (
    <div className="header">
      <h1 className="title-notes">Заметки</h1>
      <h1 className="add-notes" onClick={() => setOpen(true)}>
        +
      </h1>
    </div>
  );
};
