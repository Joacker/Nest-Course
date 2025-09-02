import { Controller, Get } from '@nestjs/common'

@Controller({})
export class TaskController {

    @Get('/tasks')
    getAllTasks() {
        // buscar en una bd
        // peticion a otro backen o api
        return 'Obteniendo todas las tareas';
    }

    // @Get('/')
    // index() {
    //     return 'Pagina inicial';
    // }
}
