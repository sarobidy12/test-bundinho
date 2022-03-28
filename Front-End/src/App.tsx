import { Provider as StoreProvider } from 'mobx-react';
import * as stores from './Store';
import { BrowserRouter } from 'react-router-dom';
import Route from "./Route";
import { SnackbarProvider } from 'notistack';

const App = () => {

  // Component will mount check for the session check

  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <StoreProvider {...stores}>
          <Route />
        </StoreProvider>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
