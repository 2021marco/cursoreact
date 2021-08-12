import Task from './Task'

const Tasks = (props) =>{
return(
  <div>
  
  {props.tasks.map((task) => (<Task key={task.id} text={task.text} day={task.day} onDelete={props.onDelete} />))}

  </div>
)
}
export default Tasks