import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  
export type TodoState = {
todos: Todo[];
};

export const initialState: TodoState = {
todos: [],
};

const todoSlice = createSlice({
  name : "todo",
  initialState ,
  reducers : {
    // 추가
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
  // 삭제
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

  // 토글 (완료/해제)
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;