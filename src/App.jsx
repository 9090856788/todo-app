/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { VStack, Box } from "@chakra-ui/react";
//
const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const deletetodo = todos.filter((todos) => todos.id !== id);
    setTodos(deletetodo);
  };

  return (
    <VStack>
      <Header />
      <Box w="100%" maxW={{ base: "80vh", sm: "80vh", lg: "50vh", xl: "40vh" }}>
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </Box>
    </VStack>
  );
};

export default App;
