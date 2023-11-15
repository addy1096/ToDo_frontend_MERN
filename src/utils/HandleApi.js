import axios from 'axios'

// const baseUrl = "http://localhost:5000"
const baseUrl = "https://todo-backend-mern-cbm4.onrender.com"

const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data})=>{
   console.log('data---->',data);
   setToDo(data)
   })
}

const addToDo = (text,setText,setToDo) =>{
    axios
    .post('https://todo-backend-mern-cbm4.onrender.com/save',{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}




const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating) =>{
    axios
    .post('https://todo-backend-mern-cbm4.onrender.com/update',{_id : toDoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}





const deleteToDo = (_id,setToDo) =>{
    axios
    .post('https://todo-backend-mern-cbm4.onrender.com/delete',{_id})
    .then((data)=>{
        console.log(data)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}
export {getAllTodo,addToDo, updateToDo, deleteToDo}