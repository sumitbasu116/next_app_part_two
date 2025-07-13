import "../globals.css";
import Navigation from "../components/Navigation";
import {Roboto} from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets:["latin"],
  variable:"--font-roboto"
});

const robotoWeight = Roboto({
  subsets:["latin"],
  weight:"500",
  variable:"--font-roboto-weight"
});

const workSans = Work_Sans(
  {
    subsets:["latin"],
    variable:"--font-work-sans"
  }
)

function RootLayout({children}){

  return(
    <html>
      <body className={`${roboto.variable} ${workSans.variable} ${robotoWeight.variable}`}>
        <Navigation/>
        {children}
        </body>
    </html>
  );
};
export default RootLayout;