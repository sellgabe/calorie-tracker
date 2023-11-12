import { useGlobalContext } from '../context';

const Modal = () => {
  const { showModal, setShowModal, dailyLimit, setDailyLimit } =
    useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setShowModal((prev) => !prev);
    }
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setDailyLimit(+e.target.dailyLimit.value);
    localStorage.setItem(
      'dailyLimit',
      JSON.stringify(+e.target.dailyLimit.value)
    );
    setShowModal((prev) => !prev);
  };

  return (
    <div className="text-black">
      <div
        onClick={handleOverlayClick}
        className={`overlay fixed top-0 left-0 bg-[#00000075] h-full w-full z-40 ${
          showModal ? '' : 'hidden'
        }`}
      />
      <form
        onSubmit={handleSaveClick}
        className={`bg-white rounded-md z-50 flex flex-col fixed w-[30rem] h-[13rem] left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 max-[500px]:w-[300px] ${
          showModal ? 'top-[7%]' : '-top-full'
        }`}
      >
        <div className="flex justify-between px-4 py-4 border-b-[1px]">
          <p className="text-lg">Set Daily Limit</p>
          <button type="button" onClick={() => setShowModal((prev) => !prev)}>
            X
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 gap-2">
          <label htmlFor="dailyLimit">Daily Calorie Limit</label>
          <input
            type="number"
            name="dailyLimit"
            defaultValue={dailyLimit}
            className="border-[1px] border-neutral-200 rounded-md px-3 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-custom-green text-white w-[4rem] py-1 ml-4 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Modal;
