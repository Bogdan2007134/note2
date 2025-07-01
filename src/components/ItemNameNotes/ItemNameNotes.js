import { useEffect } from "react";
import "./ItemNameNotes.css";

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
export const ItemNameNotes = ({
  note,
  removeNote,
  changed,
  style,
  openNote,
  handleActiveNote,
  setCategory,
}) => {
  let category;
  const filteredCategory = JSON.parse(localStorage.getItem("Category")).find(
    (category) => category.id === note.category_id
  );
  if (filteredCategory) {
    category = filteredCategory;
  } else {
    category = { name: "Без категории" };
  }

  useEffect(() => {
    return () => {};
  }, [note]);
  const date = new Date(note.id);
  return (
    <div
      id={note.id}
      className={`noteNameItem ${changed ? "changed" : ""}
        ${note.active ? "passive" : ""}
       ${style}`}
    >
      <div
        className="noteNameItem__text"
        onClick={() => {
          openNote(note.id);
        }}
      >
        {note.title ? (
          <h2>
            {note.title.length > 15
              ? `${note.title.slice(0, 15)}...`
              : note.title}
          </h2>
        ) : (
          <h2 style={{ color: "gray" }}>Без названия</h2>
        )}
        <div
          className="noteNameItem__check"
          onClick={() => setCategory(category)}
        >
          {category.name}
        </div>
      </div>
      <div className="noteNameItem__options">
        <div className="noteNameItem__info">
          <div className="noteNameItem__date">{date.toLocaleString()}</div>
          <div className="noteNameItem__check">
            {note.active ? "Выполнено" : "В процессе"}
          </div>
        </div>
        <div className="noteNameItem__dropframe">
          <ShareAltOutlined
            className="noteNameItem__dropframe__icon passive"
            // onClick={() => removeNote(note.id)}
          />
          {note.active ? (
            <CloseCircleOutlined
              className="noteNameItem__dropframe__icon"
              onClick={() => handleActiveNote(note.id)}
            />
          ) : (
            <CheckCircleOutlined
              className="noteNameItem__dropframe__icon"
              onClick={() => handleActiveNote(note.id)}
            />
          )}
          <DeleteFilled
            className="noteNameItem__dropframe__icon"
            onClick={() => removeNote(note.id)}
          />
        </div>
      </div>
    </div>
  );
};
