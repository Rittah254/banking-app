import { useState } from "react";
import AccountForm from "../components/AccountForm";

function CreateAccount({ accounts, setAccounts }) {

  const [formData, setFormData] = useState({
    holderName: "",
    accountNumber: "",
    accountType: "",
    balance: "",
    mobile: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      ...formData
    };

    setAccounts([...accounts, newAccount]);

    alert("Account created successfully!");

    setFormData({
      holderName: "",
      accountNumber: "",
      accountType: "",
      balance: "",
      mobile: ""
    });
  };

  return (
    <div>

      <h1>Create Account</h1>

      <AccountForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

    </div>
  );
}

export default CreateAccount;