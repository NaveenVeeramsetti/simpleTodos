// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteTodo} = props
  const {title, id} = todoItemDetails

  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <div className="list-container">
        <p className="list-description">{title}</p>
        <button className="button" type="button" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
