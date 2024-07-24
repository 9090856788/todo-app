/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { VStack, Divider, StackDivider } from "@chakra-ui/react";
import Todo from "./Todo";
import EmptyTodo from "./EmptyTodo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <VStack
      borderWidth={todos.length > 0 ? "1px" : "none"}
      alignItems="stretch"
      isRound="true"
      borderRadius={10}
      mt={5}
      bg="#FFB6C1"
      divider={<StackDivider />}
    >
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} deleteTodo={deleteTodo} />)
      ) : (
        <EmptyTodo />
      )}
    </VStack>
  );
};

export default Todos;
