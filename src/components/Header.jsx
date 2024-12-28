import InvestmentImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={InvestmentImg} alt="InvestmentLogo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
