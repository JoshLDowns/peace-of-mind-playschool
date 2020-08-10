export default {
  palette: {
    primary: {
      light: "#eaf5e4",
      main: "#dceed1",
      dark: "#cee7be",
      contrastText: "#2f282e",
    },
    secondary: {
      light: "#8e7b8d",
      main: "#736372",
      dark: "#584b57",
      contrastText: "#eaf5e4",
    },
  },
  typography: {
    fontFamily: `"itim", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  global: {
    mainWrapper: {
      marginTop: "30px",
      overflow: "hidden"
    },
    paperRoot: {
      backgroundColor: "rgb(234,245,228,.75)",
    },
    title: {
      fontFamily: `"cabin sketch", "Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      fontSize: "2.25rem",
      textDecoration: "none",
      color: "#2f282e",
    },
    titleText: {
      fontFamily: `"cabin sketch", "Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      fontSize: "1.75rem",
      textDecoration: "none",
      color: "#2f282e",
    },
    headerText: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    bodyText: {
      color: "#2f282e",
      fontSize: "1.25rem",
    },
    resourceText: {
      color: "#2f282e",
      fontSize: "1.25rem",
      textDecoration: "none",
      marginBottom: "20px",
    },
    handbookText: {
      color: "#2f282e",
      fontSize: "1.1rem",
      marginBottom: "15px"
    },
    logoSmall: {
      height: "50px",
      width: "50px",
    },
    logoLarge: {
      width: "100%",
      height: "auto",
    },
    aboutImage: {
      width: "100%",
      height: "auto",
      maxHeight: "500px",
      objectFit: "cover",
      borderRadius: "2%",
      borderTop: "5px solid #736372",
      borderBottom: "5px solid #736372"
    },
    relativeContainer: {
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "0",
      right: "5px",
    },
    submit: {
      fontFamily: `"cabin sketch", "Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      fontSize: "1.75rem",
    },
  },
};
