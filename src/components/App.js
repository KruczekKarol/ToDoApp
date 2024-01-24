import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList';

class App extends Component {

  counter = 9

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac w wiedzmina 3',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'zrobic dobry uczynek',
        date: '2024-12-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'pomalowac dom po sylwestrze',
        date: '2024-01-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'schudnac 20 kg',
        date: '2024-06-30',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'sprzedac butelki po piwie (20skrzynek)',
        date: '2023-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'jeszcze raz pomalowac dom',
        date: '2024-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'fryzjer!!!',
        date: '2023-11-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: 'nie odbierac poleconego od komornika',
        date: '2023-11-12',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: 'kupic 2 butelki litore',
        date: '2024-09-11',
        important: false,
        active: true,
        finishDate: null
      },

    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id" + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //  tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })

  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text: text, // tekst z inputa
      date: date, // tekst z inputa
      important: important, // wartosc z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      <div className='App'>
        <h1>ToDo App</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
