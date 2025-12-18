import { describe, it, expect } from "vitest";
import { addNewTask } from "./motor";
import { Task } from "./modelo";

describe("Motor - addNewTask", () => {
  it("debería añadir una nueva tarea al array", () => {
    // Arrange
    const tasks: Task[] = [];
    const newTaskName = "Comprar pan";

    // Act
    const result = addNewTask(newTaskName, tasks);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Comprar pan");
    expect(result[0].isCompleted).toBe(false);
  });
});

