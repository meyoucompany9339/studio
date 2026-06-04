import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <main className="flex-1 pt-12 md:pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
