export const todoListSelector = (state) => {
  const todoRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filter.search);
  });
  return todoRemaining;
};

export const searchFilter = (state) => state.filter.search;
