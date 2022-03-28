import { Route, Switch } from "react-router-dom";
import appParent from "../Component/App"

const Router = () => {

    return (
        <Switch>
            <Route path="/" exact={true} component={appParent} />
        </Switch>
    );
};

export default Router;
