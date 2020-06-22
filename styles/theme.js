const theme = {
  forms: {
    input: {
      borderTop: "0px",
      borderLeft: "0px",
      borderRight: "0px",
      borderColor: "#a5a5a5",
      px: 2,
      mb: 4,
    },
    select: {
      borderRadius: 9999,
    },
    textarea: {
      borderTop: "0px",
      borderLeft: "0px",
      borderRight: "0px",
      borderColor: "#a5a5a5",
      px: 2,
      mb: 4,
    },
    label: {
      mb: 2,
      fontSize: "12px",
      color: "#a5a5a5"
    },
    radio: {},
    checkbox: {},
  },
  colors: {
    text: "black",
    // test colours
    test1: "#9DF9E8",
    test2: "#D6C1F4",
    test3: "#FFD5DC",
    test4: "#41B4FC",
    test5: "#FFE3B1",
    test6: "#985CDE",
    test7: "#FFD07E",
  },
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Rubik', sans-serif`,
    monospace: "Menlo, monospace",
  },
  fontSizes: [10, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 300,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 200, 512],
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "20px",
    },
    highlight: {
      purple: {
        variant: "text.heading",
        padding: "1px 7px",
        background: "linear-gradient(179deg, rgba(255,255,255,0) 55%, #b787ed 55%)",
        display: "inline-block",
      },
      pink: {
        variant: "text.heading",
        padding: "1px 7px",
        background: "linear-gradient(179deg, rgba(255,255,255,0) 55%, #ffadba 55%)",
        display: "inline-block",
      },
      orange: {
        variant: "text.heading",
        padding: "1px 7px",
        background: "linear-gradient(179deg, rgba(255,255,255,0) 55%, #ffa405 55%)",
        display: "inline-block",
      },
      green: {
        variant: "text.heading",
        padding: "1px 7px",
        background: "linear-gradient(179deg, rgba(255,255,255,0) 55%, #12dfb9 55%)",
        display: "inline-block",
      },
    },
    p: {
      marginBottom: "20px",
    },
  },
  variants: {
    link: {
      color: "black",
    },
  },
  buttons: {
    primary: {
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      fontWeight: "bold",
      cursor: "pointer",
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 0,
      color: "white",
      bg: "black",
    },
    secondary: {
      variant: "buttons.primary",
      color: "black",
      bg: "white",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
};

export default theme;
