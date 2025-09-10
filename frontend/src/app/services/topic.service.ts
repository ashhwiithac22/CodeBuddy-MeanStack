import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = 'http://localhost:5000/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any[]> {
    // Return comprehensive topic data with practical hints and problems
    return of(this.getComprehensiveTopics()).pipe(delay(300));
  }

  private getComprehensiveTopics() {
    return [
      {
        id: 1,
        name: 'Arrays & Lists',
        category: 'DSA',
        description: 'Master array manipulation and list operations',
        hints: [
          'Use when you need ordered collection with fast access by index',
          'Great for problems involving sequences, sorting, and searching',
          'Two-pointer technique: Perfect for pair sum, palindrome, and sliding window problems',
          'Sorting arrays often simplifies many problems (Two Sum, Three Sum)',
          'Binary search works on sorted arrays for O(log n) search',
          'Prefix sum arrays help with range sum queries',
          'In-place operations save space (reverse, rotate, move zeros)'
        ],
        commonProblems: [
          'Two Sum - Find indices of two numbers that add to target',
          'Maximum Subarray - Kadane\'s algorithm for maximum sum',
          'Merge Intervals - Combine overlapping intervals',
          'Product of Array Except Self - Without division',
          'Find Missing Number - Using sum or XOR',
          'Rotate Array - In-place rotation',
          'Container With Most Water - Two pointer approach',
          '3Sum - Find triplets that sum to zero',
          'Best Time to Buy/Sell Stock - Maximum profit',
          'Next Permutation - Rearrange numbers'
        ],
        defaultCode: `# Two Sum Solution
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []

# Test
print(two_sum([2, 7, 11, 15], 9))  # Output: [0, 1]`
      },
      {
        id: 2,
        name: 'HashSets',
        category: 'DSA',
        description: 'Unordered collections for unique elements with O(1) operations',
        hints: [
          'Use when you need to check existence quickly (contains/duplicates)',
          'Perfect for duplicate detection in arrays/strings',
          'Great for tracking seen elements in traversal problems',
          'Use for finding intersections/unions between datasets',
          'Helpful for memoization and caching results',
          'Ideal for problems requiring unique elements only'
        ],
        commonProblems: [
          'Contains Duplicate - Check if array has duplicates',
          'Longest Substring Without Repeating Characters',
          'Intersection of Two Arrays',
          'Happy Number - Cycle detection',
          'Jewels and Stones - Count jewels in stones',
          'Distribute Candies - Maximum unique types',
          'Missing Number - Using set difference',
          'Valid Sudoku - Check row/col/box duplicates',
          'First Missing Positive - Using set for existence',
          'Group Anagrams - Using sorted key in map'
        ],
        defaultCode: `# Contains Duplicate Solution
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

# Test
print(contains_duplicate([1, 2, 3, 1]))  # Output: True`
      },
      {
        id: 3,
        name: 'HashMaps & Dictionaries',
        category: 'DSA',
        description: 'Key-value stores for efficient lookups and frequency counting',
        hints: [
          'Use for frequency counting (character counts, word frequencies)',
          'Perfect for grouping and categorization problems',
          'Great for memoization and caching intermediate results',
          'Use for mapping relationships between elements',
          'Ideal for problems needing O(1) lookups with custom keys',
          'Helpful for two-sum type problems and complement finding'
        ],
        commonProblems: [
          'Two Sum - Classic hashmap problem',
          'Group Anagrams - Group words by sorted key',
          'Longest Substring Without Repeating Characters',
          'Subarray Sum Equals K - Prefix sum with hashmap',
          'Top K Frequent Elements - Bucket sort with frequency map',
          'Valid Anagram - Character frequency comparison',
          'First Unique Character - Frequency then iteration',
          'Word Pattern - Pattern matching with bijection',
          'Ransom Note - Character frequency check',
          'Isomorphic Strings - Character mapping validation'
        ],
        defaultCode: `# Group Anagrams Solution
def group_anagrams(strs):
    groups = {}
    for s in strs:
        key = ''.join(sorted(s))
        if key not in groups:
            groups[key] = []
        groups[key].append(s)
    return list(groups.values())

# Test
print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))`
      },
      {
        id: 4,
        name: 'Strings',
        category: 'DSA',
        description: 'Text manipulation and pattern matching algorithms',
        hints: [
          'Two pointers for palindrome and reversal problems',
          'Sliding window for substring and window-based problems',
          'Character frequency counting for anagram problems',
          'Stack-based approaches for parsing and validation',
          'KMP algorithm for efficient pattern matching',
          'Reverse engineering often helps (reverse whole, then parts)'
        ],
        commonProblems: [
          'Valid Palindrome - Two pointers from ends',
          'Longest Palindromic Substring - Expand around center',
          'String to Integer (atoi) - careful parsing',
          'Valid Parentheses - Stack-based validation',
          'Longest Substring Without Repeating Characters',
          'Minimum Window Substring - Sliding window',
          'Decode String - Stack-based decoding',
          'Letter Combinations of Phone Number - Backtracking',
          'Valid Anagram - Frequency counting',
          'Implement strStr() - String searching'
        ],
        defaultCode: `# Valid Palindrome Solution
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if not s[left].isalnum():
            left += 1
        elif not s[right].isalnum():
            right -= 1
        elif s[left].lower() != s[right].lower():
            return False
        else:
            left += 1
            right -= 1
    return True

# Test
print(is_palindrome("A man, a plan, a canal: Panama"))  # True`
      },
      {
        id: 5,
        name: 'Linked Lists',
        category: 'DSA',
        description: 'Pointer manipulation and node-based structures',
        hints: [
          'Two pointers (slow/fast) for cycle detection and middle finding',
          'Dummy nodes simplify edge cases in modification problems',
          'Reversal problems often use three pointers (prev, curr, next)',
          'Recursive approaches work well for many list problems',
          'Consider stack for reverse order processing',
          'Merge patterns for sorted list operations'
        ],
        commonProblems: [
          'Reverse Linked List - Iterative and recursive',
          'Detect Cycle in Linked List - Floyd\'s algorithm',
          'Merge Two Sorted Lists',
          'Remove Nth Node From End - Two pointers',
          'Add Two Numbers - Digit by digit addition',
          'Copy List with Random Pointer - Mapping approach',
          'LRU Cache - Linked list + hashmap',
          'Palindrome Linked List - Reverse half',
          'Intersection of Two Linked Lists',
          'Sort List - Merge sort for O(n log n)'
        ],
        defaultCode: `# Reverse Linked List Solution
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`
      },
      {
        id: 6,
        name: 'Stacks',
        category: 'DSA',
        description: 'LIFO structure for DFS, backtracking, and parsing',
        hints: [
          'Use for depth-first search and backtracking algorithms',
          'Perfect for parsing and syntax validation problems',
          'Great for reversing order or processing in reverse',
          'Monotonic stacks help with next greater element problems',
          'Use for iterative tree traversals',
          'Helpful for undo/redo functionality simulations'
        ],
        commonProblems: [
          'Valid Parentheses - Stack validation',
          'Min Stack - Track minimum efficiently',
          'Evaluate Reverse Polish Notation',
          'Daily Temperatures - Next warmer day',
          'Largest Rectangle in Histogram',
          'Binary Tree Inorder Traversal - Iterative',
          'Decode String - Nested decoding',
          'Asteroid Collision - Simulation with stack',
          'Remove All Adjacent Duplicates',
          'Simplify Path - Stack for directory navigation'
        ],
        defaultCode: `# Valid Parentheses Solution
def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack

# Test
print(is_valid("()[]{}"))  # True`
      },
      {
        id: 7,
        name: 'Queues',
        category: 'DSA',
        description: 'FIFO structure for BFS, scheduling, and level-order processing',
        hints: [
          'Use for breadth-first search algorithms',
          'Perfect for level-order tree traversals',
          'Great for scheduling and task processing problems',
          'Priority queues for always processing min/max elements',
          'Use for sliding window maximum problems',
          'Helpful for cache implementations (LRU)'
        ],
        commonProblems: [
          'Binary Tree Level Order Traversal',
          'Implement Queue using Stacks',
          'Sliding Window Maximum',
          'Rotting Oranges - BFS simulation',
          'Course Schedule - Topological sort',
          'Design Circular Queue',
          'Number of Islands - BFS approach',
          'Open the Lock - BFS shortest path',
          'Task Scheduler - Priority queue',
          'First Unique Character - Queue with frequency'
        ],
        defaultCode: `# Binary Tree Level Order Traversal
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`
      },
      {
        id: 8,
        name: 'Trees & BST',
        category: 'DSA',
        description: 'Hierarchical structures and efficient searching',
        hints: [
          'Recursion is natural for tree problems',
          'For BST: left < root < right property',
          'In-order traversal gives sorted order for BST',
          'BFS (level-order) for level-based problems',
          'DFS (pre/in/post-order) for path and search problems',
          'Think about tree properties: height, depth, diameter'
        ],
        commonProblems: [
          'Validate Binary Search Tree',
          'Maximum Depth of Binary Tree',
          'Binary Tree Level Order Traversal',
          'Lowest Common Ancestor',
          'Serialize and Deserialize Binary Tree',
          'Construct Binary Tree from Preorder and Inorder',
          'Kth Smallest Element in BST',
          'Path Sum - Check path with target sum',
          'Diameter of Binary Tree',
          'Balanced Binary Tree - Check height balance'
        ],
        defaultCode: `# Validate BST Solution
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_valid_bst(root):
    def validate(node, low=-float('inf'), high=float('inf')):
        if not node:
            return True
        if node.val <= low or node.val >= high:
            return False
        return (validate(node.left, low, node.val) and 
                validate(node.right, node.val, high))
    
    return validate(root)`
      },
      {
        id: 9,
        name: 'Graphs',
        category: 'DSA',
        description: 'Network structures and relationship modeling',
        hints: [
          'BFS for shortest path in unweighted graphs',
          'DFS for connectivity and path finding',
          'Union-Find for connected components',
          'Topological sort for dependency ordering',
          'Dijkstra for shortest path in weighted graphs',
          'Adjacency list vs matrix representation choices'
        ],
        commonProblems: [
          'Number of Islands - DFS/BFS traversal',
          'Course Schedule - Cycle detection',
          'Clone Graph - DFS/BFS with mapping',
          'Word Ladder - BFS shortest path',
          'Pacific Atlantic Water Flow - Multi-source BFS',
          'Graph Valid Tree - Union-Find/DFS',
          'Network Delay Time - Dijkstra algorithm',
          'Alien Dictionary - Topological sort',
          'Walls and Gates - Multi-source BFS',
          'Cheapest Flights Within K Stops - Bellman-Ford'
        ],
        defaultCode: `# Number of Islands Solution
def num_islands(grid):
    if not grid:
        return 0
    
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    
    return count`
      },
      {
        id: 10,
        name: 'Heaps & Priority Queues',
        category: 'DSA',
        description: 'Efficient access to min/max elements',
        hints: [
          'Use when you need frequent access to min/max elements',
          'Great for kth largest/smallest element problems',
          'Perfect for merge k sorted lists/arrays',
          'Use for scheduling with priorities',
          'Helpful for median finding problems',
          'Consider min-heap for largest, max-heap for smallest'
        ],
        commonProblems: [
          'Kth Largest Element in Array',
          'Merge K Sorted Lists',
          'Top K Frequent Elements',
          'Find Median from Data Stream',
          'Task Scheduler',
          'K Closest Points to Origin',
          'Sliding Window Median',
          'Minimum Cost to Connect Sticks',
          'Ugly Number II - Heap with factors',
          'Rearrange String - No adjacent duplicates'
        ],
        defaultCode: `# Kth Largest Element Solution
import heapq

def find_kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]

# Alternative with min-heap
def find_kth_largest_heap(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]`
      }
    ];
  }

  getTopicById(id: number): Observable<any> {
    const topics = this.getComprehensiveTopics();
    const topic = topics.find(t => t.id === id);
    return of(topic).pipe(delay(200));
  }
}