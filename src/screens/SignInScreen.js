import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
    return (
        // <KeyboardAvoidingView
        //     style={styles.avoid}
        //     behavior={Platform.select({ ios: 'padding' })}
        // >
        //     <Pressable style={styles.avoid} onPress={Keyboard.dismiss}>
        <SafeInputView>
            <View style={styles.container}>
                <Image
                    // eslint-disable-next-line no-undef
                    source={require('../../assets/main.png')}
                    stlye={styles.image}
                    resizeMode={'cover'}
                />
                <Input
                    title={'email'}
                    placeholder={'your@email.com'}
                    keyboardType={KeyboardTypes.EMAIL}
                    returnKeyType={ReturnKeyTypes.NEXT}
                />
                <Input title={'password'} secureTextEntry />
            </View>
        </SafeInputView>
        // </Pressable>
        // </KeyboardAvoidingView>
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
