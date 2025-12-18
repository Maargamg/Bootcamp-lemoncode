import { Task } from "./modelo";

let nextId = 1;

export const addNewTask = (name: string, tasks: Task[]): Task[] => {
  const newTask: Task = {
    id: nextId++,
    name,
    isCompleted: false,
  };

  return [...tasks, newTask];
};

export const toggleTaskCompleted = (id: number, tasks: Task[]): Task[] => {
  return tasks.map(task =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
};

export const updateTaskName = (
  id: number,
  newName: string,
  tasks: Task[]
): Task[] => {
  return tasks.map(task =>
    task.id === id ? { ...task, name: newName } : task
  );
};

export const deleteTask = (id: number, tasks: Task[]): Task[] => {
  return tasks.filter(task => task.id !== id);
};

export const completeAllTasks = (tasks: Task[]): Task[] => {
  return tasks.map(task => ({ ...task, isCompleted: true }));
};
