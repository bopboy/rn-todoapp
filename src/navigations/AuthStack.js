import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import HeaderLeftButton from '../components/headerLeftButton';
import HeaderRightButton from '../components/headerRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                contentStyle: { backgroundColor: WHITE },
                headerTitleAlign: 'center',
                headerTintColor: PRIMARY.DEFAULT,
                headerTitleStyle: { fontWeight: '700' },
                title: 'TODO LIST',
                headerBackTitleVisible: false,
                headerLeft: HeaderLeftButton,
            }}
        >
            <Stack.Screen
                name={'List'}
                component={ListScreen}
                options={{ headerRight: HeaderRightButton }}
            />
            <Stack.Screen
                name={'Home'}
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={'Settings'} component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
