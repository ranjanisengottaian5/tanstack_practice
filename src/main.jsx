import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@sparrowengg/twigs-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={{
      fonts: "DM Sans"
    }}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </QueryClientProvider>


)
