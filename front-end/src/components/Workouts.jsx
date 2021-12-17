import Exercises from '.back-end/exercise/exercises'
import axios from 'axios'

const workout = () => {
    Math.random.push()
    Math.random.push()
    Math.random.pull()
    Math.random.pull()
    Math.random.armsAndshoulders()
    Math.random.armsAndshoulders()
    Math.random.lowerBody()
    Math.random.lowerBody()
    Math.random.core()
    Math.random.core()

    return (
      <div>
        <h1>Calendar</h1>
        <Monday>${workout}</Monday>
        <Tuesday>Rest</Tuesday>
        <Wednesday>${workout}</Wednesday>
        <Thursday>Rest</Thursday>
        <Friday>${workout}</Friday>
        <Saturday>Rest</Saturday>
        <Sunday>Rest</Sunday>
      </div>
    )
}

export default Workouts;
