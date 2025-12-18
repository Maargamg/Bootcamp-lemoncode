import { tasks, setTasks } from "./modelo";
import {
  addNewTask,
  toggleTaskCompleted,
  updateTaskName,
  deleteTask,
  completeAllTasks,
} from "./motor";

const inputTask = document.getElementById("task") as HTMLInputElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const message = document.querySelector(".message") as HTMLParagraphElement;
const markAllButton = document.getElementById("allTrue") as HTMLButtonElement;

const clearInput = () => (inputTask.value = "");
const showMessage = (text: string) => (message.textContent = text);
const clearMessage = () => (message.textContent = "");


export const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    checkbox.classList.add("tick");

    const input = document.createElement("input");
    input.type = "text";
    input.value = task.name;
    input.classList.add("taskEdit");
    if (task.isCompleted) input.classList.add("completed");

    checkbox.addEventListener("change", () => {
      setTasks(toggleTaskCompleted(task.id, tasks));
      renderTasks();
    });

    input.addEventListener("change", () => {
      setTasks(updateTaskName(task.id, input.value, tasks));
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      setTasks(deleteTask(task.id, tasks));
      renderTasks();
    });

    content.appendChild(checkbox);
    content.appendChild(input);
    li.appendChild(content);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
};

export const setupUI = () => {
  addButton.addEventListener("click", handleAddTask);

  inputTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAddTask();
  });

  markAllButton.addEventListener("click", () => {
    setTasks(completeAllTasks(tasks));
    renderTasks();
  });
};

const handleAddTask = () => {
  clearMessage();
  const taskName = inputTask.value.trim();

  if (!taskName) {
    showMessage("❌ La tarea no puede estar vacía");
    return;
  }

  if (tasks.some(task => task.name === taskName)) {
    showMessage("❌ La tarea ya existe");
    return;
  }

  setTasks(addNewTask(taskName, tasks));
  renderTasks();
  clearInput();
};

