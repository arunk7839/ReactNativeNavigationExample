import React, { Component } from "react";
import {StyleSheet, FlatList} from "react-native";
import movieImageOne from "../../assets/black_panther.jpg";
import movieImageTwo from "../../assets/death_of_stalin.jpg";
import movieImageThree from "../../assets/the_rider.jpg";
import movieImageFour from "../../assets/zama.jpg";
import movieImageFive from "../../assets/annhilation.jpg";
import ListItem from "../../component/ListItem/ListItem";


class Movies extends Component{


onItemPressedHandler= (name,image)=>{

this.props.navigator.push({
      screen: "navigation-example.MovieDetail",
      title: name,
      passProps: {
        movieName: name,
        movieImage: image
      }
    });
}
render(){

return(
 <FlatList
      style={styles.listContainer}
       data={[
                  { movieName: 'Black Panther',
                  movieImage:  movieImageOne,
                  key: 'a'
                   },
                  { movieName: 'The Death of Stalin',
                  movieImage:  movieImageTwo,
                  key: 'b'
                   },
                   { movieName: 'The Rider',
                    movieImage:  movieImageThree,
                    key: 'c'
                    },
                   { movieName: 'Zama',
                     movieImage:  movieImageFour,
                     key: 'd'
                    },
                   { movieName: 'Annihilation',
                     movieImage:  movieImageFive,
                     key: 'e'
                    },
                ]}

      renderItem={(info) => (
        <ListItem
          movieName={info.item.movieName}
          movieImage={info.item.movieImage}
          onItemPressed={() => this.onItemPressedHandler(info.item.movieName,info.item.movieImage)}
        />
      )}
    />
);
}

}
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default Movies;

