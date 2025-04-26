import { useState, useEffect } from 'react';
// TODO: Exercice 2 - Importer useDebounce

/**
 * Hook personnalisé pour gérer les posts du blog
 * @param {Object} options - Options de configuration
 * @param {string} options.searchTerm - Terme de recherche
 * @param {string} options.tag - Tag à filtrer
 * @param {number} options.limit - Nombre d'éléments par page
 * @param {boolean} options.infinite - Mode de chargement infini vs pagination
 * @returns {Object} État et fonctions pour gérer les posts
 */
function usePosts({ searchTerm = '', tag = '', limit = 10, infinite = true } = {}) {
  const [allPosts, setAllPosts] = useState([]); // Tous les posts récupérés
  const [posts, setPosts] = useState([]); // Posts filtrés
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // TODO: Exercice 4 - Ajouter l'état pour le post sélectionné
  // TODO: Exercice 2 - Utiliser useDebounce pour le terme de recherche
  // TODO: Exercice 3 - Utiliser useCallback pour construire l'URL de l'API
  const buildApiUrl = (skip = 0) => {
    return 'https://dummyjson.com/posts';
  };

  const fetchPosts = async (reset = false) => {
    try {
      setLoading(true);
      const url = `${buildApiUrl(skip)}?limit=${limit}&skip=${reset ? 0 : skip}`;
      console.log('Fetching posts from:', url);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      console.log('API response:', data);

      if (!data.posts) throw new Error('No posts returned from API');
      setAllPosts((prevAllPosts) => 
        reset ? data.posts : [...prevAllPosts, ...data.posts]
      );
      setTotal(data.total);
      setSkip(reset ? limit : skip + limit);
      setHasMore(data.posts.length === limit);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les posts en fonction de searchTerm
  useEffect(() => {
    if (!searchTerm) {
      setPosts(allPosts); // Afficher tous les posts si pas de recherche
    } else {
      const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Filtered posts:', filteredPosts);
      setPosts(filteredPosts);
    }
  }, [searchTerm, allPosts]);

  // Charger les posts initiaux ou à la pagination
  useEffect(() => {
    fetchPosts(true);
  }, [tag, limit]); // Ne pas inclure searchTerm ici pour éviter des rechargements inutiles

  // TODO: Exercice 4 - Implémenter la fonction pour charger plus de posts
  // TODO: Exercice 3 - Utiliser useMemo pour calculer les tags uniques
  // TODO: Exercice 4 - Implémenter la fonction pour charger un post par son ID

  return {
    posts,
    loading,
    error,
    skip,
    total,
    hasMore,
    fetchPosts
  };
}

export default usePosts;