import { Route, Redirect, Switch } from "react-router-dom";


import { Home } from "./src/containers/Home";
import CardSingleMovie from "./src/components/cardSingleMovie";
import { FormikFormDemo } from "./src/components/form";
import { FormLogin } from "./src/components/formLogin";
import "primeflex/primeflex.css";
import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



//<div style={{backgroundColor:var(--blue-500)}} /

function App() {
  return (
    <div className="p-d-inline">
      <Home />
      <Route
        path="/singleMovie/:id"
        render={(props) => <CardSingleMovie imdbID={props.match.params.id} />}
      />
      <Route path="/register" component={FormikFormDemo} />
      <Route path="/login" component={FormLogin} />
    </div>
  );
}

export default App;
