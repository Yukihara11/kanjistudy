import React from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./tailwind.css"

import App from "./App";

import HomeRoute from "./routes/HomeRoute.jsx"
import StudyRoute from "./routes/StudyRoute.jsx"
import DetailsRoute from "./routes/DetailsRoute.jsx"
import QuizRoute from "./routes/QuizRoute.jsx"
import ErrorRoute from "./routes/ErrorRoute.jsx"
import VocabRoute from "./routes/VocabRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorRoute/>,
        children: [
            {
                index: true,
                element: <HomeRoute/>
            },
            {
                path: "study",
                element: <StudyRoute/>,
            },
            {
                path: "details/:kanji",
                element: <DetailsRoute/>
            },
            {
                path: "quiz",
                element: <QuizRoute/>
            },
            {
                path: "vocabularyList",
                element: <VocabRoute/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)