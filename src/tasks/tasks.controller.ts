import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getAllTasks(@Query() query: any) {
       return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
       return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: createTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: updateTaskDto) {
        return this.tasksService.updateTask(task);
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