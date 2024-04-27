import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount,setAmount]=useState(1)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options= Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency)=>setFrom(currency)}                          
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to  {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
export default App
