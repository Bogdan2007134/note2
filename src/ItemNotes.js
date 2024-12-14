import "./App.css";

export const ItemNotes = ({ note, setTitle, setDesc }) => {
  return (
    <div key={note.id} id={note.id} className="noteItem">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <textarea
          className="title-note"
          value={note.title}
          multiple
          onChange={(e) => {
            if (e.target.value.length <= 80) {
              setTitle(e.target.value, note.desc, note.id);
            }
          }}
        />
        <textarea
          className="desc-note"
          value={note.desc}
          onChange={(e) => {
            setDesc(note.title, e.target.value, note.id);
          }}
        />
      </div>
      {/* <div className="options-div"></div> */}
    </div>
  );
};
