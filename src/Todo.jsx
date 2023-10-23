// export default function Todo({task}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// 1st Way - Conditional Rendering
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }


// Second Way - Conditaional rendering
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
  
//     return <li>Work on: {task}</li>
// }

// Third Way: Conditional rendering
// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone? "Complete": "Do it"} {task}</li>
//     )
// }

// Fourth Way: Conditional rendering
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}{isDone && ': complete'}</li>
//     )
// }

// Fifth Way: Conditional rendering
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}{isDone || ': Do it'}</li>
//     )
// }

// Sixth Way: Conditional rendering
export default function Todo({task,isDone}){

    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
         listItem = <li>Do it: {task}</li>
        }
    return listItem
}
