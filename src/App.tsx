import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import { QuizProvider } from "./components/QuizContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizList />,
  },
  {
    path: "quiz",
    children: [
      {
        path: "new",
        element: <QuizForm />,
      },
      {
        path: ":id",
        element: <QuizForm />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="py-5">
      <QuizProvider>
        <RouterProvider router={router} />
      </QuizProvider>
    </div>
  );
};

export default App;
