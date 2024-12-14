import { HeaderBar } from "./HeaderBar";
import { ItemNameNotes } from "./ItemNameNotes";

export const ListNote = ({
  notes,
  openEditNote,
  removeNote,
  setOpen,
  note,
  setNote,
  style,
  changeThemeDark,
  changeThemeLight,
}) => {
  return (
    <>
      <div className={`Frame-list ${style}`}>
        <HeaderBar
          setOpen={setOpen}
          style={style}
          changeThemeDark={changeThemeDark}
          changeThemeLight={changeThemeLight}
        />

        {notes.length && notes ? (
          notes.map((_note) => {
            return (
              <ItemNameNotes
                key={_note.id}
                note={_note}
                openEditNote={openEditNote}
                removeNote={removeNote}
                setNote={setNote}
                active={_note.id === note.id ? true : false}
                style={style}
              />
            );
          })
        ) : (
          <div className={style}>
            <h2>Пусто</h2>
          </div>
        )}
      </div>
    </>
  );
};
