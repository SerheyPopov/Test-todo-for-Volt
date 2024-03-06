import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  "name": "todo",
  "initialState": {
    "todo": [],
  },
  "reducers": {
    addToDo(state, action) {
      state.todo = [...state.todo, action.payload];
    },
    deleteToDo(state, action) {
      const index = state.todo.findIndex((fave) => fave.id === action.payload);
      state.todo.splice(index, 1);
    },
    editToDo(state, action) {
      state.todo = state.todo.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            "status": action.payload.status,
          };
        }
        return task;
      });
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = toDoSlice.actions;

export const todoReducer = toDoSlice.reducer;
