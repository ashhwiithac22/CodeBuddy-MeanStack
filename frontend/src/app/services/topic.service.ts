import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Topic {
  id: number;
  name: string;
  category: string;
  description: string;
  hints: Hint[];
  commonProblems: string[];
}

export interface Hint {
  title: string;
  description: string;
  codeSnippet: string;
  language: string;
}

export interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  defaultCode: { [key: string]: string };
  testCases: TestCase[];
}

export interface TestCase {
  input: string;
  output: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  
  constructor() { }

  getTopics(): Observable<Topic[]> {
    return of(this.getComprehensiveTopics()).pipe(delay(300));
  }

  getProblems(topicId: number): Observable<Problem[]> {
    return of(this.getTopicProblems(topicId)).pipe(delay(300));
  }

  private getComprehensiveTopics(): Topic[] {
    return [
      {
        id: 1,
        name: 'Arrays & Lists',
        category: 'DSA',
        description: 'Master array manipulation and list operations',
        hints: this.getArrayHints(),
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
        ]
      },
      {
        id: 2,
        name: 'HashSets',
        category: 'DSA',
        description: 'Unordered collections for unique elements with O(1) operations',
        hints: this.getHashSetHints(),
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
        ]
      },
      {
        id: 3,
        name: 'HashMaps & Dictionaries',
        category: 'DSA',
        description: 'Key-value stores for efficient lookups and frequency counting',
        hints: this.getHashMapHints(),
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
        ]
      },
      {
        id: 4,
        name: 'Strings',
        category: 'DSA',
        description: 'Text manipulation and pattern matching algorithms',
        hints: this.getStringHints(),
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
        ]
      },
      {
        id: 5,
        name: 'Linked Lists',
        category: 'DSA',
        description: 'Pointer manipulation and node-based structures',
        hints: this.getLinkedListHints(),
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
        ]
      }
    ];
  }

  private getTopicProblems(topicId: number): Problem[] {
    // Sample problems for each topic
    const problems: { [key: number]: Problem[] } = {
      1: [
        {
          id: 1,
          title: 'Two Sum',
          description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
          difficulty: 'Easy',
          defaultCode: {
            'python': 'def twoSum(nums, target):\n    # Your code here\n    pass',
            'java': 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}',
            'javascript': 'function twoSum(nums, target) {\n    // Your code here\n}',
            'cpp': 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your code here\n    }\n};'
          },
          testCases: [
            { input: '[2,7,11,15], 9', output: '[0,1]' },
            { input: '[3,2,4], 6', output: '[1,2]' }
          ]
        }
      ],
      2: [
        {
          id: 1,
          title: 'Contains Duplicate',
          description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
          difficulty: 'Easy',
          defaultCode: {
            'python': 'def containsDuplicate(nums):\n    # Your code here\n    pass',
            'java': 'class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Your code here\n    }\n}',
            'javascript': 'function containsDuplicate(nums) {\n    // Your code here\n}',
            'cpp': 'class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Your code here\n    }\n};'
          },
          testCases: [
            { input: '[1,2,3,1]', output: 'true' },
            { input: '[1,2,3,4]', output: 'false' }
          ]
        }
      ]
    };

    return problems[topicId] || [];
  }

  private getArrayHints(): Hint[] {
    return [
      {
        title: 'Two Pointer Technique',
        description: 'Use two pointers for pair sum, palindrome, and sliding window problems',
        codeSnippet: 'left, right = 0, len(arr)-1\nwhile left < right:\n    # Process elements at pointers\n    left += 1\n    right -= 1',
        language: 'python'
      },
      {
        title: 'Sliding Window',
        description: 'Efficiently process subarrays with a fixed window size',
        codeSnippet: 'window_start = 0\nfor window_end in range(len(arr)):\n    # Add arr[window_end] to window\n    while condition_exceeded:\n        # Remove arr[window_start] from window\n        window_start += 1',
        language: 'python'
      },
      {
        title: 'Prefix Sum',
        description: 'Precompute cumulative sums for efficient range sum queries',
        codeSnippet: 'prefix = [0]\nfor num in arr:\n    prefix.append(prefix[-1] + num)\n# Sum from i to j: prefix[j+1] - prefix[i]',
        language: 'python'
      },
      {
        title: 'In-place Operations',
        description: 'Modify array in place to save space',
        codeSnippet: 'def reverse_in_place(arr):\n    left, right = 0, len(arr)-1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1',
        language: 'python'
      },
      {
        title: 'Binary Search',
        description: 'Efficiently find elements in sorted arrays',
        codeSnippet: 'low, high = 0, len(arr)-1\nwhile low <= high:\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        low = mid + 1\n    else:\n        high = mid - 1',
        language: 'python'
      }
    ];
  }

  private getHashSetHints(): Hint[] {
    return [
      {
        title: 'Duplicate Detection',
        description: 'Use sets to quickly check for duplicate elements',
        codeSnippet: 'def has_duplicate(arr):\n    seen = set()\n    for item in arr:\n        if item in seen:\n            return True\n        seen.add(item)\n    return False',
        language: 'python'
      },
      {
        title: 'Set Operations',
        description: 'Use union, intersection, and difference for set operations',
        codeSnippet: 'set1 = {1, 2, 3}\nset2 = {3, 4, 5}\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2 # {3}\ndifference = set1 - set2   # {1, 2}',
        language: 'python'
      },
      {
        title: 'Finding Unique Elements',
        description: 'Use sets to get unique elements from a collection',
        codeSnippet: 'def find_unique(arr):\n    return list(set(arr))',
        language: 'python'
      },
      {
        title: 'Membership Testing',
        description: 'Fast O(1) membership testing with sets',
        codeSnippet: 'items_set = set(items)\nif target in items_set:\n    # Target exists in items',
        language: 'python'
      },
      {
        title: 'Set Comprehensions',
        description: 'Create sets using comprehensions',
        codeSnippet: 'squares = {x**2 for x in range(10)}\neven_squares = {x**2 for x in range(10) if x % 2 == 0}',
        language: 'python'
      }
    ];
  }

  private getHashMapHints(): Hint[] {
    return [
      {
        title: 'Frequency Counting',
        description: 'Use dictionaries to count element frequencies',
        codeSnippet: 'from collections import defaultdict\nfreq = defaultdict(int)\nfor item in items:\n    freq[item] += 1',
        language: 'python'
      },
      {
        title: 'Grouping Elements',
        description: 'Group elements by a key using dictionaries',
        codeSnippet: 'from collections import defaultdict\ngroups = defaultdict(list)\nfor item in items:\n    key = item[0]  # Group by first character\n    groups[key].append(item)',
        language: 'python'
      },
      {
        title: 'Memoization',
        description: 'Cache function results using dictionaries',
        codeSnippet: 'cache = {}\ndef fibonacci(n):\n    if n in cache:\n        return cache[n]\n    if n <= 1:\n        return n\n    result = fibonacci(n-1) + fibonacci(n-2)\n    cache[n] = result\n    return result',
        language: 'python'
      },
      {
        title: 'Two Sum Pattern',
        description: 'Use dictionary to find complements',
        codeSnippet: 'def two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []',
        language: 'python'
      },
      {
        title: 'Default Values',
        description: 'Handle missing keys with get() or defaultdict',
        codeSnippet: '# Using get()\nvalue = my_dict.get(key, default_value)\n\n# Using defaultdict\nfrom collections import defaultdict\nmy_dict = defaultdict(int)  # Default value 0',
        language: 'python'
      }
    ];
  }

  private getStringHints(): Hint[] {
    return [
      {
        title: 'String Reversal',
        description: 'Reverse a string using slicing',
        codeSnippet: 'def reverse_string(s):\n    return s[::-1]',
        language: 'python'
      },
      {
        title: 'Palindrome Check',
        description: 'Check if a string is a palindrome',
        codeSnippet: 'def is_palindrome(s):\n    left, right = 0, len(s)-1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True',
        language: 'python'
      },
      {
        title: 'Character Frequency',
        description: 'Count character frequencies',
        codeSnippet: 'from collections import Counter\nchar_count = Counter(s)',
        language: 'python'
      },
      {
        title: 'String Splitting',
        description: 'Split strings into words or parts',
        codeSnippet: 'words = s.split()  # Split by whitespace\nparts = s.split(",")  # Split by comma',
        language: 'python'
      },
      {
        title: 'String Joining',
        description: 'Join elements into a string',
        codeSnippet: 'words = ["Hello", "World"]\nresult = " ".join(words)  # "Hello World"',
        language: 'python'
      }
    ];
  }

  private getLinkedListHints(): Hint[] {
    return [
      {
        title: 'Reverse Linked List',
        description: 'Iteratively reverse a linked list',
        codeSnippet: 'def reverse_list(head):\n    prev = None\n    current = head\n    while current:\n        next_node = current.next\n        current.next = prev\n        prev = current\n        current = next_node\n    return prev',
        language: 'python'
      },
      {
        title: 'Fast and Slow Pointers',
        description: 'Find middle node or detect cycles',
        codeSnippet: 'slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next\n    fast = fast.next.next\n# slow is now at middle',
        language: 'python'
      },
      {
        title: 'Dummy Node',
        description: 'Use dummy node to simplify edge cases',
        codeSnippet: 'dummy = ListNode(0)\ndummy.next = head\ncurrent = dummy\n# Process list...\nreturn dummy.next',
        language: 'python'
      },
      {
        title: 'Cycle Detection',
        description: 'Detect cycles in linked list',
        codeSnippet: 'slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next\n    fast = fast.next.next\n    if slow == fast:\n        return True  # Cycle detected\nreturn False',
        language: 'python'
      },
      {
        title: 'Merge Two Lists',
        description: 'Merge two sorted linked lists',
        codeSnippet: 'def merge_two_lists(l1, l2):\n    dummy = ListNode(0)\n    current = dummy\n    while l1 and l2:\n        if l1.val < l2.val:\n            current.next = l1\n            l1 = l1.next\n        else:\n            current.next = l2\n            l2 = l2.next\n        current = current.next\n    current.next = l1 if l1 else l2\n    return dummy.next',
        language: 'python'
      }
    ];
  }
}