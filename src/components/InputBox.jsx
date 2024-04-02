import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange, //
    onCurrencyChange,
    currencyOptions = ["inr", "usd"], // empty array to keep safe from app crash
    selectCurrency = "usd", //default currency
    amountDisable = false, //user are allowed to change amount, not usefull but good for production
    currencyDisable = false, //user are allowed to change currency, not usefull but good for production
    className = "",
}) {
   
    const amountInputId = useId() // used only for study purpose for binding label and Input, we could have also passed any random value instead of "Id"
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor = 'amountInputId' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId} 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange = {(e)=> onAmountChange && onAmountChange(Number(e.target.value))} // checker to check if onAmountChange exist or not, used Number to be safe if String is returned in value
                /> 
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                    value = {selectCurrency}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // checker to check if onCurrencyChange exist or not,
                    disabled = {currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key = {currency} value= {currency}> 
                             {currency}
                         </option> //used key to improve performance
                    ))}
                   
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
