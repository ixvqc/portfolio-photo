import React, { Component } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

class FirebaseStorage extends Component {
    constructor() {
        super();
        // Zainicjuj Firebase z wcześniej skopiowaną konfiguracją
        const firebaseConfig = {
            // Wklej tu swój obiekt konfiguracji Firebase
        };
        const firebaseApp = initializeApp(firebaseConfig);

        this.storage = getStorage(firebaseApp);
    }

    downloadFile = async () => {
        // Określ ścieżkę do pliku w Storage
        const pathReference = ref(this.storage, 'Galeria');

        try {
            // Pobierz URL do pliku
            const url = await getDownloadURL(pathReference);
            // Tutaj możesz użyć pobranego URL do wyświetlenia lub pobrania pliku
            console.log('Pobrany URL:', url);
        } catch (error) {
            // Obsłuż błędy
            console.error('Błąd podczas pobierania pliku:', error);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.downloadFile}>Pobierz plik</button>
            </div>
        );
    }
}

export default FirebaseStorage;
