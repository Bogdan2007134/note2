import "./HeaderBar.css";

import { BulbFilled, MoonFilled, PlusOutlined } from "@ant-design/icons";
import { NavigationBar } from "./NavidationBar";

export const HeaderBar = ({
  addTask,
  style,
  Category_id,
  changeThemeDark,
  changeThemeLight,
  _setCategory,
}) => {
  return (
    <div className="header">
      <div className="horizontal">
        <h1 className={`header__title-notes ${style}`}>Заметки</h1>
        <div className="header__listIcon">
          <BulbFilled
            className={`header__iconItem ${style}`}
            onClick={changeThemeLight}
          />
          <MoonFilled
            className={`header__iconItem ${style}`}
            onClick={changeThemeDark}
          />
          <PlusOutlined
            className={`header__iconItem ${style}`}
            onClick={addTask}
          />
        </div>
      </div>
      <NavigationBar
        style={style}
        Category_id={Category_id}
        _setCategory={_setCategory}
      />
    </div>
  );
};
