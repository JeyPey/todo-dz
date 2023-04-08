import React from 'react' 

const todos = [
    {
        title: 'Finish the essay collaboration',
        isComleted: false, 
    },
    {
        title: 'Read next chapter of the book',
        isComleted: false, 
    },
    {
        title: 'Send the finished assignment',
        isComleted: false, 
    },
]

const Home = () => {
    return(
        <div className='bg-gray-900 h-screen text-white'>
            Home

            {todos.map(todo => <div>{todo.title}</div>)}
        </div>
    )
}

export default Home