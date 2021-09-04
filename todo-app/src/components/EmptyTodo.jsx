
import { Text } from '@chakra-ui/react';

const EmptyTodo = () => {
    return (
        <Text
            p={5}
            bg='red.400'
            color='white'
            borderRadius={10}
        >No Todo Items</Text>
    )
}

export default EmptyTodo;