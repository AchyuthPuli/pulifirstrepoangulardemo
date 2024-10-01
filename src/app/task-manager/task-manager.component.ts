import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', dueDate: '', completed: false };

  ngOnInit() {
    this.loadTasks();
  }

  addTask() {
    if (this.newTask.title.trim()) {
      this.newTask.id = this.tasks.length + 1;
      this.tasks.push({ ...this.newTask });
      this.saveTasks();
      this.newTask = { id: 0, title: '', description: '', dueDate: '', completed: false };
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  displayTasks() {
    alert(JSON.stringify(this.tasks, null, 2));
  }
}
