import { useState } from "react";
import "./HeaderBar.css";
import { DeleteFilled } from "@ant-design/icons";

export const NavigationBar = ({ style, Category_id, _setCategory }) => {
  const notes = JSON.parse(localStorage.getItem("Notes"));
  const [value, setValue] = useState("");
  const [hiddenInput, setHiddenInput] = useState(false);
  const [isDelete, setIsDelete] = useState(true);
  const [Category, setCategory] = useState(
    JSON.parse(localStorage.getItem("Category"))
  );

  const addCategory = (state = false) => {
    if (state && value) {
      setCategory((item) => {
        const finishCategory = [
          ...item,
          { name: value, id: `${Category.length}`, priority: false },
        ];
        localStorage.setItem("Category", JSON.stringify(finishCategory));
        return finishCategory;
      });
    }

    setHiddenInput(false);
    setValue("");
  };

  const handleCategory = (item) => {
    _setCategory(item);
  };

  const handleIsDelete = () => {
    setIsDelete(!isDelete);
    const noteToRemove = document.getElementsByName("category");
    if (noteToRemove.length) {
      for (let index = 0; index < noteToRemove.length; index++) {
        const element = noteToRemove[index];
        isDelete
          ? element.classList.add("shake")
          : element.classList.remove("shake");
      }
    }
  };

  const removeNote = (item) => {
    const finishTasks = Category.filter((note) => note.id !== item.id);
    localStorage.setItem("Category", JSON.stringify(finishTasks));
    setCategory(finishTasks);
  };

  return (
    <div className="header_navigation">
      <div
        onClick={() =>
          handleCategory({ name: "Все", id: "all", priority: false })
        }
        className={`header_navigation__item ${
          Category_id === "all" ? "active" : ""
        }`}
      >
        Все
      </div>
      {Category.map((item) => {
        let count = 0;
        notes.map((note) => (note.category_id === item.id ? count++ : ""));
        return (
          <>
            <div
              name="category"
              onClick={() =>
                isDelete ? handleCategory(item) : removeNote(item)
              }
              className={`header_navigation__item ${
                Category_id === item.id ? "active" : ""
              }`}
            >
              {item.name}
              <div className="header_navigation__item">
                {isDelete ? (
                  <div
                    style={{
                      fontSize: "12px",
                      padding: "2px",
                    }}
                  >
                    {count}
                  </div>
                ) : (
                  <DeleteFilled
                    style={{
                      fontSize: "14px",
                      marginBottom: "5px",
                    }}
                    onClick={handleIsDelete}
                  />
                )}
              </div>
            </div>
          </>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeleteFilled
          className={`header_navigation__item ${style}`}
          style={{
            marginRight: "10px",
            fontWeight: "250",
            background: "none",
          }}
          onClick={handleIsDelete}
        />
        {!hiddenInput ? (
          <div
            className={`header_navigation__item ${style} plus`}
            style={{
              fontWeight: "250",
              background: "none",
            }}
            onClick={() => {
              setHiddenInput(true);
            }}
          >
            +
          </div>
        ) : (
          <div className="header_navigation__item">
            <input
              autoFocus
              className={`header_navigation__input ${style}`}
              style={{}}
              value={value}
              onBlur={() => addCategory(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addCategory(true);
                }
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
