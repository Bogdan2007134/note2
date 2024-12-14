import { CloseOutlined } from "@ant-design/icons";
import React, { useRef } from "react";

export const Modal = ({
  setEditState,
  editState,
  isOpen,
  onClose,
  ititle,
  setTitle,
  idesc,
  setDesc,
  addTask,
}) => {
  const ref = useRef(null);

  const handleInput = (e) => {
    if (ref.current) {
      if (e.target.scrollHeight >= 36) {
        ref.current.style.height = "auto";
        ref.current.style.height = `${e.target.scrollHeight - 16}px`;
      }
    }
  };
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(10, 10, 10, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>
        <div
          style={{
            background:
            "linear-gradient(-70deg, rgb(144, 144, 144), rgb(72, 72, 72))",
            width: "clamp(400px, 40%, 600px)",
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
          }}
        >
          <div style={{ display: "flex", justifyContent: "end", height: 30 }}>
            <h1
              onClick={() => {
                onClose();
                setEditState(false);
                setDesc("");
                setTitle("");
              }}
              style={{ color: "white", cursor: "pointer" }}
            >
              <CloseOutlined />
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ color: "white" }}>
              {editState ? "Изменить задачу" : "Добавить задачу"}
            </h2>
            <>
              <input
                className="dataEntry"
                placeholder="Введите имя задачи"
                value={ititle}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <textarea
                multiple={true}
                contentEditable={true}
                className="dataEntry"
                placeholder={"Введите описание задачи"}
                value={idesc}
                style={{ resize: "vertical", minHeight: "40px" }}
                ref={ref}
                rows={1}
                onInput={handleInput}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
              <div className="dataButton" onClick={addTask}>
                {editState ? "Изменить задачу" : "Добавить задачу"}
              </div>
            </>
          </div>
        </div>
      </>
    </div>
  );
};
