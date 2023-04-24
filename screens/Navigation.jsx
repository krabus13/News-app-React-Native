import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FullPagePost } from "./FullPagePost";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Новини" }}
        />
        <Stack.Screen
          name="Page"
          component={FullPagePost}
          options={{ title: "Стаття" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
