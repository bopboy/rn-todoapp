import EmptyList from '../components/EmptyList';
import List from '../components/List';

const ListScreen = () => {
    const todos = [
        // { id: 1, task: 'React Native 1', isDone: false },
        // { id: 2, task: 'React Native 2', isDone: true },
        // { id: 3, task: 'React Native 3', isDone: false },
        // { id: 4, task: 'React Native 4', isDone: true },
        // { id: 5, task: 'React Native 5', isDone: false },
        // { id: 6, task: 'React Native 6', isDone: false },
    ];

    return todos.length ? <List data={todos} /> : <EmptyList />;
};

export default ListScreen;
