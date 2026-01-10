import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/fonts/CreatoDisplay-Regular.otf",
  variable: "--font-myfont"
});

export default myFont;