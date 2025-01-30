import { useState } from "react";

const UserForm = ({ 
  isUpdate, 
  showForm, 
  userData, 
  setUserData, 
  onSubmit, 
  onClose, 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async () => {
    if (isSubmitting) return; 
    setIsSubmitting(true); 

    try {
      await onSubmit(userData); 
      onClose(); 
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div 
      className={`bg-white p-6 rounded-2xl shadow-lg w-96 border border-gray-300 relative transform transition-transform duration-300 ${showForm ? 'scale-100' : 'scale-90'}`} 
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        {isUpdate ? 'Update User' : 'Create New User'}
      </h2>
      <div className="space-y-4">
        <label className="block text-black">
          Name
          <input 
            type="text" 
            placeholder="Enter name" 
            value={userData.name} 
            onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
          />
        </label>
        <label className="block text-black">
          Address or Email
          <input 
            type="email" 
            placeholder="Enter email" 
            value={userData.email} 
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
          />
        </label>
        <label className="block text-black">
          Age
          <input 
            type="number" 
            placeholder="Enter age" 
            value={userData.age} 
            onChange={(e) => setUserData({ ...userData, age: e.target.value })} 
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
          />
        </label>
      </div>
      <button 
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer" 
        onClick={handleSubmit}
        disabled={isSubmitting} 
      >
        {isSubmitting ? "Submitting..." : isUpdate ? 'Update' : 'Create'}
      </button>
      <button 
        className="mt-2 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition cursor-pointer" 
        onClick={onClose}
        disabled={isSubmitting} 
      >
        Cancel
      </button>
    </div>
  );
};

export default UserForm;