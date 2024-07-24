/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { nanoid } from "nanoid";

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo) {
      toast({
        title: "No Todo Item Here",
        description: "Please Add any Item",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: nanoid(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  return (
    <>
      <HStack>
        <Input
          placeholder="Add Todo Item...."
          size="md"
          variant="filled"
          value={todo}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button
          bgGradient="linear(to-r, red.500, yellow.500, pink.500)"
          variant="filled"
          px={10}
          onClick={() => {
            addTodo();
          }}
        >
          Add
        </Button>
      </HStack>
    </>
  );
};

export default AddTodo;
