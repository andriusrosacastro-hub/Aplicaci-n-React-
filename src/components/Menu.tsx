import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import {
  homeOutline,
  homeSharp,
  calculatorOutline,
  calculatorSharp,
  languageOutline,
  languageSharp,
  gridOutline,
  gridSharp,
  personOutline,
  personSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Sumadora',
    url: '/page/Sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp,
  },
  {
    title: 'Traductor de Números',
    url: '/page/Traductor',
    iosIcon: languageOutline,
    mdIcon: languageSharp,
  },
  {
    title: 'Tabla de Multiplicar',
    url: '/page/Tabla',
    iosIcon: gridOutline,
    mdIcon: gridSharp,
  },
  {
    title: 'Experiencia Personal',
    url: '/page/Experiencia',
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Aplicación React & Ionic</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
