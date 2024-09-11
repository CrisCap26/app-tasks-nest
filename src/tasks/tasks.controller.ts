import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController {

    @Get('/tasks')
    getAllTasks() {
        return 'Get All tasks';
    }

    @Get('/')
    index() {
        return 'Home';
    }
}