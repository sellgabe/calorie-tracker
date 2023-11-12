import AppBar from './sections/AppBar';
import Calories from './sections/Calories';
import Form from './sections/Form';
import ProgressBar from './sections/ProgressBar';

export default function App() {
  return (
    <div className="font-roboto">
      <AppBar />
      <Calories />
      <ProgressBar />
      <Form />
    </div>
  );
}
