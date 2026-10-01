import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { mailOutline, personOutline, callOutline, locationOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home (Inicio)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home (Inicio)</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="home-container">
          <IonCard className="profile-card">
            <div className="photo-container-2x2">
              <img
                src="/src/theme/img/perfil.jpeg"
                alt="Foto de Perfil 2x2"
                className="profile-photo"
              />
            </div>
            <IonCardHeader className="ion-text-center">
              <IonCardTitle className="profile-name">Andrius</IonCardTitle>
              <IonCardSubtitle className="profile-lastname">Rosa Castro</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="info-item">
                      <IonIcon slot="start" icon={mailOutline} color="primary" />
                      <IonLabel>
                        <h2>Correo Electrónico</h2>
                        <p>andriusrosacastro@gmail.com</p>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="info-item">
                      <IonIcon slot="start" icon={personOutline} color="primary" />
                      <IonLabel>
                        <h2>Matrícula / ID</h2>
                        <p>2023-1072</p>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="info-item">
                      <IonIcon slot="start" icon={callOutline} color="primary" />
                      <IonLabel>
                        <h2>Teléfono</h2>
                        <p>+1 (849) 408-6793</p>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="info-item">
                      <IonIcon slot="start" icon={locationOutline} color="primary" />
                      <IonLabel>
                        <h2>Ubicación</h2>
                        <p>Santo Domingo, Rep. Dominicana</p>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
