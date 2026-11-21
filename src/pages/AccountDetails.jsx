import { useParams } from "react-router-dom";

function AccountDetails({ accounts }) {

  const { accountNumber } = useParams();

  const account = accounts.find(
    (item) => item.accountNumber === accountNumber
  );

  if (!account) {
    return <h2>Account not found</h2>;
  }

  return (
    <div>

      <h1>Account Details</h1>

      <p>
        <strong>Account Holder:</strong> {account.holderName}
      </p>

      <p>
        <strong>Account Number:</strong> {account.accountNumber}
      </p>

      <p>
        <strong>Account Type:</strong> {account.accountType}
      </p>

      <p>
        <strong>Balance:</strong> ${account.balance}
      </p>

      <p>
        <strong>Mobile Number:</strong> {account.mobile}
      </p>

    </div>
  );
}

export default AccountDetails;