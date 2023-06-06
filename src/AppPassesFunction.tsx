import React from "react";
import { createUseStyles } from "react-jss";

type StyleProps = {
  colors: string[];
  getRandomIndex: Function;
  getRandomColor: Function;
};

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
  buttonStyle: (props: StyleProps) => ({
    backgroundColor: props.getRandomColor(props.getRandomIndex(props.colors)),
    margin: 20,
    padding: 20,
    width: "20%",
    "@media (max-width: 640px)": {
      width: "50%",
    },
  }),
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

const App = () => {
  const buttonList: string[] = ["App", "Passes", "Function"];
  const colors: string[] = ["blue", "green", "red"];

  const getRandomIndex = (colors: string[]) => {
    return Math.floor(Math.random() * colors.length);
  };

  const getRandomColor = (index: number) => {
    return colors[index];
  };

  const { containerStyle, buttonStyle, labelStyle } = styles({
    colors,
    getRandomIndex,
    getRandomColor,
  });

  const renderButton = (label: string) => {
    return (
      <button className={buttonStyle} key={label}>
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
