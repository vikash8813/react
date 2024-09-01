import React, {useId} from 'react';

function InputBox({
    name,
    amount,
    currency = 'usd',
    availableCurrency = [],
    onCurrencyChange,
    onAmountChange,
    disable
                  }) {

    const id = useId()
    return (
        <div className='flex gap-3 items-center'>
            <div>
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    {name}</label>
                <input type="number" id={id}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="John"
                       required
                       value={amount}
                       onChange={(e) => {
                           onAmountChange && onAmountChange(Number(e.target.value))
                       }}
                       disabled={disable}
                />
            </div>
            <div>
                <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    a currency</label>
                <select id="currency"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         value={currency}
                        onChange={(e) => {
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }}
                        disabled={disable}
                >
                    {
                        availableCurrency.map((c)=> (
                            <option
                                key={c}
                                value={c}>
                                {c}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;