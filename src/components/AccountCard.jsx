import { Link } from "react-router-dom";

function AccountCard({ account }) {

  return (
    <div className="account-card">

      <h3>{account.holderName}</h3>

      <p>
        Account Number: {account.accountNumber}
      </p>

      <p>
        Account Type: {account.accountType}
      </p>

      <p>
        Balance: ${account.balance}
      </p>

      <Link to={`/accounts/${account.accountNumber}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default AccountCard;