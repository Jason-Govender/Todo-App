import HomeLayout from '../layouts/home/home'
import {TodoProviderTest} from '../components/to-do-form/to-do-form'

export default function AdminPage() {
  return (
    <HomeLayout variant="admin" title="Admin Dashboard">
      <TodoProviderTest />
    </HomeLayout>
  )
}