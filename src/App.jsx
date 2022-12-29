import { useState } from "react";
import "./App.css";

function App() {
	const [vat, setVat] = useState(7.5);
	const [vatAmount, setVatAmount] = useState(0);
	const [amount, setAmount] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

    const handleCalculate = (value) => {
        setAmount(value);
        const vatAmount = (value * vat) / 100;
        const totalAmount = vatAmount + Number(value);
        setTotalAmount(totalAmount);
        setVatAmount(vatAmount);
    }

    const formatAmount = (x, units = true) => {
		if (typeof x === "number") {
			const num = units ? x.toFixed(2) : x;

			return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		return units ? (0).toFixed(2) : 0;
	};


	return (
		<div className="container">
			<div className="wrapper">
                <h1>VAT Calculator</h1>
				<div className="inputs">
					<div className="input-div">
						<span>Amount</span>
						<input
							type="text"
							value={amount}
							onChange={e => handleCalculate(e.target.value)}
						/>
					</div>
					<div className="input-div">
						<span>VAT%</span>
						<input
							type="text"
							value={vat}
							onChange={e => setVat(e.target.value)}
						/>
					</div>
				</div>
				<div className="vat-result">
					<div className="aside">
						<span>VAT Amount</span>
						<input type="text" value={formatAmount(vatAmount)} disabled />
					</div>
				</div>
				<div className="vat-result">
					<div className="aside">
						<span>Total Amount</span>
						<input type="text" value={formatAmount(totalAmount)} disabled />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
