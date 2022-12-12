import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    View,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';

const TestAvoid = () => {
    return (
        <KeyboardAvoidingView
            style={styles.avoid}
            // behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
            behavior={Platform.select({ ios: 'position' })}
            contentContainerStyle={{ flex: 1 }}
        >
            <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                <View style={[styles.view, { backgroundColor: '#047857' }]}>
                    <Image
                        // eslint-disable-next-line no-undef
                        source={require('../../assets/main.png')}
                        stlye={styles.image}
                        resizeMode={'cover'}
                    />
                </View>
                <View style={[styles.view, { backgroundColor: '#0369a1' }]}>
                    <Input
                        title={'email'}
                        placeholder={'your@email.com'}
                        keyboardType={KeyboardTypes.EMAIL}
                        returnKeyType={ReturnKeyTypes.NEXT}
                    />
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    avoid: { flex: 1 },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: { width: 200, height: 200 },
});
export default TestAvoid;
