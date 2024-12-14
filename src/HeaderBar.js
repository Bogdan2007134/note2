import {
  BulbFilled,
  MoonFilled,
  PlusOutlined,
} from "@ant-design/icons";

export const HeaderBar = ({
  setOpen,
  style,
  changeThemeDark,
  changeThemeLight,
}) => {
  return (
    <div className="header">
      <h1 className={`title-notes ${style}`}>Заметки</h1>
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <BulbFilled
          className={`add-notes ${style}`}
          onClick={changeThemeLight}
        />
        <MoonFilled
          className={`add-notes ${style}`}
          onClick={changeThemeDark}
        />
        <PlusOutlined
          className={`add-notes ${style}`}
          onClick={() => setOpen(true)}
        />
      </div>
    </div>
  );
};
