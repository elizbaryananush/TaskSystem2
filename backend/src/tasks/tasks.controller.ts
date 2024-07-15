import { Body, Controller, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Post('createNewTask')
    async createNewTask(@Body() body: {
        header: string,
        context: string,
        status: string,
        hashtags: string[],
        user_id: string,
        color: string
    }) {
        return this.tasksService.createNewTask(
            body.header,
            body.context,
            body.status,
            body.hashtags,
            body.user_id,
            body.color
        )
    }

    @Post('getTask')
    async getTask(@Body() body: { _id: string }) {
        return this.tasksService.getTask(body._id)
    }

    @Post('getTasks')
    async getTasks(@Body() body: { user_id: string }) {
        return this.tasksService.findAllUsersTask(body.user_id)
    }

    @Post('updateTask')
    async updateTask(@Body() body: {
        _id: string,
        header: string,
        context: string,
        status: string,
        color: string,
        hashtags: string[],
    }) {
        return this.tasksService.updateTask(
            body._id,
            body.header,
            body.context,
            body.status,
            body.color,
            body.hashtags,
        )
    }

    @Post('deleteTask')
    async deleteTask(@Body() body: { _id: string }) {
        return this.tasksService.deleteTask(body._id)
    }
}
