import React from 'react';
// TODO: Exercice 3 - Importer useTheme

/**
 * Composant d'indicateur de chargement
 */
function LoadingSpinner() {
  // TODO: Exercice 3 - Utiliser le hook useTheme
  
  return (
    <div className="d-flex justify-content-center my-4">
      <div 
        className="spinner-border" 
        role="status"
      >
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;