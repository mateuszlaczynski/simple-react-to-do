import {useState, useEffect} from "react"

const Todo = () => {
    const [task, setTask] = useState({text:'', dateStarted:'', id:'', done: false})
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        console.log("changed")
    },[tasks])
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        var date = new Date();
        var month = date.getMonth()
        if (month < 10) {
            month = `0${month}`
        }
        var day = date.getDay()
        if (day < 10) {
            day = `0${day}`
        }
        var today = day + ":" + month + ":" + date.getFullYear();

        setTask({...task, [name]:value,
        dateStarted:today,
        id: new Date().getTime().toString(),
        done:false})
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.text && task.dateStarted) {
            const newTask = task
            setTasks([...tasks, newTask])
            setTask({text:'', dateStarted:'', done: false})
        }
    }

    const taskDone = (id) => {
            var updatedTasks = tasks.map(task => {
                if (task.id === id) {
                    task.done = !task.done
                }
                return task
            });
            setTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks)
    }   

    return (
    <>
    <form>
        <input className="input" type="text" id="text" name="text" value={task.text} onChange={handleChange}></input>
        <button className="input-button"type="submit" onClick={addTask}>Add Task</button>
    </form>

        {tasks.map((task) => {
            return (
            <div className="task" key={task.dateStarted}>
                {task.done ? <h3><strike>{task.text}: {task.dateStarted}</strike></h3>
                : 
                <h3>{task.text}: {task.dateStarted}</h3>}
                {!task.done && <button className="button-done" onClick={() => taskDone(task.id)}>✔</button>}
                <button className="button-delete" onClick={() => deleteTask(task.id)}>🗑</button>
            </div>
            );
        })}
    </>
    )
}

export default Todo;