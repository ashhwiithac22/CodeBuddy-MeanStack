import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = 'http://localhost:5000/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any[]> {
    // For now, return mock data - replace with actual API call later
    return of([
      { 
        id: 1, 
        name: 'Arrays', 
        category: 'DSA',
        description: 'Learn about array manipulation',
        hints: [
          'Arrays can be used when you need to store items in order.',
          'Arrays support dynamic resizing and indexing.',
          'Use list comprehensions for concise array operations.'
        ],
        snippets: [
          'nums = [1, 2, 3]\nnums.append(4)\nprint(nums[0])   # 1',
          '# List comprehension example\nsquares = [x**2 for x in range(10)]'
        ],
        solved: 5, 
        total: 10,
        difficulty: 'Beginner'
      },
      { 
        id: 2, 
        name: 'Strings', 
        category: 'DSA',
        description: 'String operations and algorithms',
        hints: [
          'Strings are immutable in Python.',
          'Use slicing for efficient string manipulation.',
          'Consider using built-in string methods like split(), join(), and find().'
        ],
        snippets: [
          's = "hello"\nprint(s[::-1])   # olleh',
          '# String methods\nwords = "hello world".split()\nprint(words)  # ["hello", "world"]'
        ],
        solved: 3, 
        total: 8,
        difficulty: 'Beginner'
      },
      { 
        id: 3, 
        name: 'Linked Lists', 
        category: 'DSA',
        description: 'Working with linked data structures',
        hints: [
          'Useful when insertions/deletions happen frequently.',
          'More efficient than arrays for dynamic data.',
          'Use two-pointer technique for many linked list problems.'
        ],
        snippets: [
          'class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None',
          '# Creating a linked list\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)'
        ],
        solved: 2, 
        total: 6,
        difficulty: 'Intermediate'
      },
      { 
        id: 4, 
        name: 'SQL Basics', 
        category: 'SQL',
        description: 'Basic SQL queries and operations',
        hints: [
          'Use SELECT to retrieve data from tables.',
          'WHERE clause filters records based on conditions.',
          'JOIN operations combine data from multiple tables.'
        ],
        snippets: [
          'SELECT name, age FROM students WHERE age > 20;',
          'SELECT o.order_id, c.name\nFROM orders o\nJOIN customers c ON o.customer_id = c.id;'
        ],
        solved: 4, 
        total: 7,
        difficulty: 'Beginner'
      },
      { 
        id: 5, 
        name: 'Tree Traversal', 
        category: 'DSA',
        description: 'Tree data structure algorithms',
        hints: [
          'Understand the difference between BFS and DFS.',
          'Recursion is often used for tree problems.',
          'For BST, in-order traversal gives sorted order.'
        ],
        snippets: [
          'class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None',
          'def inorder_traversal(root):\n    if root:\n        inorder_traversal(root.left)\n        print(root.val)\n        inorder_traversal(root.right)'
        ],
        solved: 1, 
        total: 5,
        difficulty: 'Intermediate'
      },
      { 
        id: 6, 
        name: 'Sorting Algorithms', 
        category: 'DSA',
        description: 'Various sorting techniques and their complexities',
        hints: [
          'Know time and space complexity of each algorithm.',
          'QuickSort is often the most efficient in practice.',
          'Bubble sort is educational but inefficient for large datasets.'
        ],
        snippets: [
          '# Bubble Sort\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]',
          '# Quick Sort\ndef quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + middle + quick_sort(right)'
        ],
        solved: 2, 
        total: 8,
        difficulty: 'Intermediate'
      }
    ]);
  }

  getTopicById(id: number): Observable<any> {
    // Mock implementation - replace with actual API call
    return this.getTopics().pipe(
      map(topics => topics.find(topic => topic.id === id)),
      catchError(error => {
        console.error('Error fetching topic:', error);
        return of(null);
      })
    );
  }

  getTopicsByCategory(category: string): Observable<any[]> {
    // Mock implementation - replace with actual API call
    return this.getTopics().pipe(
      map(topics => topics.filter(topic => topic.category === category)),
      catchError(error => {
        console.error('Error fetching topics by category:', error);
        return of([]);
      })
    );
  }

  getTopicsByDifficulty(difficulty: string): Observable<any[]> {
    // Mock implementation - replace with actual API call
    return this.getTopics().pipe(
      map(topics => topics.filter(topic => topic.difficulty === difficulty)),
      catchError(error => {
        console.error('Error fetching topics by difficulty:', error);
        return of([]);
      })
    );
  }

  searchTopics(query: string): Observable<any[]> {
    // Mock implementation - replace with actual API call
    return this.getTopics().pipe(
      map(topics => topics.filter(topic => 
        topic.name.toLowerCase().includes(query.toLowerCase()) ||
        topic.description.toLowerCase().includes(query.toLowerCase()) ||
        topic.category.toLowerCase().includes(query.toLowerCase())
      )),
      catchError(error => {
        console.error('Error searching topics:', error);
        return of([]);
      })
    );
  }

  // This method will be used when you connect to the actual backend
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}