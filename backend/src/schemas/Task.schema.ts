import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Task {
    @Prop({ required: true })
    header: string;

    @Prop({ required: false })
    context?: string;

    @Prop({ required: false })
    status?: string;

    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true })
    color: string;

    @Prop({ required: false })
    hashtags: string[];

    @Prop({ required: false })
    deadline: Date;

    @Prop({ required: false })
    priority: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task)