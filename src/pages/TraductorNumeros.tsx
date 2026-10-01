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

const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const decenas2 = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

export function numeroALetras(num: number): string {
  if (num === 0) return 'cero';
  if (num === 1000) return 'mil';
  if (num < 1 || num > 1000) return 'Número fuera de rango (1 - 1000)';

  if (num === 100) {
    return 'cien';
  }

  let letras = '';

  const c = Math.floor(num / 100);
  const restoC = num % 100;

  if (c > 0) {
    letras += centenas[c] + ' ';
  }

  if (restoC >= 10 && restoC <= 19) {
    letras += decenas[restoC - 10];
  } else if (restoC >= 21 && restoC <= 29) {
    const unidadesVeinti = restoC - 20;
    if (unidadesVeinti === 1) letras += 'veintiuno';
    else if (unidadesVeinti === 2) letras += 'veintidós';
    else if (unidadesVeinti === 3) letras += 'veintitrés';
    else if (unidadesVeinti === 6) letras += 'veintiséis';
    else letras += 'veinti' + unidades[unidadesVeinti];
  } else {
    const d = Math.floor(restoC / 10);
    const u = restoC % 10;

    if (d > 0) {
      letras += decenas2[d];
      if (u > 0) {
        letras += ' y ' + unidades[u];
      }
    } else if (u > 0) {
      letras += unidades[u];
    }
  }

  return letras.trim();
}

const TraductorNumeros: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [textoTraducido, setTextoTraducido] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const traducir = (val: string) => {
    setInputVal(val);
    if (val === '') {
      setTextoTraducido('');
      setErrorMsg('');
      return;
    }

    const n = parseInt(val, 10);
    if (isNaN(n)) {
      setTextoTraducido('');
      setErrorMsg('Por favor ingrese un número válido.');
      return;
    }

    if (n < 1 || n > 1000) {
      setTextoTraducido('');
      setErrorMsg('Error: El número debe estar entre 1 y 1000.');
      return;
    }

    setErrorMsg('');
    setTextoTraducido(numeroALetras(n));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Traductor de Números</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ maxWidth: '500px', margin: '20px auto' }}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Traducir Número a Letras (1 - 1000)</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem className="ion-margin-bottom">
                <IonInput
                  label="Número (1 - 1000)"
                  labelPlacement="stacked"
                  type="number"
                  placeholder="Ej. 125"
                  value={inputVal}
                  onIonInput={(e) => traducir(e.detail.value!)}
                />
              </IonItem>

              <IonButton expand="block" onClick={() => traducir(inputVal)} className="ion-margin-top">
                Traducir a Letras
              </IonButton>

              {errorMsg && (
                <div className="ion-text-center ion-margin-top">
                  <IonText color="danger">
                    <p style={{ fontWeight: 'bold' }}>{errorMsg}</p>
                  </IonText>
                </div>
              )}

              {textoTraducido && (
                <div className="ion-text-center ion-margin-top">
                  <IonText color="primary">
                    <h2>Resultado:</h2>
                    <p style={{ fontSize: '20px', textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {textoTraducido}
                    </p>
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

export default TraductorNumeros;
