import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import FAQ from "./scenes/faq";
// import Geo from "./scenes/geo";
// import Calnder from "./scenes/calnder";
import { Routes, Route } from "react-router-dom";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                {/* 
                <Route path="/form" element={Form} />
                <Route path="/bar" element={Bar} />
                <Route path="/pie" element={Pie} />
                <Route path="/line" element={Line} />
                <Route path="/faq" element={FAQ} />
                <Route path="/geo" element={Geo} />
                <Route path="/calender" element={Calnder} /> */}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
