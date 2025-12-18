export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export let tasks: Task[] = [];

export const setTasks = (newTasks: Task[]) => {
  tasks = newTasks;
};
