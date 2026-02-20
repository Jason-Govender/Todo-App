import HomeLayout from '../layouts/home/home'
import {TodoProviderTest} from '../components/to-do-form/to-do-form'

export default function ClientPage() {
  return (
    <HomeLayout variant="client" title="Client Dashboard">
      <TodoProviderTest />
    </HomeLayout>
  )
}