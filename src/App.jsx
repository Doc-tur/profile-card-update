import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Todo from "./pages/Todo";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PricingPage from "./pages/PricingPage";
import ResourcesPage from "./pages/ResourcesPage";
import ServicesPage from "./pages/ServicesPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <HomePage />},
        {path: "dashboard", element: <Dashboard />},
        {path: "login", element: <LoginPage />},
        {path: "todo", element: <Todo />},
        {path: "form", element: <Form />},
        {path: "about", element: <AboutUsPage />},
        {path: "contact", element: <ContactUsPage />},
        {path: "pricing", element: <PricingPage />},
        {path: "resources", element: <ResourcesPage />},
        {path: "services", element: <ServicesPage />}
      ],
    }
  ])
  

  return (
    <>

      <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
      </Routes> */}

    </>
  );
}

export default App;
