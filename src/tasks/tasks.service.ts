import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{

    getTasks() {
        return ["Task 1", "Task 2", "Task 3", "Task 4"]
    }

    createTask() {
        return 'Creando tarea'
    }

    updateTask() {
        return 'Actualizando tarea'
    }

    deleteTask() {
        return 'Eliminando tarea'
    }

    updateTaskStatus() {
        return 'Actualizando estado de la tarea'
    }
}