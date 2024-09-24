import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}
    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    getAllTasks(@Query() query: any) {
       return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
       return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a task'})
    @UsePipes(new ValidationPipe())
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