import React, { useState } from 'react';
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
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonText,
} from '@ionic/react';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState<string>('');
  const [tabla, setTabla] = useState<number[]>([]);
  const [error, setError] = useState<string>('');

  const calcularTabla = (val: string) => {
    if (val === '') {
      setTabla([]);
      setError('');
      return;
    }
    const n = parseFloat(val);
    if (isNaN(n)) {
      setTabla([]);
      setError('Por favor ingrese un número válido.');
    } else {
      const resultados: number[] = [];
      for (let i = 1; i <= 13; i++) {
        resultados.push(n * i);
      }
      setTabla(resultados);
      setError('');
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    const val = e.detail.value!;
    setNumero(val);
    calcularTabla(val);
  };

  const limpiar = () => {
    setNumero('');
    setTabla([]);
    setError('');
  };

  const nVal = parseFloat(numero);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tabla de Multiplicar</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ maxWidth: '500px', margin: '20px auto' }}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Generador de Tabla (del 1 al 13)</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem className="ion-margin-bottom">
                <IonInput
                  label="Número base"
                  labelPlacement="stacked"
                  type="number"
                  placeholder="Ej. 7"
                  value={numero}
                  onIonInput={handleInputChange}
                />
              </IonItem>

              <div style={{ display: 'flex', gap: '10px' }}>
                <IonButton expand="block" onClick={() => calcularTabla(numero)} className="ion-margin-top" style={{ flex: 1 }}>
                  Generar Tabla
                </IonButton>
                <IonButton expand="block" color="medium" fill="outline" onClick={limpiar} className="ion-margin-top">
                  Limpiar
                </IonButton>
              </div>

              {error && (
                <div className="ion-text-center ion-margin-top">
                  <IonText color="danger">
                    <p>{error}</p>
                  </IonText>
                </div>
              )}

              {tabla.length > 0 && !isNaN(nVal) && (
                <IonCard className="ion-margin-top" style={{ boxShadow: 'none', border: '1px solid var(--ion-color-step-150, #eee)' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ fontSize: '1.1rem', textAlign: 'center' }}>
                      Tabla del {nVal} (1 al 13)
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent style={{ padding: 0 }}>
                    <IonList lines="full">
                      {tabla.map((res, index) => {
                        const multiplicador = index + 1;
                        return (
                          <IonItem key={multiplicador}>
                            <IonLabel style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                              <span>{nVal} × {multiplicador}</span>
                              <strong style={{ color: 'var(--ion-color-primary)' }}>{res}</strong>
                            </IonLabel>
                          </IonItem>
                        );
                      })}
                    </IonList>
                  </IonCardContent>
                </IonCard>
              )}
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TablaMultiplicar;
