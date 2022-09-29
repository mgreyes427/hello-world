import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TaskDetailPage';


const Layout = () => (
  <div>
    <aside>
      <Link to='/'>|| HOME |</Link>
      <Link to='/about'>| ABOUT |</Link>
      <Link to='/faqs'>| FAQs |</Link>
      <Link to='/any404'>| Not existing route ||</Link>
    </aside>

    <main>
      <Outlet />
    </main>
  </div>
);

function AppRoutingOne() {

  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { path: '/', element: <HomePage />},
        { path: '/about', element: <AboutPage /> },
        { path: '/faqs', element: <AboutPage /> },
        { path: '/profile', element: <ProfilePage /> },
        { path: '/tasks', element: <TasksPage /> },
        { path: '/tasks/:id', element: <TasksDetailPage /> },
      ]
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default AppRoutingOne;
