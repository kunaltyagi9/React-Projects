import { VStack, StackDivider, Text } from "@chakra-ui/react"

//components
import Todo from './Todo';
import EmptyTodo from './EmptyTodo';

const Todos = ({ todos, deleteTodo }) => {
    
    return (
        <VStack
            divider={<StackDivider />}
            borderWidth={todos.length > 0 ? '1px' : 'none' }
            alignItems='stretch'  
            mt={8}  
        >
            {
                todos.length > 0 ? todos.map(todo => (
                    <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
                )) : <EmptyTodo />
            }
        </VStack>
    )
}

export default Todos;