import "./App.css";
import { useEffect, useRef, useState } from "react";

import { setANotes } from "./hooks/AStorage";
import { ListNote } from "./components/ListNote/ListNote";
import { ItemNote } from "./components/ItemNote/ItemNote";
import { useLocalStorage } from "@uidotdev/usehooks";

import NotesClass from "./tools/NotesClass";
import CategoryClass from "./tools/CategoryClass";

function App() {
  const [style, setStyle] = useState("spisedWine");
  const [Category, setCategory] = useState({
    name: "Все",
    id: "all",
    priority: false,
  });
  const [ititle, setTitle] = useState("");
  const [idesc, setDesc] = useState("");

  const [note, setNote] = useState({});
  const [notes, setNotes] = useLocalStorage("Notes", []);
  const cursor = useRef({ title: -1, desc: -1 });
  const darkThemes = [
    "toastedCaramel",
    "oliveHarvest",
    "spisedWine",
    "spruce",
    "midnight",
    "lavender",
  ];
  const lightThemes = ["paleBlue", "blush", "beige"];

  function changeThemeDark() {
    const currentIndex = darkThemes.findIndex((theme) => theme === style);
    const nextIndex = (currentIndex + 1) % darkThemes.length;
    setStyle(darkThemes[nextIndex]);
  }
  function changeThemeLight() {
    const currentIndex = lightThemes.findIndex((theme) => theme === style);
    const nextIndex = (currentIndex + 1) % lightThemes.length;
    setStyle(lightThemes[nextIndex]);
  }

  const updateAllNotes = (var_notes) => {
    setANotes(var_notes);
    setNotes(var_notes);
  };

  const openNote = (id) => {
    const emptyText = document.getElementById("emptyText");
    if (emptyText) {
      emptyText.classList.add("removing");
    }

    const cash_note = notes.find((note) => note.id === id);
    setTitle(cash_note.title);
    setDesc(cash_note.desc);
    setNote(cash_note);
  };

  const removeNote = (id) => {
    const noteToRemove = document.getElementById(id);
    if (noteToRemove) {
      noteToRemove.classList.add("removing");
      setTimeout(() => {
        const finishTasks = notes.filter((note) => note.id !== id);
        setNote({});
        updateAllNotes(finishTasks);
      }, 300);
    }
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: "",
      desc: "Накалякать сюда",
      category_id: Category.id,
      active: false,
    };
    const finishTasks = [newTask, ...notes];
    setTitle(newTask.title);
    setDesc(newTask.desc);
    setNote(newTask);
    updateAllNotes(finishTasks);
  };

  const handleActiveNote = (id) => {
    let count = 0;
    const _notes = [...notes];
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        break;
      }
      count++;
    }
    if (notes[count].active) {
      _notes[count].active = false;
    } else {
      _notes[count].active = true;
    }
    updateAllNotes(_notes);
  };
  const handleCategory = (item) => {
    setCategory(item);
    setTitle("");
    setDesc("");
    setNote({});
  };
  const updateNotes = () => {
    if (notes.length > 0) {
      const newTask = {
        id: note.id,
        title: ititle,
        desc: idesc,
        category_id: note.category_id,

        active: note.active,
      };

      const _notes = [...notes];
      const finishTasks = _notes.map((_note) =>
        _note.id === note.id ? newTask : _note
      );
      setNote(newTask);
      updateAllNotes(finishTasks);
    }
  };
  useEffect(() => {
    updateNotes();
    // eslint-disable-next-line
  }, [ititle, idesc, Category]);
  return (
    <div className={`App ${style}`}>
      <div className={`Frame-main ${style}`}>
        <ListNote
          Category={Category}
          setCategory={handleCategory}
          changeThemeLight={changeThemeLight}
          changeThemeDark={changeThemeDark}
          style={style}
          notes={notes}
          openNote={openNote}
          removeNote={removeNote}
          addTask={addTask}
          note={note}
          handleActiveNote={handleActiveNote}
        />
        <ItemNote
          style={style}
          note={note}
          openNote={openNote}
          setDesc={setDesc}
          setTitle={setTitle}
          cursor={cursor}
        />
      </div>
    </div>
  );
}

export default App;
