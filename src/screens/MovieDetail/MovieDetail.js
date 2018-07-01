import React, { Component } from "react";
import {View,Text,StyleSheet,Image,Button} from "react-native";


class MovieDetail extends Component{


backHandler = ()=>{
 this.props.navigator.pop();

}

render(){

return(
<View style={styles.container}>
            <Image
              source={this.props.movieImage}
              style={styles.movieImage}
            />

              <Text style={styles.movieName}>
                        {this.props.movieName}
                      </Text>
                      <Button color="#841584" title="Back" onPress={this.backHandler}/>
                    </View>
          );
}

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    padding:50,


    alignItems: "center",
        justifyContent: 'center'
  },
    movieImage: {
       width: "100%",
       height: "100%"
     },
     movieName: {
       fontWeight: "bold",
       textAlign: "center",
       fontSize: 30,
       color: "#521751",

     }
  });
export default MovieDetail;