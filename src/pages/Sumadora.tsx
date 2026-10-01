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
  IonText,
} from '@ionic/react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calcularSuma = (val1: string, val2: string) => {
    if (val1 === '' && val2 === '') {
      setResultado(null);
      setError('');
      return;
    }
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado(null);
      if (val1 !== '' && isNaN(n1)) setError('Por favor ingrese un número válido en el Número A.');
      else if (val2 !== '' && isNaN(n2)) setError('Por favor ingrese un número válido en el Número B.');
      else setError('');
    } else {
      setResultado(n1 + n2);
      setError('');
    }
  };

  const handleNum1Change = (e: CustomEvent) => {
    const val = e.detail.value!;
    setNum1(val);
    calcularSuma(val, num2);
  };

  const handleNum2Change = (e: CustomEvent) => {
    const val = e.detail.value!;
    setNum2(val);
    calcularSuma(num1, val);
  };

  const limpiar = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
    setError('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sumadora</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ maxWidth: '500px', margin: '20px auto' }}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Suma Dinámica de Dos Números</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem className="ion-margin-bottom">
                <IonInput
                  label="Número A"
                  labelPlacement="stacked"
                  type="number"
                  placeholder="Ingrese el primer número"
                  value={num1}
                  onIonInput={handleNum1Change}
                />
              </IonItem>

              <IonItem className="ion-margin-bottom">
                <IonInput
                  label="Número B"
                  labelPlacement="stacked"
                  type="number"
                  placeholder="Ingrese el segundo número"
                  value={num2}
                  onIonInput={handleNum2Change}
                />
              </IonItem>

              <div style={{ display: 'flex', gap: '10px' }}>
                <IonButton expand="block" onClick={() => calcularSuma(num1, num2)} className="ion-margin-top" style={{ flex: 1 }}>
                  Calcular Suma
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

              {resultado !== null && (
                <div className="ion-text-center ion-margin-top">
                  <IonText color="primary">
                    <h2>Resultado Exacto: <strong>{resultado}</strong></h2>
                  </IonText>
                </div>
              )}
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;
