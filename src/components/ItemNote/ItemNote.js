import { useEffect, useRef } from "react";
import "./ItemNote.css";

export const ItemNote = ({ note, setTitle, setDesc, style, cursor }) => {
  const titleRef = useRef({});
  const descRef = useRef({});

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    cursor.current.title = e.target.selectionStart;
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    cursor.current.desc = e.target.selectionStart;
  };
  useEffect(() => {
    if (titleRef.current) {
      if (titleRef.isFocus) {
        titleRef.current.selectionStart = cursor.current.title;
        titleRef.current.selectionEnd = cursor.current.title;
      }
      if (descRef.isFocus) {
        descRef.current.selectionStart = cursor.current.desc;
        descRef.current.selectionEnd = cursor.current.desc;
      }
    }
    // eslint-disable-next-line
  }, [note]);
  return (
    <div id={note.id} className="noteList__ItemNotes">
      {note.id ? (
        <div className="noteList__text-areas" id="textArea">
          <textarea
            autoFocus
            ref={titleRef}
            className={`noteList__title-note ${style}`}
            value={note.title}
            placeholder={"Введите название"}
            onFocus={() => {
              titleRef.isFocus = true;
            }}
            onBlur={() => {
              titleRef.isFocus = false;
            }}
            onChange={(e) => handleTitleChange(e)}
          />
          <textarea
            ref={descRef}
            placeholder={"Введите текст заметке"}
            className={`noteList__desc-note ${style}`}
            value={note.desc}
            onChange={(e) => handleDescChange(e)}
            onBlur={() => {
              descRef.isFocus = false;
            }}
            onFocus={() => {
              descRef.isFocus = true;
            }}
          />
        </div>
      ) : (
        <div className="noteList__empty-note" id="emptyText">
          Выберите заметку
        </div>
      )}
    </div>
  );
};
