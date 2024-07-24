/* eslint-disable no-unused-vars */
import React from 'react';
import { Text } from '@chakra-ui/react';

const EmptyTodo = () => {
  return (
    <>
        <Text
            p={5}
            bg='red.400'
            color = 'white'
            borderRadius={10}
        >
        No Todo item to Display</Text>
    </>
  )
}

export default EmptyTodo