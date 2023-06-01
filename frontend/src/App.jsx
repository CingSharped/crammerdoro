import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./Pages";
import { NavBar } from "./components";
import { AuthProvider, FlashcardProvider } from "./context";
import ProtectedRoute from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/NavBar/navbar.css";
import "./Pages/Flashcards/flashcards.css";

const App = () => {
  return (
    <AuthProvider>
      <FlashcardProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
              <Route path="/dashboard" element={<Pages.Dashboard />} />
              <Route path="/flashcards" element={<Pages.Flashcards />} />
              <Route path="/subjectflashcard/:subject" element={<Pages.SubjectFlashcard />}/>
              <Route path="/quiz/:subject" element={<Pages.QuizSubject />} />
              <Route path="/quiz" element={<Pages.Quiz />} />
            </Route>
            <Route index element={<Pages.Home />} />
            <Route path="/login" element={<Pages.Login />} />
            <Route path="/register" element={<Pages.Register />} />
            <Route path="*" element={<Pages.NotFound />} />
          </Route>
        </Routes>
      </FlashcardProvider>
    </AuthProvider>
  );
};

export default App;
