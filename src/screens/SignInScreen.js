import { useEffect, useRef, useState } from 'react';
import { Alert, Image, Keyboard, StyleSheet, View } from 'react-native';
import { signIn } from '../api/auth';
import Button from '../components/Button';
import Input, {
    IconNames,
    KeyboardTypes,
    ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import PropTypes from 'prop-types';

const SignInScreen = ({ navigation }) => {
    // console.log(navigation);
    // console.log(route);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     navigation.setOptions({
    //         contentStyle: {
    //             backgroundColor: email ? 'skyblue' : 'lightgray',
    //         },
    //     });
    // }, [navigation, email]);

    useEffect(() => {
        setDisabled(!email || !password);
    }, [email, password]);

    const onSubmit = async () => {
        if (!disabled && !isLoading) {
            Keyboard.dismiss();
            setIsLoading(true);
            try {
                await signIn(email, password);
                setIsLoading(false);
                navigation.navigate('List');
            } catch (e) {
                Alert.alert('SignIn Error', e, [
                    { text: 'OK', onPress: () => setIsLoading(false) },
                ]);
            }
        }
    };

    return (
        <SafeInputView>
            <View style={styles.container}>
                <Image
                    // eslint-disable-next-line no-undef
                    source={require('../../assets/main.png')}
                    stlye={styles.image}
                    resizeMode={'cover'}
                />
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text.trim())}
                    title={'email'}
                    placeholder={'your@email.com'}
                    keyboardType={KeyboardTypes.EMAIL}
                    returnKeyType={ReturnKeyTypes.NEXT}
                    iconName={IconNames.EMAIL}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                    ref={passwordRef}
                    value={password}
                    onChangeText={(text) => setPassword(text.trim())}
                    title={'password'}
                    secureTextEntry
                    iconName={IconNames.PASSWORD}
                    onSubmitEditing={onSubmit}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title={'LOGIN'}
                        onPress={onSubmit}
                        disabled={disabled}
                        isLoading={isLoading}
                    />
                </View>
            </View>
        </SafeInputView>
    );
};

SignInScreen.propTypes = {
    navigation: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderWidth: 1,
        width: 200,
        height: 200,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default SignInScreen;
