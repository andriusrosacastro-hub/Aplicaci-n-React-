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
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { videocamOutline, personOutline, checkmarkCircleOutline, timeOutline, codeSlashOutline } from 'ionicons/icons';

const ExperienciaPersonal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Experiencia Personal</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ maxWidth: '700px', margin: '20px auto' }}>
          {/* Card: Video Presentation */}
          <IonCard className="ion-margin-bottom">
            <IonCardHeader>
              <IonCardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IonIcon icon={videocamOutline} color="primary" />
                Video Explicativo de la Experiencia
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>

              {/* Responsive YouTube Video Container */}
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', background: '#000' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  src="https://www.youtube.com/embed/U0gdNBDxJFE"
                  title="Video Explicativo de la Experiencia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </IonCardContent>
          </IonCard>



          {/* Card: Personal Reflections doing this task */}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExperienciaPersonal;
