import React from "react";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";

type StyleProps = {
  getRandomColor: Function;
};

type ThemeProps = {
  breakPoint: string;
};

const useStyles = createUseStyles((theme: ThemeProps) => ({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 50,
    [`@media (max-width: ${theme.breakPoint})`]: {
      flexDirection: "column",
      margin: 25,
    },
  },
  buttonStyle: (props: StyleProps) => ({
    backgroundColor: props.getRandomColor(),
    margin: 20,
    padding: 20,
    width: "20%",
    [`@media (max-width: ${theme.breakPoint})`]: {
      width: "50%",
    },
  }),
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
}));

const Inner = () => {
  const buttonList: string[] = ["App", "With", "Theme"];

  const getRandomColor = () => {
    const colors = ["blue", "green", "red"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const theme: ThemeProps = useTheme();
  const props = {
    getRandomColor: getRandomColor,
  };

  const { containerStyle, buttonStyle, labelStyle } = useStyles({
    ...props,
    theme,
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

const App = () => {
  const specificTheme = {
    breakPoint: "800px",
  };

  return (
    <ThemeProvider theme={specificTheme}>
      <Inner />
    </ThemeProvider>
  );
};

export default App;
