import { HeaderBar } from "./HeaderBar";
import { ItemNameNotes } from "./ItemNameNotes";

export const ListNote = ({
  notes,
  openEditNote,
  removeNote,
  setOpen,
  note,
  setNote
}) => {
  return (
    <>
      <div className="Frame-list">
        <HeaderBar setOpen={setOpen} />

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
              />
            );
          })
        ) : (
          <div
            style={{
              color: "white",
              marginLeft: "30px",
            }}
          >
            <h2>Пусто</h2>
          </div>
        )}
      </div>
    </>
  );
};
