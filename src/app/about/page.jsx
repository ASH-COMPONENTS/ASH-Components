async function aboutus() {
let api = 'https://jsonplaceholder.typicode.com/todos/1';
let response = await fetch(api);
const todo = await response.json();

  return (
    <>
    <h1>hello on about todos</h1>
    <div>
        <h1>
          {todo.id}
        </h1>
          <h1>{todo.title}</h1>
    </div>
    </>
  )
}

export default aboutus