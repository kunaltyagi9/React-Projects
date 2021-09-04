import { useState } from 'react';
import { Button, HStack, Input, useToast } from "@chakra-ui/react"
import { nanoid } from 'nanoid';


const AddTodo = ({ todos, setTodos }) => {

    const [todo, setTodo] = useState('');
    const toast = useToast();

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const addTodo = () => {
        if(!todo) {
            toast({
                title: 'No Todo item to Add',
                status: 'error',
                duration: '3000',
                isClosable: true
            })
            return;
        };

        const newTodo = {
            id: nanoid(),
            text: todo
        }

        setTodos([...todos, newTodo])
        setTodo('')
    }

    return (
        <HStack>
            <Input 
                variant="filled"
                placeholder="Add todo item..."
                onChange={(e) => handleChange(e)}
                value={todo}
            />
            <Button
                colorScheme="blue"
                px={8}
                onClick={() => addTodo()}
            >Add Todo</Button>
        </HStack>
    )
}

export default AddTodo;