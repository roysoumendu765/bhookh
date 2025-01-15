import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, refreshRecipes } from '../redux/slice/recipeSlice';
import { RootState, AppDispatch } from '../redux/store';

const RecipeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { recipes, isLoading, error, page, hasMore } = useSelector(
    (state: RootState) => state.recipes
  );

  useEffect(() => {
    if (hasMore && !isLoading) {
      dispatch(fetchRecipes(page));
    }
  }, [dispatch, page, hasMore, isLoading]);

  const renderRecipe = ({ item }: { item: any }) => (
    <View style={styles.recipeCard}>
      <Image
        source={{ uri: item.image || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Rs {item.price || 150}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleRefresh = () => {
    dispatch(refreshRecipes());
    dispatch(fetchRecipes(1)); 
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      dispatch(fetchRecipes(page + 1));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hello, Abhishek.</Text>
      <Text style={styles.subGreeting}>What do you want to eat?</Text>

      <TextInput placeholder="Search" style={styles.searchBar} />

      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore} 
        onEndReachedThreshold={0.5} 
        ListFooterComponent={isLoading ? <ActivityIndicator size="small" color="#ff5722" /> : null}
        refreshing={isLoading} 
        onRefresh={handleRefresh}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 18,
    color: '#555',
    marginVertical: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  recipeCard: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecipeList;