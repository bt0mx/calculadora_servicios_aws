import { GlobalProvider } from "../context/GlobalState";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpensive";
import { TransactionList } from "../components/transactions/TransactionList";
import { TransactionForm } from "../components/transactions/TransactionForm";
import Axios from "../components/axios/axios";


const Calculadora = () => {
  return (
    <GlobalProvider>
      <br />
      <div class="relative h-full w-full bg-neutral-900"><div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]">
        
        
        </div></div>
      <section className="">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-white-600 dark:text-gray-50">
			<div className="flex space-x-2 sm:space-x-4">
          <TransactionForm />
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
      <h3>
      <TransactionList />
      <Balance />
     {/* <Axios /> */}
      </h3>
			</div>
		</div>
	</div>
</section>

      {/*
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
               <IncomeExpenses />
              </div>
              <div className="flex-1 flex flex-col">
                <section>Grafico</section>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </GlobalProvider>
  )
}

export default Calculadora