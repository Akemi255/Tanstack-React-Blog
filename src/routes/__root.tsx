import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import "../global.css"
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()  //creando query client para usar tanstack/query

function RootComponent() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  )
}
