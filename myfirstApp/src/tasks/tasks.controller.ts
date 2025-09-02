import { Controller, Get, Post, Put } from '@nestjs/common'
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
    tasksService:TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get('/tasks')
    getAllTasks() {
        // buscar en una bd
        // peticion a otro backen o api
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTask() {
        return this.tasksService.createTask();
    }

    @Put('/tasks')
    updateTask() {
        return this.tasksService.updateTask();
    }
}
