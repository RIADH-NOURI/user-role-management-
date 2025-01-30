const UpdateUserButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick} 
        className="p-2 transition duration-300 ease bg-blue-500 cursor-pointer text-white text-sm rounded-sm absolute top-4 right-4 hover:bg-blue-600"
      >
        Update User
      </button>
    );
  };
  
  export default UpdateUserButton;