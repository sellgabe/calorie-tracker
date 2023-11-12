import icon from '../assets/images/icon.png';
import Modal from '../components/Modal';
import { useGlobalContext } from '../context';

const AppBar = () => {
  const { setShowModal, setMeal, setWorkout } = useGlobalContext();

  const handleResetDay = () => {
    localStorage.clear();
    setMeal([]);
    setWorkout([]);
  };

  return (
    <nav className="w-full top-0 left-0 z-2 border-b-[2px] bg-custom-green text-white">
      <div className="container flex items-center justify-between text-2xl py-4 max-[380px]:flex-col ">
        <img src={icon} className="w-[85px] h-[55px]" alt="" />
        <div className="flex gap-2 my-2">
          <button
            className="text-base border-[1px] border-white rounded-md px-2 py-1"
            onClick={() => setShowModal(true)}
          >
            Set Daily Limit
          </button>
          <button
            className="text-base border-[1px] border-white rounded-md px-2 py-1"
            onClick={handleResetDay}
          >
            Reset Day
          </button>
        </div>
      </div>
      <Modal />
    </nav>
  );
};

export default AppBar;
