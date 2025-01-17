import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export function TransactionList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div className="bg-gray-200 p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-xl text-red font-bold my-2">
           No has agregado servicios
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-4">
      <img src="" alt="" />
      <h3 className="text-slate-300 text-xl font-bold my-2 text-center">Servicios Seleccionados</h3>
      <br />
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.NameType} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
