import "../globals.css";
import Navigation from "../components/Navigation";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  subsets:["latin"]
});

function RootLayout({children}){

  return(
    <html>
      <body className={roboto.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  );
};
export default RootLayout;