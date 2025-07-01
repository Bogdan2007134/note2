import "./ListNote.css";

import { HeaderBar } from "../HeaderBar/HeaderBar";
import { ItemNameNotes } from "../ItemNameNotes/ItemNameNotes";

export const ListNote = ({
  Category,
  setCategory,
  notes,
  removeNote,
  addTask,
  note,
  style,
  changeThemeDark,
  changeThemeLight,
  openNote,
  handleActiveNote,
}) => {
  return (
    <>
      <div className={`ListNote__list ${style}`}>
        <HeaderBar
          _setCategory={setCategory}
          Category_id={Category.id}
          addTask={addTask}
          style={style}
          changeThemeDark={changeThemeDark}
          changeThemeLight={changeThemeLight}
        />
        <>
          {notes.length && notes && notes[0] !== null ? (
            notes.map((_note) => {
              return (
                <>
                  {_note.category_id === Category.id ||
                  Category.id === "all" ? (
                    <ItemNameNotes
                      setCategory={setCategory}
                      categories={Category}
                      key={_note.id}
                      note={_note}
                      removeNote={removeNote}
                      openNote={openNote}
                      changed={_note.id === note.id ? true : false}
                      style={style}
                      handleActiveNote={handleActiveNote}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            })
          ) : (
            <div className={style}>
              <h2>Пусто</h2>
            </div>
          )}
        </>
      </div>
    </>
  );
};
