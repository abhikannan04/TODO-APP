export function Todos({todos}){

    return (
        <div>
           {todos.map(function(todo){ 
                return <div>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <button>{todos.completed==true ? "Completed":"Mark As Done" }</button>
                </div>}
                )}
        </div>
    )
}