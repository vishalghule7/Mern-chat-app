import SearchInput  from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";


const Sidebar = () => {
	return (
		<div className='border-r w-48 overflow-auto sm:w-fit border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
