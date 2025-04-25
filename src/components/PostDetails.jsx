import React from 'react';
// TODO: Exercice 3 - Importer useTheme

/**
 * Composant d'affichage détaillé d'un post
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.post - Le post à afficher
 * @param {Function} props.onClose - Fonction pour fermer les détails
 * @param {Function} props.onTagClick - Fonction appelée lors du clic sur un tag
 */
function PostDetails({ post, onClose, onTagClick }) {
  // TODO: Exercice 3 - Utiliser le hook useTheme
  
  // TODO: Exercice 3 - Utiliser useMemo pour calculer les classes CSS
  const themeClasses = {
    card: '',
    badge: '',
    button: ''
  };
  
  if (!post) return null;
  
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{post.title}</h5>
        <button 
          className="btn btn-sm"
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      
      <div className="card-body">
        {/* TODO: Exercice 4 - Afficher le contenu du post */}
        
        {/* TODO: Exercice 4 - Afficher les réactions et l'utilisateur */}
        
        {/* TODO: Exercice 4 - Afficher les tags */}
      </div>
    </div>
  );
}

// TODO: Exercice 3 - Utiliser React.memo pour optimiser les rendus
export default PostDetails;