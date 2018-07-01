import { Navigation } from "react-native-navigation";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import MovieDetail from "./src/screens/MovieDetail/MovieDetail";
import Movies from "./src/screens/Movies/Movies";
import Plays from "./src/screens/Plays/Plays";
import Events from "./src/screens/Events/Events";

// Register Screens
Navigation.registerComponent(
  "navigation-example.MainScreen",
  () => MainScreen);

  Navigation.registerComponent(
   "navigation-example.Movies",
   () => Movies);

  Navigation.registerComponent(
   "navigation-example.Plays",
   () => Plays);

  Navigation.registerComponent(
   "navigation-example.Events",
   () => Events);

  Navigation.registerComponent(
  "navigation-example.MovieDetail",
   () => MovieDetail);



// Starting App
Navigation.startSingleScreenApp({
  screen: {
    screen: "navigation-example.MainScreen",
    title: "Entertainment"
  }
});