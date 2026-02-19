import { TodoProviderTest } from './components/to-do-form/to-do-form.tsx';
import HomeLayout from './layouts/home/home.tsx';

function App() {
  return (
    <>
      <HomeLayout>
        <TodoProviderTest />
      </HomeLayout>
    </>
  )
}

export default App
