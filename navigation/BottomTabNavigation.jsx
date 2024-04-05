import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Search,Cart } from '../screens/index';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
const Tab = createBottomTabNavigator();

const tabBarScreenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKayboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 55,
    elevation: 0,
    borderTopLeftRadius:50,
    borderTopRightRadius: 50,
    backgroundColor:COLORS.black
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={focused ? COLORS.lightWhite : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={28}
                color={focused ? COLORS.lightWhite : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={28}
                color={focused ? COLORS.lightWhite : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
