import "../globals.css";
import Navigation from "../components/Navigation";
import {Roboto} from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets:["latin"]
});

const workSans = Work_Sans(
  {
    subsets:["latin"]
  }
)

function RootLayout({children}){

  return(
    <html>
      <body className={workSans.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  );
};
export default RootLayout;