import style from './App.module.scss';
import Form from '../components/form/Form'
import List from '../components/list/List';

function App() {
  return (
    <div className={style.appStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
