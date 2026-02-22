import { useState } from "react";
import ToggleTheme from "./Components/ToggleTheme";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Sidebar from "./Components/Sidebar";
import Bottombar from "./Components/BottomBar";
import EmailList from "./Components/EmailList";
import EmailContent from "./Components/EmailContent";

function App() {
  const [openEmail, setOpenEmail] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && (
            <EmailContent email={openEmail} setOpenEmail={setOpenEmail} />
          )}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}

export default App;
