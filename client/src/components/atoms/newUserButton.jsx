

const NewUserButton = ({handleCreateUser})=>{
    return(
    <>
    <button onclick={handleCreateUser} className="p-2 transition duration-300 ease bg-blue-500 cursor-pointer text-white text-sm rounded-sm m-10">Create user</button> 
    </>)
}

export default NewUserButton;