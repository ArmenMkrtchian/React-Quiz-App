import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-bdfe7.firebaseio.com/'
})