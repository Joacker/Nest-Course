import { Controller, Get } from '@nestjs/common'
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

    // @Get('/')
    // index() {
    //     return 'Pagina inicial';
    // }
}
