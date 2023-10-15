import css from "./TransactionHistory.module.css";

export const TransactionHistory = (props) => {
  console.log(props);
  return (
    <div className={css["table-container"]}>
      <table className={css.transactionHistory}>
        <thead className={css.transactionThead}>
          <tr>
            <th className={css["transaction-cell"]}>Type</th>
            <th className={css["transaction-cell"]}>Amount</th>
            <th className={css["transaction-cell"]}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((item) => {
            return (
              <tr className={css["transaction-row"]} key={item.id}>
                <td className={css["transaction-cell"]}>{item.type}</td>
                <td className={css["transaction-cell"]}>{item.amount}</td>
                <td className={css["transaction-cell"]}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
