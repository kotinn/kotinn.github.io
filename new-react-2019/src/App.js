import React from "react";
import Obrazki from "./settings/setObrazek";
//sprawdza i wyswietla wszystkie dostepne obrazki (okolo 18)

class App extends React.Component {
  render() {
    return (
      <div>
        <Obrazki />
      </div>
    );
  }
}

export default App;
