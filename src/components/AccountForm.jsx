function AccountForm({ formData, setFormData, onSubmit }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={onSubmit}>

      <div>
        <label>Account Holder Name</label>
        <input
          type="text"
          name="holderName"
          value={formData.holderName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Account Number</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Account Type</label>

        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          required
        >
          <option value="">Select Account Type</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
        </select>
      </div>

      <div>
        <label>Initial Balance</label>
        <input
          type="number"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">
        Create Account
      </button>

    </form>
  );
}

export default AccountForm;