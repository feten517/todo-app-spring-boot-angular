import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from './todo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  searchTerm: string = '';
  filter: string = 'all';
  alertSound = new Audio('assets/sounds/bip.mp3');

  private alertsKey = 'todoAlerts';
  private alertsMap: Record<string, boolean> = {};

  private deadlineCheckInterval: any;

  constructor(private snackBar: MatSnackBar) {}

 ngOnInit(): void {
   // 1. Charge les tâches existantes
   const savedTodos = localStorage.getItem('todos');
   if (savedTodos) {
     this.todos = JSON.parse(savedTodos).map(todo => ({
       ...todo,
       // Force le reconvertissement des dates strings en objets Date
       deadline: todo.deadline ? new Date(todo.deadline) : null
     }));
     this.sortTodos();
   }

   // 2. Charge l'historique des alertes
   const savedAlerts = localStorage.getItem(this.alertsKey);
   this.alertsMap = savedAlerts ? JSON.parse(savedAlerts) : {};

   // 3. Déclenchement IMMÉDIAT avec vérification forcée
   setTimeout(() => {
     console.log('Tâches chargées :', this.todos);
     this.checkDeadlines(true); // true = mode forcé
   }, 300);
 }

  ngOnDestroy(): void {
    if (this.deadlineCheckInterval) {
      clearInterval(this.deadlineCheckInterval);
    }
  }

  saveTodos(): void {
    this.sortTodos();
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(): void {
    if (this.newTodo.title.trim() !== '') {
      this.newTodo.id = this.todos.length > 0
        ? Math.max(...this.todos.map(t => t.id)) + 1
        : 1;
      this.todos.push({ ...this.newTodo });
      this.newTodo = new Todo();
      this.saveTodos();
      this.playAlert(); // petit bip quand on ajoute
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  private sortTodos(): void {
    const priorityOrder = { high: 1, medium: 2, low: 3 };

    this.todos.sort((a, b) => {
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (a.deadline && b.deadline) {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      if (a.deadline && !b.deadline) return -1;
      if (!a.deadline && b.deadline) return 1;
      return 0;
    });
  }

  getFilteredTodos(): Todo[] {
    return this.todos.filter(todo => {
      const matchesSearch = todo.title.toLowerCase().includes(this.searchTerm.toLowerCase());

      if (this.filter === 'completed') {
        return matchesSearch && todo.completed;
      }
      if (this.filter === 'pending') {
        return matchesSearch && !todo.completed && !this.isDeadlineOverdue(todo.deadline);
      }
      if (this.filter === 'overdue') {
        return matchesSearch && !todo.completed && this.isDeadlineOverdue(todo.deadline);
      }
      return matchesSearch;
    });
  }

  isDeadlineToday(deadline: string): boolean {
    if (!deadline) return false;
    const today = new Date();
    const date = new Date(deadline);
    return date.toDateString() === today.toDateString();
  }

  isDeadlineOverdue(deadline: string): boolean {
    if (!deadline) return false;
    const today = new Date();
    const date = new Date(deadline);
    return date < today && !this.isDeadlineToday(deadline);
  }

  isDeadlineTomorrow(deadline: string): boolean {
    if (!deadline) return false;
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const date = new Date(deadline);
    return date.toDateString() === tomorrow.toDateString();
  }

  // 🔔 Vérifie les deadlines et notifie
private checkDeadlines(forceCheck = false): void {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString().slice(0, 10);
  const messages: string[] = [];

  // Réinitialisation quotidienne des alertes
  if (forceCheck || localStorage.getItem('lastCheckDate') !== todayISO) {
    localStorage.setItem('lastCheckDate', todayISO);
    this.alertsMap = {}; // Reset des alertes chaque jour
  }

  this.todos.forEach(todo => {
    if (todo.completed || !todo.deadline) return;

    const deadlineDate = new Date(todo.deadline);
    deadlineDate.setHours(0, 0, 0, 0);

    const isToday = deadlineDate.getTime() === today.getTime();
    const isTomorrow = new Date(today).setDate(today.getDate() + 1) === deadlineDate.getTime();
    const isOverdue = deadlineDate < today && !isToday;

    if (isToday || isTomorrow || isOverdue) {
      const alertKey = `${todo.id}_${deadlineDate.toISOString().slice(0, 10)}`;

      if (forceCheck || !this.alertsMap[alertKey]) {
        if (isToday) messages.push(`🚨 "${todo.title}" - À faire AUJOURD'HUI`);
        else if (isTomorrow) messages.push(`⚠️ "${todo.title}" - Pour DEMAIN`);
        else messages.push(`❌ "${todo.title}" - EN RETARD depuis ${deadlineDate.toLocaleDateString()}`);

        this.alertsMap[alertKey] = true;
      }
    }
  });

  if (messages.length > 0) {
    this.snackBar.open(messages.join('\n\n'), 'OK', {
      duration: 10000,
      panelClass: ['multiline-snackbar'],
      verticalPosition: 'top'
    });
    this.playAlert();
    localStorage.setItem(this.alertsKey, JSON.stringify(this.alertsMap));
  }
}


  private playAlert(): void {
    this.alertSound.play().catch(err => console.log('Impossible de jouer le son :', err));
  }
}
