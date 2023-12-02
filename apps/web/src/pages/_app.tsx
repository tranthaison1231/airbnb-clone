import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-primary">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}
