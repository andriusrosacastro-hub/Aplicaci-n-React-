import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import TraductorNumeros from './pages/TraductorNumeros';
import TablaMultiplicar from './pages/TablaMultiplicar';
import ExperienciaPersonal from './pages/ExperienciaPersonal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/page/Sumadora" exact={true}>
              <Sumadora />
            </Route>
            <Route path="/page/Traductor" exact={true}>
              <TraductorNumeros />
            </Route>
            <Route path="/page/Tabla" exact={true}>
              <TablaMultiplicar />
            </Route>
            <Route path="/page/Experiencia" exact={true}>
              <ExperienciaPersonal />
            </Route>
            <Route path="/" exact={true}>
              <Redirect to="/page/Home" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
