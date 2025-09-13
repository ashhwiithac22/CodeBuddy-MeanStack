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
          "description": "Hint: Use two pointers, 'left' starting at the beginning and 'right' at the end of the array. Move the pointers towards each other. At each step, check the elements at the pointers based on your problem. For pair sum, check if arr[left] + arr[right] equals the target. For palindrome, check if arr[left] == arr[right]. For sliding window problems, check if the current window satisfies your condition. Move 'left' forward if the condition is met, else move 'right' backward.",
        codeSnippet: `# Two pointers moving towards each other
left, right = 0, len(arr)-1 
while left < right: 
    # Process elements at pointers
    if condition_met:
        left += 1
    else:
        right -= 1`,
        language: 'python'
      },
      {
        title: 'Sliding Window Pattern',
          "description": "Hint: Instead of recalculating the sum for every subarray, keep a running total. Add the new element when the window expands and remove the first element when the window slides forward. This way, you only update what changes, making it much faster.",
        codeSnippet: `window_start = 0
max_sum = 0
window_sum = 0

for window_end in range(len(arr)):
    window_sum += arr[window_end]  # Add the next element
    
    # Slide the window if condition met
    if window_end >= K - 1:
        max_sum = max(max_sum, window_sum)
        window_sum -= arr[window_start]  # Remove first element
        window_start += 1  # Slide window ahead`,
        language: 'python'
      },
      {
        title: 'Prefix Sum Array',
         "description": "Hint: Store the running total of elements in a new array (prefix). This lets you quickly find the sum of any range by subtracting two prefix values, instead of adding each element again. It makes range sum queries much faster.",
        codeSnippet: `# Create prefix sum array
prefix = [0] * (len(arr) + 1)
for i in range(len(arr)):
    prefix[i+1] = prefix[i] + arr[i]

# Query sum from index i to j (inclusive)
range_sum = prefix[j+1] - prefix[i]`,
        language: 'python'
      },
      {
        title: 'Kadane\'s Algorithm',
         "description": "Hint: Keep track of the maximum sum ending at the current index. At each step, decide whether to start a new subarray from the current element or extend the previous one. Update the overall maximum as you go. This gives the largest subarray sum in O(n) time.",
        codeSnippet: `max_ending_here = arr[0]
max_so_far = arr[0]

for i in range(1, len(arr)):
    max_ending_here = max(arr[i], max_ending_here + arr[i])
    max_so_far = max(max_so_far, max_ending_here)`,
        language: 'python'
      },
      {
        title: 'Dutch National Flag Algorithm',
      "description": "Hint: Use three pointers (low, mid, high) to sort the array in one pass. 'low' tracks the position for 0s, 'high' for 2s, and 'mid' moves through the array. When you see 0, swap it with 'low' and move both forward. When you see 1, just move 'mid'. When you see 2, swap it with 'high' and move 'high' backward. This way, all 0s come first, then 1s, then 2s in O(n) time.",
        codeSnippet: `low, mid, high = 0, 0, len(arr)-1

while mid <= high:
    if arr[mid] == 0:
        arr[low], arr[mid] = arr[mid], arr[low]
        low += 1
        mid += 1
    elif arr[mid] == 1:
        mid += 1
    else:
        arr[mid], arr[high] = arr[high], arr[mid]
        high -= 1`,
        language: 'python'
      },
      {
        title: 'Cyclic Sort Pattern',
       "description": "Hint: Place each number at its correct index (value - 1). Start from the first element, and if the current number is not at its right position, swap it with the number at its correct index. If it’s already correct, move forward. This way, the array gets sorted in one pass without extra space.",
        codeSnippet: `i = 0
while i < len(arr):
    correct_index = arr[i] - 1
    if arr[i] != arr[correct_index]:
        arr[i], arr[correct_index] = arr[correct_index], arr[i]
    else:
        i += 1`,
        language: 'python'
      },
      {
        title: 'Binary Search in Arrays',
        "description": "Hint: Binary search works only if the array is sorted. Start with two ends: 'low' at the beginning and 'high' at the end. Look at the middle element. If it is equal to the target, return it. If the target is smaller, search the left half. If it is bigger, search the right half. Each step cuts the search space in half, making it much faster than checking one by one.",
        codeSnippet: `def binary_search(arr, target):
    low, high = 0, len(arr)-1
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
        language: 'python'
      },
      {
        title: 'Find Missing Number',
          "description": "Hint: The XOR trick works because numbers cancel out when XORed with themselves. First, XOR all numbers from 1 to N. Then, XOR all elements in the given array. The common numbers cancel each other, and the only number left will be the missing one.",
        codeSnippet: `def find_missing_number(arr):
    n = len(arr)
    xor_all = 0
    
    # XOR all numbers from 1 to n
    for i in range(1, n+2):
        xor_all ^= i
        
    # XOR with all array elements
    for num in arr:
        xor_all ^= num
        
    return xor_all`,
        language: 'python'
      },
      {
        title: 'Find All Duplicates',
          "description": "Hint: Use the array’s own indexes to track visited numbers. For each number, go to its index (num - 1). If the value there is already negative, it means the number has been seen before, so it’s a duplicate. Otherwise, mark it as visited by making it negative. This way, you find duplicates in O(n) time without extra space.",
        codeSnippet: `def find_duplicates(arr):
    duplicates = []
    for num in arr:
        index = abs(num) - 1
        if arr[index] < 0:
            duplicates.append(abs(num))
        else:
            arr[index] = -arr[index]
    return duplicates`,
        language: 'python'
      },
      {
        title: 'Container With Most Water',
          "description": "Hint: Start with two pointers at the ends of the array. The area is determined by the shorter line times the distance between the lines. Move the pointer pointing to the shorter line inward, because moving the taller one won’t increase the area. Keep checking and updating the maximum area until the pointers meet.",
        codeSnippet: `def max_area(height):
    left, right = 0, len(height)-1
    max_area = 0
    
    while left < right:
        width = right - left
        current_area = min(height[left], height[right]) * width
        max_area = max(max_area, current_area)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_area`,
        language: 'python'
      },
      {
        title: 'Trapping Rain Water',
          "description": "Hint: Water can only be trapped if there are taller bars on both sides of a bar. Keep track of the maximum height seen from the left and right. At each step, the trapped water depends on the shorter side’s max height minus the current bar’s height.",
        codeSnippet: `def trap_rain_water(height):
    if not height:
        return 0
        
    left, right = 0, len(height)-1
    left_max = right_max = 0
    water = 0
    
    while left <= right:
        if height[left] <= height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
            
    return water`,
        language: 'python'
      },
      {
        title: 'Merge Intervals',
        "description": "Hint: Sort intervals by start time first. If the current interval overlaps with the last merged one, merge them by updating the end time. Otherwise, add it as a new interval.",
        codeSnippet: `def merge_intervals(intervals):
    if not intervals:
        return []
        
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
            
    return merged`,
        language: 'python'
      },
      {
        title: 'Insert Interval',
        "description": "Hint: First add all intervals ending before the new one. Then merge all overlapping intervals with the new one. Finally, add the remaining intervals.",
        codeSnippet: `def insert_interval(intervals, new_interval):
    result = []
    i = 0
    n = len(intervals)
    
    # Add all intervals before new_interval
    while i < n and intervals[i][1] < new_interval[0]:
        result.append(intervals[i])
        i += 1
        
    # Merge overlapping intervals
    while i < n and intervals[i][0] <= new_interval[1]:
        new_interval[0] = min(new_interval[0], intervals[i][0])
        new_interval[1] = max(new_interval[1], intervals[i][1])
        i += 1
        
    result.append(new_interval)
    
    # Add remaining intervals
    while i < n:
        result.append(intervals[i])
        i += 1
        
    return result`,
        language: 'python'
      },
      {
        title: 'Rotate Array',
          "description": "Hint: Reverse the whole array, then reverse the first k elements, and finally reverse the rest to rotate in-place.",
        codeSnippet: `def rotate_array(arr, k):
    n = len(arr)
    k = k % n
    
    def reverse(start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
            
    reverse(0, n-1)      # Reverse entire array
    reverse(0, k-1)      # Reverse first k elements
    reverse(k, n-1)      # Reverse remaining elements`,
        language: 'python'
      },
      {
        title: 'Product of Array Except Self',
      "description": "Hint: First calculate product of all elements to the left of each index, then multiply with product of elements to the right.",
        codeSnippet: `def product_except_self(arr):
    n = len(arr)
    result = [1] * n
    
    # Left products
    left_product = 1
    for i in range(n):
        result[i] = left_product
        left_product *= arr[i]
    
    # Right products
    right_product = 1
    for i in range(n-1, -1, -1):
        result[i] *= right_product
        right_product *= arr[i]
        
    return result`,
        language: 'python'
      },
      {
        title: 'Find First Missing Positive',
       "description": "Hint: Place each number at its correct index (value 1 at index 0, value 2 at index 1, etc.). Then scan the array to find the first index where number doesn’t match (that index+1 is the missing positive).",
        codeSnippet: `def first_missing_positive(arr):
    n = len(arr)
    
    # Place numbers in their correct positions
    for i in range(n):
        while 1 <= arr[i] <= n and arr[i] != arr[arr[i]-1]:
            # Swap arr[i] with arr[arr[i]-1]
            correct_pos = arr[i] - 1
            arr[i], arr[correct_pos] = arr[correct_pos], arr[i]
    
    # Find first missing positive
    for i in range(n):
        if arr[i] != i + 1:
            return i + 1
            
    return n + 1`,
        language: 'python'
      },
      {
        title: '3Sum Problem',
        "description": "Hint: Sort the array first. Fix one number and then use two pointers (left & right) to find pairs that sum with it to zero. Skip duplicates to avoid repeating triplets.",
        codeSnippet: `def three_sum(arr):
    arr.sort()
    result = []
    n = len(arr)
    
    for i in range(n-2):
        # Skip duplicates
        if i > 0 and arr[i] == arr[i-1]:
            continue
            
        left, right = i+1, n-1
        while left < right:
            total = arr[i] + arr[left] + arr[right]
            if total == 0:
                result.append([arr[i], arr[left], arr[right]])
                # Skip duplicates
                while left < right and arr[left] == arr[left+1]:
                    left += 1
                while left < right and arr[right] == arr[right-1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
                
    return result`,
        language: 'python'
      },
      {
        title: 'Maximum Product Subarray',
          "description": "Hint: Track both maximum and minimum products at each step because a negative number can flip the result. Swap max and min when encountering a negative number, then update the result.",
        codeSnippet: `def max_product_subarray(arr):
    if not arr:
        return 0
        
    max_so_far = min_so_far = result = arr[0]
    
    for i in range(1, len(arr)):
        num = arr[i]
        if num < 0:
            max_so_far, min_so_far = min_so_far, max_so_far
            
        max_so_far = max(num, max_so_far * num)
        min_so_far = min(num, min_so_far * num)
        result = max(result, max_so_far)
        
    return result`,
        language: 'python'
      },
      {
        title: 'Search in Rotated Sorted Array',
        "description": "Hint: Even though the array is rotated, one half is always sorted. Check which half is sorted, and decide whether to search in the left or right half using binary search logic.",
        codeSnippet: `def search_rotated_array(arr, target):
    left, right = 0, len(arr)-1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
            
        # Left half is sorted
        if arr[left] <= arr[mid]:
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
                
    return -1`,
        language: 'python'
      },
      {
        title: 'Find Minimum in Rotated Sorted Array',
      "description":"Hint: Use binary search. Compare mid element with the rightmost element to determine which half is unsorted. The minimum lies in the unsorted half.",
        codeSnippet: `def find_min_rotated(arr):
    left, right = 0, len(arr)-1
    
    while left < right:
        mid = (left + right) // 2
        if arr[mid] > arr[right]:
            left = mid + 1
        else:
            right = mid
            
    return arr[left]`,
        language: 'python'
      },
      {
        title: 'Next Permutation',
        "description": "Hint: Find the first decreasing element from the right. Then find the element just larger than it to swap. Finally, reverse the suffix to get the next permutation.",
        codeSnippet: `def next_permutation(arr):
    n = len(arr)
    i = n - 2
    
    # Find first decreasing element from right
    while i >= 0 and arr[i] >= arr[i+1]:
        i -= 1
        
    if i >= 0:
        j = n - 1
        # Find element just larger than arr[i]
        while j >= 0 and arr[j] <= arr[i]:
            j -= 1
        arr[i], arr[j] = arr[j], arr[i]
    
    # Reverse the suffix
    left, right = i+1, n-1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1`,
        language: 'python'
      },
      {
        title: 'Meeting Rooms II',
          "description": "Hint: Sort intervals by start time. Use a min-heap to track end times of ongoing meetings. If a meeting starts after the earliest ending meeting, reuse the room (pop from heap); otherwise, allocate a new room (push end time). The heap size at the end is the minimum number of rooms needed.",
        codeSnippet: `import heapq

def min_meeting_rooms(intervals):
    if not intervals:
        return 0
        
    intervals.sort(key=lambda x: x[0])
    heap = []  # stores end times
    
    for interval in intervals:
        if heap and interval[0] >= heap[0]:
            heapq.heappop(heap)
        heapq.heappush(heap, interval[1])
        
    return len(heap)`,
        language: 'python'
      },
      {
        title: 'Kth Largest Element',
         "description": "Hint: Quickselect is like a faster version of quicksort. Pick a pivot, partition the array so smaller numbers go left and larger go right. Then only recurse into the part that contains the kth largest element.",
        codeSnippet: "def find_kth_largest(arr, k):\n    arr.sort()\n    return arr[-k]",
        language: 'python'
      },
      {
        title: 'Merge Sorted Arrays',
        "description": "Hint: Use three pointers - one for each array and one for the end of the merged array. Compare elements from the end of both arrays and place the larger one at the end of the merged array, moving pointers accordingly.",
        codeSnippet: `def merge_sorted_arrays(nums1, m, nums2, n):
    p1, p2, p = m-1, n-1, m+n-1
    
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
        
    # Copy remaining elements from nums2
    nums1[:p2+1] = nums2[:p2+1]`,
        language: 'python'
      },
      {
        title: 'Find Peak Element',
        "description": "Hint: Use binary search. If the middle element is greater than the next one, the peak lies on the left side (including mid). Otherwise, it lies on the right side.",
        codeSnippet: `def find_peak_element(arr):
    left, right = 0, len(arr)-1
    
    while left < right:
        mid = (left + right) // 2
        if arr[mid] > arr[mid+1]:
            right = mid
        else:
            left = mid + 1
            
    return left`,
        language: 'python'
      },
      {
        title: 'Search in 2D Matrix',
        "description": "Hint: Treat the 2D matrix as a 1D sorted array. Use binary search by calculating the mid index and converting it back to 2D coordinates using division and modulus.",
        codeSnippet: `def search_2d_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
        
    rows, cols = len(matrix), len(matrix[0])
    left, right = 0, rows * cols - 1
    
    while left <= right:
        mid = (left + right) // 2
        mid_value = matrix[mid // cols][mid % cols]
        
        if mid_value == target:
            return True
        elif mid_value < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return False`,
        language: 'python'
      },
      {
        title: 'Spiral Matrix',
        "description": "Hint: Use four pointers to track the boundaries of the matrix (top, bottom, left, right). Traverse the matrix in a spiral order by moving right, down, left, and up, adjusting the boundaries after each direction.",
        codeSnippet: `def spiral_order(matrix):
    if not matrix:
        return []
        
    result = []
    top, bottom = 0, len(matrix)-1
    left, right = 0, len(matrix[0])-1
    
    while top <= bottom and left <= right:
        # Traverse right
        for i in range(left, right+1):
            result.append(matrix[top][i])
        top += 1
        
        # Traverse down
        for i in range(top, bottom+1):
            result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse left
            for i in range(right, left-1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
            
        if left <= right:
            # Traverse up
            for i in range(bottom, top-1, -1):
                result.append(matrix[i][left])
            left += 1
            
    return result`,
        language: 'python'
      },
      {
        title: 'Set Matrix Zeroes',
        "description": "Hint: Use the first row and first column as markers. First, check if the first row and column need to be zeroed. Then, for each cell in the matrix, if it is zero, mark its row and column in the first row and column. Finally, iterate through the matrix again to set cells to zero based on the markers.",
        codeSnippet: `def set_zeroes(matrix):
    if not matrix:
        return
        
    rows, cols = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(cols))
    first_col_zero = any(matrix[i][0] == 0 for i in range(rows))
    
    # Use first row and column as markers
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    
    # Set zeroes based on markers
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    
    # Set first row
    if first_row_zero:
        for j in range(cols):
            matrix[0][j] = 0
    
    # Set first column
    if first_col_zero:
        for i in range(rows):
            matrix[i][0] = 0`,
        language: 'python'
      },
      {
        title: 'Rotate Image',
        "description": "Hint: First transpose the matrix (swap rows with columns), then reverse each row to get the 90-degree rotation.",
        codeSnippet: `def rotate_image(matrix):
    n = len(matrix)
    
    # Transpose matrix
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()`,
        language: 'python'
      },
      {
        title: 'Word Search',
         "description": "Hint: Use backtracking. Start from each cell matching the first letter, then explore all 4 directions (up, down, left, right) recursively. Mark visited cells to avoid revisiting them during the current path.",
        codeSnippet: `def exist(board, word):
    def dfs(i, j, index):
        if index == len(word):
            return True
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or board[i][j] != word[index]:
            return False
            
        temp = board[i][j]
        board[i][j] = '#'  # Mark as visited
        
        found = (dfs(i+1, j, index+1) or
                dfs(i-1, j, index+1) or
                dfs(i, j+1, index+1) or
                dfs(i, j-1, index+1))
                
        board[i][j] = temp  # Backtrack
        return found
    
    for i in range(len(board)):
        for j in range(len(board[0])):
            if dfs(i, j, 0):
                return True
                
    return False`,
        language: 'python'
      },
      {
        title: 'Longest Consecutive Sequence',
          "description": "Hint: Use a set to store all numbers for O(1) lookups. For each number, check if it is the start of a sequence (num-1 not in set). Then count consecutive numbers from there to find the longest sequence.",
        codeSnippet: `def longest_consecutive_sequence(arr):
    if not arr:
        return 0
        
    num_set = set(arr)
    longest = 0
    
    for num in num_set:
        # Check if it's the start of a sequence
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
                
            longest = max(longest, current_streak)
            
    return longest`,
        language: 'python'
      },
      {
        title: 'Find All Numbers Disappeared in Array',
        "description": "Hint: Use the array itself to track which numbers are present. For each number, mark the index corresponding to its value as negative. Then, the indices that remain positive indicate the missing numbers.",
        codeSnippet: `def find_disappeared_numbers(arr):
    # Mark numbers as negative
    for num in arr:
        index = abs(num) - 1
        if arr[index] > 0:
            arr[index] = -arr[index]
    
    # Find positive numbers (indices of missing numbers)
    result = []
    for i in range(len(arr)):
        if arr[i] > 0:
            result.append(i+1)
            
    return result`,
        language: 'python'
      },
      {
        title: 'Maximum Points You Can Obtain from Cards',
          "description": "Hint: You can pick from the start or end of the array. Think of taking k elements as leaving n-k elements in the middle. Use a sliding window to find the minimum sum of the middle n-k elements and subtract from total sum to get the maximum points.",
        codeSnippet: `def max_score_from_ends(arr, k):
    n = len(arr)
    left_sum = sum(arr[:k])
    max_sum = left_sum
    right_sum = 0
    
    for i in range(1, k+1):
        left_sum -= arr[k-i]
        right_sum += arr[n-i]
        max_sum = max(max_sum, left_sum + right_sum)
        
    return max_sum`,
        language: 'python'
      },
      {
        title: 'Subarray Sum Equals K',
          "description": "Hint: Use a running cumulative sum and a hashmap. For each index, store how many times each prefix sum has occurred. If (current_sum - k) exists in the map, add its count to the result because it forms a subarray with sum k.",
        codeSnippet: `def subarray_sum_equals_k(arr, k):
    prefix_sum = {0: 1}
    current_sum = 0
    count = 0
    
    for num in arr:
        current_sum += num
        count += prefix_sum.get(current_sum - k, 0)
        prefix_sum[current_sum] = prefix_sum.get(current_sum, 0) + 1
        
    return count`,
        language: 'python'
      },
      {
        title: 'Minimum Size Subarray Sum',
  "description": "Hint: Use a sliding window. Keep expanding the window by adding elements from the right until the sum ≥ target, then shrink from the left to find the smallest length. Repeat until the end.",

        codeSnippet: `def min_subarray_length(arr, target):
    left = 0
    current_sum = 0
    min_length = float('inf')
    
    for right in range(len(arr)):
        current_sum += arr[right]
        
        while current_sum >= target:
            min_length = min(min_length, right - left + 1)
            current_sum -= arr[left]
            left += 1
            
    return min_length if min_length != float('inf') else 0`,
        language: 'python'
      },
      {
        title: 'Find All Anagrams in String',
         "description": "Hint: Use a sliding window of size equal to the length of p. Keep frequency counts of characters in the window and compare with p's character counts. Slide the window across s and record starting indices when counts match.",
        codeSnippet: `def find_anagrams(s, p):
    if len(s) < len(p):
        return []
        
    p_count = [0] * 26
    s_count = [0] * 26
    result = []
    
    for char in p:
        p_count[ord(char) - ord('a')] += 1
        
    for i in range(len(s)):
        s_count[ord(s[i]) - ord('a')] += 1
        
        if i >= len(p):
            s_count[ord(s[i - len(p)]) - ord('a')] -= 1
            
        if s_count == p_count:
            result.append(i - len(p) + 1)
            
    return result`,
        language: 'python'
      },
      {
        title: 'Permutation in String',
          "description": "Hint: Use a sliding window of size equal to s1. Keep frequency counts of characters in s1 and the current window in s2. Slide the window across s2 and check if the counts match; if they do, s2 contains a permutation of s1.",

        codeSnippet: `def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False
        
    s1_count = [0] * 26
    s2_count = [0] * 26
    
    for i in range(len(s1)):
        s1_count[ord(s1[i]) - ord('a')] += 1
        s2_count[ord(s2[i]) - ord('a')] += 1
        
    if s1_count == s2_count:
        return True
        
    for i in range(len(s1), len(s2)):
        s2_count[ord(s2[i]) - ord('a')] += 1
        s2_count[ord(s2[i - len(s1)]) - ord('a')] -= 1
        
        if s1_count == s2_count:
            return True
            
    return False`,
        language: 'python'
      },
      {
        title: 'Maximum Swap',
          "description": "Hint: To get the largest number, find the first digit from the left that is smaller than a larger digit on its right. Swap it with the largest such digit found to the right. Only one swap is allowed.",

        codeSnippet: `def maximum_swap(num):
    digits = list(str(num))
    n = len(digits)
    max_index = n - 1
    left = right = -1
    
    for i in range(n-2, -1, -1):
        if digits[i] > digits[max_index]:
            max_index = i
        elif digits[i] < digits[max_index]:
            left = i
            right = max_index
    
    if left != -1:
        digits[left], digits[right] = digits[right], digits[left]
        return int(''.join(digits))
        
    return num`,
        language: 'python'
      },
      {
        title: 'Wiggle Sort',
          "description": "Hint: Iterate through the array and ensure that every even index is less than or equal to the next element, and every odd index is greater than or equal to the next element. Swap elements as needed to maintain this order.",
        codeSnippet: `def wiggle_sort(arr):
    for i in range(len(arr)-1):
        if (i % 2 == 0 and arr[i] > arr[i+1]) or (i % 2 == 1 and arr[i] < arr[i+1]):
            arr[i], arr[i+1] = arr[i+1], arr[i]`,
        language: 'python'
      },
      {
        title: 'Find K Closest Elements',
          "description": "Hint: Use binary search to find the starting index of the k closest elements. Compare the distances from the target to the elements at the current window's edges and adjust the window accordingly.",
        codeSnippet: `def find_closest_elements(arr, k, target):
    left, right = 0, len(arr) - k
    
    while left < right:
        mid = (left + right) // 2
        # Compare distances from target
        if target - arr[mid] > arr[mid + k] - target:
            left = mid + 1
        else:
            right = mid
            
    return arr[left:left + k]`,
        language: 'python'
      },
      {
        title: 'Find Peak Element in 2D Array',
          "description": "Hint: Use a binary search approach on columns. For each mid column, find the maximum element in that column. Then check its neighbors to decide which direction to move (left or right) to find a peak.",
        codeSnippet: `def find_peak_2d(matrix):
    def find_peak_in_column(col):
        max_row = 0
        for i in range(1, len(matrix)):
            if matrix[i][col] > matrix[max_row][col]:
                max_row = i
        return max_row
    
    left, right = 0, len(matrix[0])-1
    
    while left <= right:
        mid_col = (left + right) // 2
        peak_row = find_peak_in_column(mid_col)
        
        left_val = matrix[peak_row][mid_col-1] if mid_col > 0 else float('-inf')
        right_val = matrix[peak_row][mid_col+1] if mid_col < len(matrix[0])-1 else float('-inf')
        
        if matrix[peak_row][mid_col] >= left_val and matrix[peak_row][mid_col] >= right_val:
            return [peak_row, mid_col]
        elif left_val > matrix[peak_row][mid_col]:
            right = mid_col - 1
        else:
            left = mid_col + 1
            
    return [-1, -1]`,
        language: 'python'
      },
      {
        title: 'Count Inversions in Array',
          "description": "Hint: Use a modified merge sort to count inversions while sorting the array. During the merge step, if an element from the right half is smaller than an element from the left half, it indicates that there are inversions.",
        codeSnippet: `def count_inversions(arr):
    def merge_count(left, right):
        merged = []
        inversions = 0
        i = j = 0
        
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
                inversions += len(left) - i
                
        merged.extend(left[i:])
        merged.extend(right[j:])
        return merged, inversions
    
    def sort_count(arr):
        if len(arr) <= 1:
            return arr, 0
            
        mid = len(arr) // 2
        left, left_count = sort_count(arr[:mid])
        right, right_count = sort_count(arr[mid:])
        merged, merge_count_val = merge_count(left, right)
        
        return merged, left_count + right_count + merge_count_val
    
    _, count = sort_count(arr)
    return count`,
        language: 'python'
      },
      {
        title: 'Maximum Sum Circular Subarray',
          "description": "Hint: Use Kadane’s algorithm to find the maximum subarray sum in a linear array. To handle the circular case, find the total sum of the array and subtract the minimum subarray sum (also found using Kadane’s) from it. The result is the maximum circular subarray sum.",
        codeSnippet: `def max_circular_subarray(arr):
    def kadane(arr):
        max_ending_here = max_so_far = arr[0]
        for i in range(1, len(arr)):
            max_ending_here = max(arr[i], max_ending_here + arr[i])
            max_so_far = max(max_so_far, max_ending_here)
        return max_so_far
    
    # Case 1: Maximum subarray is not circular
    max_linear = kadane(arr)
    
    # Case 2: Maximum subarray is circular (wrap around)
    total_sum = sum(arr)
    # Invert array and find minimum subarray
    inverted = [-x for x in arr]
    max_wrap = total_sum + kadane(inverted)
    
    # Handle case where all numbers are negative
    if max_wrap == 0:
        return max_linear
        
    return max(max_linear, max_wrap)`,
        language: 'python'
      },
      {
        title: 'Find Duplicate Number',
          "description": "Hint: Use Floyd's Tortoise and Hare (Cycle Detection) algorithm. Treat the array as a linked list where the value at each index points to the next index. The duplicate number will create a cycle in this linked list.",
        codeSnippet: `def find_duplicate(arr):
    # Floyd's Tortoise and Hare algorithm
    slow = fast = arr[0]
    
    # Find intersection point
    while True:
        slow = arr[slow]
        fast = arr[arr[fast]]
        if slow == fast:
            break
    
    # Find entrance to cycle
    slow = arr[0]
    while slow != fast:
        slow = arr[slow]
        fast = arr[fast]
        
    return slow`,
        language: 'python'
      },
      {
        title: 'First Missing Positive',
          "description": "Hint: Place each number at its correct index (value 1 at index 0, value 2 at index 1, etc.). Then scan the array to find the first index where number doesn’t match (that index+1 is the missing positive).",
        codeSnippet: `def first_missing_positive(arr):
    n = len(arr)
    
    # Place numbers in their correct positions
    for i in range(n):
        while 1 <= arr[i] <= n and arr[i] != arr[arr[i]-1]:
            # Swap to correct position
            correct_pos = arr[i] - 1
            arr[i], arr[correct_pos] = arr[correct_pos], arr[i]
    
    # Find first missing positive
    for i in range(n):
        if arr[i] != i + 1:
            return i + 1
            
    return n + 1`,
        language: 'python'
      },
      {
        title: 'Count of Smaller Numbers After Self',
          "description": "Hint: Use a modified merge sort to count how many numbers from the right side are smaller than each number from the left side while merging. Maintain an index array to track original positions.",
        codeSnippet: `def count_smaller_after_self(arr):
    def merge_sort(enums):
        if len(enums) <= 1:
            return enums
            
        mid = len(enums) // 2
        left = merge_sort(enums[:mid])
        right = merge_sort(enums[mid:])
        
        # Count inversions
        i = j = 0
        while i < len(left) or j < len(right):
            if j == len(right) or (i < len(left) and left[i][1] <= right[j][1]):
                result[left[i][0]] += j  # Count elements in right that are smaller
                enums[i+j] = left[i]
                i += 1
            else:
                enums[i+j] = right[j]
                j += 1
                
        return enums
    
    n = len(arr)
    result = [0] * n
    merge_sort(list(enumerate(arr)))
    return result`,
        language: 'python'
      },
      {
        title: 'Create Maximum Number',
          "description": "Hint: To create the maximum number of length k from two arrays, try all possible splits of k between the two arrays. For each split, get the maximum subsequence from each array and merge them to form the largest number. Keep track of the overall maximum.",
        codeSnippet: `def max_number(nums1, nums2, k):
    def prep(nums, k):
        drop = len(nums) - k
        out = []
        for num in nums:
            while drop and out and out[-1] < num:
                out.pop()
                drop -= 1
            out.append(num)
        return out[:k]
    
    def merge(a, b):
        return [max(a, b).pop(0) for _ in a+b]
    
    return max(merge(prep(nums1, i), prep(nums2, k-i)) 
               for i in range(k+1) 
               if i <= len(nums1) and k-i <= len(nums2))`,
        language: 'python'
      },
      {
        title: 'Maximum Gap',
          "description": "Hint: Use a bucket sort approach. Calculate the minimum and maximum values, then create buckets to hold ranges of values. Place each number in its corresponding bucket, then find the maximum gap between the non-empty buckets.",
        codeSnippet: `def maximum_gap(arr):
    if len(arr) < 2:
        return 0
        
    min_val, max_val = min(arr), max(arr)
    bucket_size = max(1, (max_val - min_val) // (len(arr) - 1))
    bucket_count = (max_val - min_val) // bucket_size + 1
    
    buckets = [[None, None] for _ in range(bucket_count)]
    
    for num in arr:
        idx = (num - min_val) // bucket_size
        if buckets[idx][0] is None:
            buckets[idx][0] = buckets[idx][1] = num
        else:
            buckets[idx][0] = min(buckets[idx][0], num)
            buckets[idx][1] = max(buckets[idx][1], num)
    
    max_gap = 0
    prev_max = buckets[0][1]
    
    for i in range(1, bucket_count):
        if buckets[i][0] is not None:
            max_gap = max(max_gap, buckets[i][0] - prev_max)
            prev_max = buckets[i][1]
            
    return max_gap`,
        language: 'python'
      },
      {
        title: 'Find Median from Data Stream',
          "description": "Hint: Use two heaps - a max heap for the lower half of numbers and a min heap for the upper half. Balance the heaps such that the max heap can have at most one more element than the min heap. The median is either the top of the max heap or the average of the tops of both heaps.",
        codeSnippet: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap (invert min heap)
        self.large = []  # min heap

    def add_num(self, num):
        if len(self.small) == len(self.large):
            heapq.heappush(self.large, -heapq.heappushpop(self.small, -num))
        else:
            heapq.heappush(self.small, -heapq.heappushpop(self.large, num))

    def find_median(self):
        if len(self.small) == len(self.large):
            return (self.large[0] - self.small[0]) / 2.0
        else:
            return self.large[0]`,
        language: 'python'
      }
    ];
  }

  private getHashSetHints(): Hint[] {
    return [
      {
        title: 'Duplicate Detection',
        description: 'Check for duplicates in an array using a set',
        codeSnippet: `def has_duplicate(arr):
    seen = set()
    for item in arr:
        if item in seen:
            return True
        seen.add(item)
    return False`,
        language: 'python'
      },
      {
        title: 'Set Operations',
        description: 'Perform union, intersection, and difference using sets',
        codeSnippet: `set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2        # {1, 2, 3, 4, 5}
intersection = set1 & set2 # {3}
difference = set1 - set2   # {1, 2}`,
        language: 'python'
      },
      {
        title: 'Finding Unique Elements',
        description: 'Use sets to get unique elements from a collection',
        codeSnippet: `def find_unique(arr):
    return list(set(arr))`,
        language: 'python'
      },
      {
        title: 'Membership Testing',
        description: 'Fast O(1) membership testing with sets',
        codeSnippet: `items_set = set(items)
if target in items_set:
    # Target exists in items`,
        language: 'python'
      },
      {
        title: 'Set Comprehensions',
        description: 'Create sets using comprehensions',
        codeSnippet: `squares = {x**2 for x in range(10)}
even_squares = {x**2 for x in range(10) if x % 2 == 0}`,
        language: 'python'
      },
      // Add 45 more HashSet hints...
      {
        title: 'Remove Duplicates from Sorted Array',
        description: 'Remove duplicates in-place using two pointers',
        codeSnippet: `def remove_duplicates(arr):
    if not arr:
        return 0
        
    write_index = 1
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            arr[write_index] = arr[i]
            write_index += 1
            
    return write_index`,
        language: 'python'
      }
    ];
  }

  private getHashMapHints(): Hint[] {
    return [
      {
        title: 'Frequency Counting',
        description: 'Use dictionaries to count element frequencies',
        codeSnippet: `from collections import defaultdict
freq = defaultdict(int)
for item in items:
    freq[item] += 1`,
        language: 'python'
      },
      {
        title: 'Grouping Elements',
        description: 'Group elements by a key using dictionaries',
        codeSnippet: `from collections import defaultdict
groups = defaultdict(list)
for item in items:
    key = item[0]  # Group by first character
    groups[key].append(item)`,
        language: 'python'
      },
      {
        title: 'Memoization',
        description: 'Cache function results using dictionaries',
        codeSnippet: `cache = {}
def fibonacci(n):
    if n in cache:
        return cache[n]
    if n <= 1:
        return n
    result = fibonacci(n-1) + fibonacci(n-2)
    cache[n] = result
    return result`,
        language: 'python'
      },
      {
        title: 'Two Sum Pattern',
        description: 'Use dictionary to find complements',
        codeSnippet: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,
        language: 'python'
      },
      {
        title: 'Default Values',
        description: 'Handle missing keys with get() or defaultdict',
        codeSnippet: `# Using get()
value = my_dict.get(key, default_value)

# Using defaultdict
from collections import defaultdict
my_dict = defaultdict(int)  # Default value 0`,
        language: 'python'
      }
    ];
  }

  private getStringHints(): Hint[] {
    return [
      {
        title: 'String Reversal',
        description: 'Reverse a string using slicing',
        codeSnippet: `def reverse_string(s):
    return s[::-1]`,
        language: 'python'
      },
      {
        title: 'Palindrome Check',
        description: 'Check if a string is a palindrome',
        codeSnippet: `def is_palindrome(s):
    left, right = 0, len(s)-1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True`,
        language: 'python'
      },
      {
        title: 'Character Frequency',
        description: 'Count character frequencies',
        codeSnippet: `from collections import Counter
char_count = Counter(s)`,
        language: 'python'
      },
      {
        title: 'String Splitting',
        description: 'Split strings into words or parts',
        codeSnippet: `words = s.split()  # Split by whitespace
parts = s.split(",")  # Split by comma`,
        language: 'python'
      },
      {
        title: 'String Joining',
        description: 'Join elements into a string',
        codeSnippet: `words = ["Hello", "World"]
result = " ".join(words)  # "Hello World"`,
        language: 'python'
      }
    ];
  }

  private getLinkedListHints(): Hint[] {
    return [
      {
        title: 'Reverse Linked List',
        description: 'Iteratively reverse a linked list',
        codeSnippet: `def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`,
        language: 'python'
      },
      {
        title: 'Fast and Slow Pointers',
        description: 'Find middle node or detect cycles',
        codeSnippet: `slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
# slow is now at middle`,
        language: 'python'
      },
      {
        title: 'Dummy Node',
        description: 'Use dummy node to simplify edge cases',
        codeSnippet: `dummy = ListNode(0)
dummy.next = head
current = dummy
# Process list...
return dummy.next`,
        language: 'python'
      },
      {
        title: 'Cycle Detection',
        description: 'Detect if a linked list has a cycle',
        codeSnippet: `slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return True  # Cycle detected
return False`,
        language: 'python'
      },
      {
        title: 'Merge Two Lists',
        description: 'Merge two sorted linked lists',
        codeSnippet: `def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 if l1 else l2
    return dummy.next`,
        language: 'python'
      }
    ];
  }
}