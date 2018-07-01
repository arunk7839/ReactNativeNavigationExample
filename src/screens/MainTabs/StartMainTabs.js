import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-videocam" : "ios-videocam", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-musical-notes" : "ios-musical-notes", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-easel" : "ios-easel", 30),

    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "navigation-example.Movies",
                    label: "Movies",
                    title: "Movies",
                    icon: sources[0],


                },
                {
                    screen: "navigation-example.Plays",
                    label: "Plays",
                    title: "Plays",
                    icon: sources[1],


                },
                {
                    screen: "navigation-example.Events",
                    label: "Events",
                    title: "Events",
                    icon: sources[2],
                                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },

            appStyle: {
                tabBarSelectedButtonColor: "orange"
            }

        });
    });
};

export default startTabs;