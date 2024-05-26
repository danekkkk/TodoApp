import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../directus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Todo } from '../interaces/todo';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css',
})
export class TodoDetailsComponent implements OnInit {
  constructor(
    public directusService: DirectusService,
    private router: Router,
    private route: ActivatedRoute,
    private markdownService: MarkdownService
  ) {}

  todoId: string = '';
  todoDetails: Todo | null = null;
  createdAgo: string = '';
  updatedAgo: string = '';


  ngOnInit(): void {
    if (!this.directusService.isLoggedIn()) this.router.navigate(['/']);
    this.route.params.subscribe((params) => {
      this.todoId = params['id'];
    });
    this.getTodoDetails(this.todoId);
  }

  private async getTodoDetails(id: string) {
    try {
      const result = await this.directusService.getTodoDetails(id);
      this.todoDetails = result as Todo;
      this.updateAgo();
    } catch (error) {
      this.router.navigate(['404']);
    }
  }

  private updateAgo() {
    if (this.todoDetails?.date_created) {
      this.createdAgo = this.calculateAgo(this.todoDetails.date_created);
    } else {
      this.createdAgo = '';
    }

    if (this.todoDetails?.date_updated) {
      this.updatedAgo = this.calculateAgo(this.todoDetails.date_updated);
    } else {
      this.updatedAgo = '';
    }
  }

  private calculateAgo(date: string): string {
    const currentDate = new Date();
    const targetDate = new Date(date);
    return formatDistanceToNow(targetDate, { addSuffix: true });
  }
}
