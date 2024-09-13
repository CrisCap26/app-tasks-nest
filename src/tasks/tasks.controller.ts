import { Controller, Get, Post, Put, Delete, Patch } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getAllTasks() {
       return this.tasksService.getTasks();
    }

    @Post()
    createTask() {
       return this.tasksService.createTask();
    }

    @Put()
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}