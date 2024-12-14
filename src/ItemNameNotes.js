import "./App.css";

import { DeleteFilled } from "@ant-design/icons";
export const ItemNameNotes = ({ note, removeNote, active, setNote, style }) => {
  const date = new Date(note.id);
  return (
    <div
      key={note.id}
      id={note.id}
      className={`noteNameItem${active ? "-active" : ""} ${style}`}
      onClick={() => setNote(note)}
    >
      <div className="text-div">
      <h2>{note.title.length > 30 ? `${note.title.slice(0, 30)}...` : note.title}</h2>
      </div>
      <div className="options-div">
        <div className={`date-div ${style}`}></div>  
          <h2 >
            {date.toLocaleString()}
          </h2>
        <DeleteFilled
          className="interactives"
          style={{
            // color: "#ebebeb",
            margin: 5,
          }}
          onClick={() => removeNote(note.id)}
        />
      </div>
    </div>
  );
};
