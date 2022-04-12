import React, {useState} from 'react';
import './Component07.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";


export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
type taskType = {
    [id: string]: { id: string, title: string, isDone: boolean }[]
}

export const Component07 = () => {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<taskType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todoListId: string, tId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(task => task.id != tId)})
    }

    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]})
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(task => task.id === taskId ? {...task, isDone} : task)})
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map((todolist) => todolist.id === todolistID ? {...todolist, filter: value} : todolist))
    }


    return (
        <div>
            <h3>Урок 7</h3>

            <div className="App_todolist">
                {todolists.map((todolist) => {

                    let tasksForTodolist = tasks[todolist.id];

                    if (todolist.filter === "active") {
                        tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone);
                    }
                    if (todolist.filter === "completed") {
                        tasksForTodolist = tasks[todolist.id].filter(t => t.isDone);
                    }


                    return <Todolist key={todolist.id}
                                     title={todolist.title}
                                     tasks={tasksForTodolist}
                                     removeTask={removeTask}
                                     changeFilter={changeFilter}
                                     addTask={addTask}
                                     changeTaskStatus={changeStatus}
                                     filter={todolist.filter}
                                     todoListID={todolist.id}
                    />
                })}
            </div>
        </div>
    );
}

