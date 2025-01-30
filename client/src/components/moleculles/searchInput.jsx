import { Search } from 'lucide-react';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center justify-between bg-white w-full p-2 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 flex-grow mr-2.5 outline-none"
      />
      <button className="p-2 rounded-md bg-amber-300 text-white hover:bg-amber-400 transition-colors">
        <Search className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchInput;
