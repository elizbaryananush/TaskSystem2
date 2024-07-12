import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Task {
    @Prop({ required: true })
    header: string;

    @Prop({ required: false })
    context?: string;

    @Prop({ required: false })
    completed?: boolean;

    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true })
    color: string
}

export const TaskSchema = SchemaFactory.createForClass(Task)