import { useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Input, {
    IconNames,
    KeyboardTypes,
    ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const onSubmit = () => {
        console.log('onSubmit');
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
            </View>
        </SafeInputView>
    );
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
});
export default SignInScreen;
