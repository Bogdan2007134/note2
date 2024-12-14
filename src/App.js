import "./App.css";
import { useEffect, useRef, useState } from "react";

import { Modal } from "./modal";
import { loadANotes, setANotes } from "./AStorage";
import { ListNote } from "./ListNote";
import { ItemNotes } from "./ItemNotes";
import { theme } from "antd";

function App() {
  const [style, setStyle] = useState("spisedWine");
  const [start, setStart] = useState(true);
  const [open, setOpen] = useState(false);
  const [ititle, setTitle] = useState("");
  const [idesc, setDesc] = useState("");

  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState(0);

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const changeThemeDark = () => {
    const themes = [
      "toastedCaramel",
      "oliveHarvest",
      "spisedWine",
      "spruce",
      "midnight",
      "lavender",
    ];
    for (let color = 0; color < themes.length; color++) {
      const nowColor = themes[color];
      if (nowColor === style) {
        if (color + 1 < themes.length) {
          setStyle(themes[color + 1]);
          return;
        } else {
          setStyle(themes[0]);
          return;
        }
      }
    }
    setStyle(themes[0]);
  };
  const changeThemeLight = () => {
    const themes = ["paleBlue", "blush", "beige"];
    for (let color = 0; color < themes.length; color++) {
      const nowColor = themes[color];
      if (nowColor === style) {
        if (color + 1 < themes.length) {
          setStyle(themes[color + 1]);
          return;
        } else {
          setStyle(themes[0]);
          return;
        }
      }
    }
    setStyle(themes[0]);
  };
  const openEditNote = (id) => {
    setOpen(true);
    setEditId(id);
    setEditState(true);
    setTitle(notes.filter((note) => note.id === id)[0].title);
    setDesc(notes.filter((note) => note.id === id)[0].desc);
  };

  const removeNote = (id) => {
    const noteToRemove = document.getElementById(id);
    if (noteToRemove) {
      noteToRemove.classList.add("removing");
      setTimeout(() => {
        setNote({});
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        setANotes(notes.filter((note) => note.id !== id));
      }, 300);
    }
  };

  const _setDesc = (title, desc, id) => {
    const newTask = {
      id: id,
      title: title,
      desc: desc,
    };
    setNote(newTask);

    setNotes((prevNotes) => {
      setANotes(prevNotes.map((note) => (note.id === id ? newTask : note)));
      return prevNotes.map((note) => (note.id === id ? newTask : note));
    });
  };
  const _setTitle = (title, desc, id) => {
    const newTask = {
      id: id,
      title: title,
      desc: desc,
    };
    setNote(newTask);

    setNotes((prevNotes) => {
      setANotes(prevNotes.map((note) => (note.id === id ? newTask : note)));
      return prevNotes.map((note) => (note.id === id ? newTask : note));
    });
  };

  const addTask = () => {
    const newTask = {
      id: editState ? editId : Date.now(),
      title: ititle,
      desc: idesc,
    };

    setNotes((prevNotes) => {
      if (!editState) {
        setANotes([newTask, ...prevNotes]);
        return [newTask, ...prevNotes];
      } else {
        setANotes(
          prevNotes.map((note) => (note.id === editId ? newTask : note))
        );
        return prevNotes.map((note) => (note.id === editId ? newTask : note));
      }
    });
    setEditState(false);
    handleClose();
    setDesc("");
    setTitle("");
    setEditId(0);
  };
  useEffect(() => {
    const fetch = async () => {
      await loadANotes(setNotes);
    };
    if (start) {
      fetch();
      setStart(false);
    }
  }, [notes]);

  return (
    <div className={`App ${style}`}>
      <Modal
        setEditState={setEditState}
        editState={editState}
        isOpen={open}
        onClose={handleClose}
        ititle={ititle}
        setTitle={setTitle}
        idesc={idesc}
        setDesc={setDesc}
        addTask={addTask}
      />
      <div className={`Frame-main ${style}`}>
        <ListNote
          changeThemeLight={changeThemeLight}
          changeThemeDark={changeThemeDark}
          style={style}
          notes={notes}
          setNote={setNote}
          openEditNote={openEditNote}
          removeNote={removeNote}
          setOpen={setOpen}
          note={note}
        />
        <ItemNotes
          style={style}
          key={note.id}
          note={note}
          openEditNote={openEditNote}
          removeNote={removeNote}
          setDesc={_setDesc}
          setTitle={_setTitle}
        />
      </div>
    </div>
  );
}

export default App;
