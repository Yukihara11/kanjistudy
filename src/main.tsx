import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./tailwind.css"

import App from "./App"

import HomeRoute from "./routes/HomeRoute"
import StudyRoute from "./routes/StudyRoute"
import DetailsRoute from "./routes/DetailsRoute"
import QuizRoute from "./routes/QuizRoute"
import ErrorRoute from "./routes/ErrorRoute"
import VocabRoute from "./routes/VocabRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorRoute />,
        children: [
            {
                index: true,
                element: <HomeRoute />
            },
            {
                path: "study",
                element: <StudyRoute />
            },
            {
                path: "details/:kanji",
                element: <DetailsRoute />
            },
            {
                path: "quiz",
                element: <QuizRoute />
            },
            {
                path: "vocabularyList",
                element: <VocabRoute />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
