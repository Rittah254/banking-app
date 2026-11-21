import AccountCard from "../components/AccountCard";

function Accounts({ accounts }) {

  return (
    <div>

      <h1>Accounts</h1>

      {accounts.length === 0 ? (
        <p>No accounts created yet.</p>
      ) : (
        accounts.map((account) => (
          <AccountCard
            key={account.accountNumber}
            account={account}
          />
        ))
      )}

    </div>
  );
}

export default Accounts;