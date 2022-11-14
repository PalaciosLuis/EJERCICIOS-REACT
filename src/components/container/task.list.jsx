import React from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Javier', 'Estudiante', true, LEVELS.NORMAL);
    return (
        <div>
            <div>
                your Tasks:
            </div>
            {/* Aplicar un for o un map para reenderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>


    )
}



export default TaskListComponent

