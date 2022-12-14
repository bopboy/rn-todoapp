import { FlatList, StyleSheet, View } from 'react-native';
import { GRAY } from '../colors';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';

const Separator = () => {
    return <View style={styles.separator}></View>;
};

const List = ({ data }) => (
    <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponentStyle={{ height: 10 }}
    />
);

List.propTypes = {
    data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: GRAY.LIGHT,
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default List;