import "../globals.css";
import Navigation from "../components/Navigation";

function RootLayout({ children }) {

  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
export default RootLayout;