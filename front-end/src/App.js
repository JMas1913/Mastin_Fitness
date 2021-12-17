import React, { useState, useEffect } from 'react'
import './style.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
import NavBar from "./components/NavBar";
import Workouts from './components/Workouts'

function App() {
  const [newExercise, setNewExercise] = useState({
    name: ""});

  useEffect(() => {
    async function getExercises() {
      const res = await axios.get("http://localhost:3001/");
    }
    getExercises();
  }, []);

  const handleNewExercise = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value });
  };

  const addExercise = (e) => {
    e.preventDefault();
    const currentExercise = ExerciseList;
    const addedExercise = {
      ...newExercise,
         id: parseInt(ExerciseList.length + 1),
    };
    currentExercise.push(addedExercise);
    setExerciseList(currentExercises);
    setNewExercise({ id: "", name: ""});
  };

  return (
    <div className="App">
      <header>
        <h1 className="banner">Readt to get into shape!</h1>
      </header>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/allexercises"
            component={(props) => <ExerciseList {...props} exerciseList={exerciseList} />}
          />
          <Route
            path="/allexercises/:id"
            component={(props) => (
              <Workouts {...props} exerciseList={exerciseList} />
            )}
          />
          <Route
            path="/new"
            render={(props) => (
              <AddExercisesPage
                {...props}
                newExercise={newExercise}
                handleNewExercise={handleNewExercise}
                addExercise={addExercise}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
