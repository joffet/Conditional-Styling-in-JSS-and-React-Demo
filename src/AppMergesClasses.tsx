import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 50,
    "@media (max-width: 640px)": {
      flexDirection: "column",
      margin: 25,
    },
  },
  buttonStyle: {
    margin: 20,
    padding: 20,
    width: "20%",
    "@media (max-width: 640px)": {
      width: "50%",
    },
  },
  buttonColorBlue: {
    backgroundColor: "blue",
  },
  buttonColorRed: {
    backgroundColor: "red",
  },
  buttonColorGreen: {
    backgroundColor: "green",
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

const App = () => {
  const buttonList: string[] = ["App", "Merges", "Classes"];

  const {
    containerStyle,
    buttonStyle,
    labelStyle,
    buttonColorBlue,
    buttonColorGreen,
    buttonColorRed,
  } = styles();

  const getRandomColorClass = () => {
    const colors = ["blue", "green", "red"];
    const index = Math.floor(Math.random() * colors.length);
    switch (index) {
      case 0:
        return buttonColorBlue;
      case 1:
        return buttonColorGreen;
      default:
        return buttonColorRed;
    }
  };

  const renderButton = (label: string) => {
    return (
      <button className={buttonStyle + " " + getRandomColorClass()} key={label}>
        <span className={labelStyle}>{label}</span>
      </button>
    );
  };

  return (
    <div className={containerStyle}>
      {buttonList.map((label) => renderButton(label))}
    </div>
  );
};

export default App;
