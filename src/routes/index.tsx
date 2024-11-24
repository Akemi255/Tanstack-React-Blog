import { createFileRoute } from '@tanstack/react-router'
import AllNews from '../components/all-news'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="">
      <AllNews />
    </div>
  )
}
