import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from "../components/ListHome";
import ListCity from "../pages/ListCity";

const Tab=createBottomTabNavigator()

export default function TabRoutes() {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#665ed6',
            tabBarInactiveTintColor: '#8e8e8e',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black'
            },
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color}) => <Ionicons name="home" size={25} color={color} />
            }} />
            <Tab.Screen name="Cidades" component={ListCity} options={{
                tabBarIcon: ({color}) => <Ionicons name="list" size={25} color={color} />
            }} />
        </Tab.Navigator>
    )
};