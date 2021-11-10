import "../src/css/app.css"
let App = () => {
  return (
    <div className="app">
      <div className="main">Main</div>
      <div className="pyramid">
        <ul className="moneyList">
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
