import {Injectable} from '@nestjs/common'

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    getTasks(): User {
        // return ['Task 1', 'Task 2', 'Task 3'];
        return {
            name: 'Task 1', 
            age: 20
        };
    }

    createTask(){
        return 'Task created';
    }

    updateTask(){
        return 'Task updated';
    }

}