import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import usePosts from './hooks/usePosts';
// TODO: Exercice 3 - Importer ThemeToggle
// TODO: Exercice 3 - Importer ThemeProvider et useTheme
// TODO: Exercice 2 - Importer le hook useLocalStorage

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  // TODO: Exercice 4 - Ajouter l'état pour le tag sélectionné
  
  // Exercice 1 - Utiliser le hook usePosts pour récupérer les posts
  const { posts, loading, error, hasMore, fetchPosts } = usePosts({ searchTerm, limit: 10 });
  
  // TODO: Exercice 2 - Utiliser useLocalStorage pour le mode de défilement
  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    console.log('App search term:', term);
  };
  
  // TODO: Exercice 4 - Ajouter le gestionnaire pour la sélection de tag
  
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold">Blog</h1>
          {/* TODO: Exercice 3 - Ajouter le ThemeToggle */}
        </div>
      </header>
      
      <main>
        <PostSearch onSearch={handleSearchChange} />
        
        {/* Exercice 1 - Afficher un message d'erreur si nécessaire */}
        {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
        
        {/* TODO: Exercice 4 - Ajouter le composant PostDetails */}
        
        {/* Exercice 1 - Passer les props nécessaires à PostList */}
        <PostList
          posts={posts}
          loading={loading}
          hasMore={hasMore}
          onLoadMore={() => fetchPosts(false)}
          onPostClick={(post) => console.log('Post clicked:', post)}
          onTagClick={(tag) => console.log('Tag clicked:', tag)}
          infiniteScroll={false}
        />
      </main>
      
      <footer className="pt-3 mt-4 text-center border-top">
        <p>
          TP React Hooks - Blog · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;