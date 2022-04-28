import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    //   <View style={{width:'85%', padding:0}}>
          <Searchbar 
            style={{width:'90%', height: 50, borderRadius:10}}
            placeholder="Cari Produk" 
            onChangeText={onChangeSearch} 
            value={searchQuery} />
    //   </View>
  )};

export default SearchBar;
