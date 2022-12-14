import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BLACK, DANGER, PRIMARY } from '../colors';

const ListItem = memo(({ item }) => {
    const checkboxProps = {
        name: item.isDone ? 'checkbox-marked' : 'checkbox-blank-outline',
        color: item.isDone ? PRIMARY.DEFAULT : BLACK,
        size: 20,
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {}} hitSlop={10}>
                {/* {item.isDone ? (
                    <MaterialCommunityIcons
                        name="checkbox-marked"
                        size={20}
                        color={PRIMARY.DEFAULT}
                    />
                ) : (
                    <MaterialCommunityIcons
                        name="checkbox-blank-outline"
                        size={20}
                        color={PRIMARY.DEFAULT}
                    />
                )} */}
                <MaterialCommunityIcons {...checkboxProps} />
            </Pressable>
            <Text style={styles.task}>{item.task}</Text>
            <Pressable>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={20}
                    color={DANGER.DEFAULT}
                />
            </Pressable>
        </View>
    );
});
ListItem.displayName = 'ListItem';

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    task: {
        fontSize: 16,
        flex: 1,
        marginHorizontal: 10,
    },
});

export default ListItem;
