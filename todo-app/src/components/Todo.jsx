

import { Text, IconButton, HStack, StackDivider } from "@chakra-ui/react";
import { FaTrash } from 'react-icons/fa';


const Todo = ({ todo, deleteTodo }) => {
    return (
        <HStack p={2}>
            <Text w='100%' ml={4}>{todo.text}</Text>
            <IconButton icon={ <FaTrash/> } 
                isRound={true}
                onClick={() => deleteTodo(todo.id)}
            />
        </HStack>
    )
}

export default Todo;