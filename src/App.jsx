import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import CreateAccount from "./pages/CreateAccount";
import AccountDetails from "./pages/AccountDetails";
import Contact from "./pages/Contact";

function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <BrowserRouter>

      <nav>

        <Link to="/">Home</Link>{" | "}

        <Link to="/accounts">Accounts</Link>{" | "}

        <Link to="/create-account">Create Account</Link>{" | "}

        <Link to="/contact">Contact</Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/accounts"
          element={
            <Accounts accounts={accounts} />
          }
        />

        <Route
          path="/create-account"
          element={
            <CreateAccount
              accounts={accounts}
              setAccounts={setAccounts}
            />
          }
        />

        <Route
          path="/accounts/:accountNumber"
          element={
            <AccountDetails accounts={accounts} />
          }
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;