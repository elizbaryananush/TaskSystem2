import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskModel: Model<Task>) { }

    async createNewTask(
        header: string, context: string, status: string, hashtags: string[], user_id: string, color: string, deadline: Date, priority: number) {
        const task = new this.taskModel({
            header,
            context,
            status,
            hashtags,
            user_id,
            color,
            deadline,
            priority
        })
        return await task.save()
    }

    async getTask(_id: string): Promise<any> {
        return this.taskModel.findById({ _id }).exec();
    }

    async findAllUsersTask(user_id: string): Promise<any> {
        return this.taskModel.find({ user_id }).exec();
    }

    async updateTask(
        _id: string, header: string, context: string, status: string, color: string, hashtags: string[], deadline: Date, priority: number): Promise<any> {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            throw new Error('Invalid task ID format');
        } else {
            return this.taskModel.findByIdAndUpdate(_id, {
                header: header,
                context: context,
                status: status,
                color: color,
                hashtags: hashtags,
                deadline: deadline,
                priority: priority
            }, { new: true }).exec()
        }
    }

    async deleteTask(_id: string): Promise<any> {
        return this.taskModel.findByIdAndDelete(_id)
    }
}
