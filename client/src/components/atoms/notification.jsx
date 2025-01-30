

 const notification = ({message}) => {
    if (!message) return '';

    return (
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded fixed top-5 right-5 z-10">
            {message} 
        </div>
    );
};

export default notification;

