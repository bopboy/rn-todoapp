import { Image, StyleSheet, View } from 'react-native';
import Input from '../components/Input';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                // eslint-disable-next-line no-undef
                source={require('../../assets/test.png')}
                stlye={styles.image}
                resizeMode={'cover'}
            />
            <Input title={'email'} placeholder={'your@email.com'} />
            <Input title={'password'} />
        </View>
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
