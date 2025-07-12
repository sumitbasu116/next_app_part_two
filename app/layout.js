import "./globals.css";
import Navigation from "./Navigation";

function RootLayout({children}){

  return(
    <html>
      <body>
        <Navigation/>
        {children}
        </body>
    </html>
  );
};
export default RootLayout;