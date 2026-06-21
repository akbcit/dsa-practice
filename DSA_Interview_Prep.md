# DSA Interview Prep — Aditya Kumar
Target: Intermediate .NET / TypeScript Developer | $90K CAD | Vancouver

Practice in **C#** on LeetCode — matches your stack and stands out.
Difficulty guide: E = Easy, M = Medium, H = Hard (skip Hard unless you have time)

---

## PATTERN 1 — Arrays & Hashing
> Most common pattern. Always start here.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Two Sum | 1 | E | HashMap, O(n) |
| 2 | Contains Duplicate | 217 | E | HashSet |
| 3 | Valid Anagram | 242 | E | char frequency map |
| 4 | Group Anagrams | 49 | M | sorted key → HashMap |
| 5 | Top K Frequent Elements | 347 | M | HashMap + bucket sort |
| 6 | Product of Array Except Self | 238 | M | prefix/suffix, no division |
| 7 | Longest Consecutive Sequence | 128 | M | HashSet, O(n) |
| 8 | Encode and Decode Strings | 271 | M | delimiter design |

---

## PATTERN 2 — Two Pointers
> Whenever array is sorted or you need pairs.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Valid Palindrome | 125 | E | L/R pointers, skip non-alpha |
| 2 | Two Sum II (sorted) | 167 | M | L/R converge |
| 3 | 3Sum | 15 | M | sort + two pointers, skip dups |
| 4 | Container With Most Water | 11 | M | move shorter side |
| 5 | Trapping Rain Water | 42 | H | optional — prefix max arrays |

---

## PATTERN 3 — Sliding Window
> Subarray/substring problems with a constraint.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Best Time to Buy & Sell Stock | 121 | E | track min so far |
| 2 | Longest Substring Without Repeating | 3 | M | HashSet + shrink left |
| 3 | Longest Repeating Char Replacement | 424 | M | freq map + window |
| 4 | Permutation in String | 567 | M | fixed window, char count |
| 5 | Minimum Window Substring | 76 | H | optional |
| 6 | Sliding Window Maximum | 239 | H | optional (deque) |

---

## PATTERN 4 — Stack
> Matching, next greater, monotonic problems.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Valid Parentheses | 20 | E | classic stack |
| 2 | Min Stack | 155 | M | two stacks or tuple |
| 3 | Evaluate Reverse Polish Notation | 150 | M | operand stack |
| 4 | Generate Parentheses | 22 | M | backtracking + stack |
| 5 | Daily Temperatures | 739 | M | monotonic decreasing stack |
| 6 | Car Fleet | 853 | M | sort + stack |
| 7 | Largest Rectangle in Histogram | 84 | H | optional |

---

## PATTERN 5 — Binary Search
> Any sorted array or "find minimum/maximum" phrasing.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Binary Search | 704 | E | basic template |
| 2 | Search a 2D Matrix | 74 | M | treat as 1D |
| 3 | Koko Eating Bananas | 875 | M | search on answer |
| 4 | Find Min in Rotated Sorted Array | 153 | M | pivot logic |
| 5 | Search in Rotated Sorted Array | 33 | M | which half is sorted? |
| 6 | Time Based Key-Value Store | 981 | M | binary search on list |
| 7 | Median of Two Sorted Arrays | 4 | H | optional |

---

## PATTERN 6 — Linked List
> Classic pointer manipulation.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Reverse Linked List | 206 | E | prev/curr/next |
| 2 | Merge Two Sorted Lists | 21 | E | dummy head |
| 3 | Linked List Cycle | 141 | E | fast/slow pointers |
| 4 | Reorder List | 143 | M | find mid + reverse + merge |
| 5 | Remove Nth Node From End | 19 | M | two pointers, gap of N |
| 6 | Copy List with Random Pointer | 138 | M | HashMap old→new |
| 7 | Add Two Numbers | 2 | M | carry logic |
| 8 | Find Duplicate Number | 287 | M | Floyd's cycle detection |
| 9 | LRU Cache | 146 | M | HashMap + doubly linked list |
| 10 | Merge K Sorted Lists | 23 | H | optional (min heap) |

---

## PATTERN 7 — Trees
> BFS and DFS are both essential. Know both.

### DFS (Depth First)
| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Invert Binary Tree | 226 | E | swap left/right recursively |
| 2 | Maximum Depth of Binary Tree | 104 | E | DFS or BFS |
| 3 | Diameter of Binary Tree | 543 | E | left height + right height |
| 4 | Balanced Binary Tree | 110 | E | height check recursion |
| 5 | Same Tree | 100 | E | compare node by node |
| 6 | Subtree of Another Tree | 572 | E | sameTree at each node |
| 7 | Lowest Common Ancestor of BST | 235 | M | BST property |
| 8 | Binary Tree Level Order Traversal | 102 | M | BFS (queue) |
| 9 | Binary Tree Right Side View | 199 | M | BFS, last of each level |
| 10 | Count Good Nodes in Binary Tree | 1448 | M | DFS with max so far |
| 11 | Validate Binary Search Tree | 98 | M | pass min/max bounds |
| 12 | Kth Smallest in BST | 230 | M | inorder traversal |
| 13 | Construct Tree from Pre+Inorder | 105 | M | recursive split |
| 14 | Binary Tree Max Path Sum | 124 | H | optional |
| 15 | Serialize/Deserialize Binary Tree | 297 | H | optional |

### BFS (Breadth First)
| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Binary Tree Level Order Traversal | 102 | M | queue, process level by level |
| 2 | Binary Tree Zigzag Level Order | 103 | M | alternate direction |
| 3 | Minimum Depth of Binary Tree | 111 | E | BFS stops at first leaf |

---

## PATTERN 8 — Tries
> String prefix problems.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Implement Trie | 208 | M | TrieNode with children dict |
| 2 | Design Add & Search Words | 211 | M | DFS for '.' wildcard |
| 3 | Word Search II | 212 | H | optional |

---

## PATTERN 9 — Heap / Priority Queue
> "Top K", "K closest", "K largest" → always heap.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Kth Largest Element in Array | 215 | M | min heap size K |
| 2 | K Closest Points to Origin | 973 | M | max heap or sort |
| 3 | Task Scheduler | 621 | M | freq map + greedy |
| 4 | Design Twitter | 355 | M | heap merge feeds |
| 5 | Find Median from Data Stream | 295 | H | optional (two heaps) |

---

## PATTERN 10 — Graphs
> BFS/DFS on grid or adjacency list.

### Grid Problems
| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Number of Islands | 200 | M | DFS flood fill |
| 2 | Max Area of Island | 695 | M | DFS return count |
| 3 | Surrounded Regions | 130 | M | DFS from border |
| 4 | Rotting Oranges | 994 | M | BFS multi-source |
| 5 | Pacific Atlantic Water Flow | 417 | M | BFS from both oceans |
| 6 | Word Search | 79 | M | DFS + backtrack |

### Graph (Adjacency List)
| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Clone Graph | 133 | M | BFS + HashMap |
| 2 | Course Schedule | 207 | M | cycle detection (DFS) |
| 3 | Course Schedule II | 210 | M | topological sort |
| 4 | Number of Connected Components | 323 | M | Union Find or DFS |
| 5 | Graph Valid Tree | 261 | M | no cycle + connected |
| 6 | Network Delay Time | 743 | M | Dijkstra |
| 7 | Cheapest Flights K Stops | 787 | M | Bellman-Ford |
| 8 | Word Ladder | 127 | H | optional (BFS) |

---

## PATTERN 11 — Dynamic Programming (1D)
> "Number of ways", "minimum cost", "can you reach" — think DP.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Climbing Stairs | 70 | E | Fibonacci-style |
| 2 | Min Cost Climbing Stairs | 746 | E | dp[i] = min(dp[i-1], dp[i-2]) + cost |
| 3 | House Robber | 198 | M | dp[i] = max(dp[i-1], dp[i-2]+nums[i]) |
| 4 | House Robber II | 213 | M | run twice, skip first/last |
| 5 | Longest Palindromic Substring | 5 | M | expand around center |
| 6 | Palindromic Substrings | 647 | M | count expansions |
| 7 | Decode Ways | 91 | M | 1 or 2 digit choices |
| 8 | Coin Change | 322 | M | classic unbounded knapsack |
| 9 | Maximum Product Subarray | 152 | M | track min and max |
| 10 | Word Break | 139 | M | dp[i] = can break s[:i] |
| 11 | Longest Increasing Subsequence | 300 | M | dp[i] = max prev + 1 |
| 12 | Partition Equal Subset Sum | 416 | M | 0/1 knapsack |

---

## PATTERN 12 — Dynamic Programming (2D)
> Grid paths, string matching.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Unique Paths | 62 | M | dp[i][j] = dp[i-1][j] + dp[i][j-1] |
| 2 | Longest Common Subsequence | 1143 | M | dp[i][j] based on match |
| 3 | Best Time to Buy/Sell with Cooldown | 309 | M | state machine DP |
| 4 | Coin Change II | 518 | M | unbounded, count ways |
| 5 | Target Sum | 494 | M | DFS + memo |
| 6 | Interleaving String | 97 | M | dp[i][j] = can interleave |
| 7 | Edit Distance | 72 | M | classic string DP |
| 8 | Distinct Subsequences | 115 | H | optional |
| 9 | Burst Balloons | 312 | H | optional |

---

## PATTERN 13 — Intervals
> Sort by start time first, always.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Meeting Rooms | 252 | E | sort + check overlap |
| 2 | Meeting Rooms II | 253 | M | min heap of end times |
| 3 | Merge Intervals | 56 | M | sort + merge |
| 4 | Insert Interval | 57 | M | find position + merge |
| 5 | Non-overlapping Intervals | 435 | M | greedy, min removals |
| 6 | Minimum Interval for Each Query | 1851 | H | optional |

---

## PATTERN 14 — Greedy
> Locally optimal choices that lead to global optimum.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Maximum Subarray (Kadane's) | 53 | M | reset when negative |
| 2 | Jump Game | 55 | M | track max reachable |
| 3 | Jump Game II | 45 | M | BFS levels |
| 4 | Gas Station | 134 | M | total gas must >= total cost |
| 5 | Hand of Straights | 846 | M | sort + greedy grouping |
| 6 | Merge Triplets to Form Target | 1899 | M | filter valid triplets |

---

## PATTERN 15 — Backtracking
> "All combinations/permutations/subsets" → backtrack.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Subsets | 78 | M | include/exclude each element |
| 2 | Subsets II (with dups) | 90 | M | sort + skip dups |
| 3 | Combination Sum | 39 | M | reuse allowed |
| 4 | Combination Sum II | 40 | M | no reuse, skip dups |
| 5 | Permutations | 46 | M | swap or visited array |
| 6 | Word Search | 79 | M | DFS + mark visited |
| 7 | Palindrome Partitioning | 131 | M | DFS + isPalindrome check |
| 8 | Letter Combinations Phone Number | 17 | M | DFS digit map |
| 9 | N-Queens | 51 | H | optional |

---

## PATTERN 16 — Math & Bit Manipulation
> Quick wins, often appear as warm-up questions.

| # | Problem | LC# | Difficulty | Notes |
|---|---|---|---|---|
| 1 | Number of 1 Bits | 191 | E | n & (n-1) trick |
| 2 | Counting Bits | 338 | E | dp[i] = dp[i>>1] + (i&1) |
| 3 | Reverse Bits | 190 | E | shift and OR |
| 4 | Missing Number | 268 | E | XOR or sum formula |
| 5 | Single Number | 136 | E | XOR everything |
| 6 | Sum of Two Integers | 371 | M | bit addition without + |
| 7 | Reverse Integer | 7 | M | overflow check |
| 8 | Pow(x, n) | 50 | M | fast exponentiation |
| 9 | Multiply Strings | 43 | M | grade school multiplication |
| 10 | Spiral Matrix | 54 | M | layer by layer |
| 11 | Rotate Image | 48 | M | transpose + reverse |

---

## SYSTEM DESIGN (asked at intermediate level too)
> Know these concepts — you may get 1 design question per loop.

| Topic | What to know |
|---|---|
| URL Shortener | Hashing, DB schema, redirects |
| Rate Limiter | Token bucket, sliding window |
| Chat App | WebSockets (you built this!), pub/sub |
| Notification System | Message queues, fan-out |
| Design an API | REST vs GraphQL, pagination, auth |
| Caching | Redis, cache-aside, TTL |
| Load Balancing | Round-robin, consistent hashing |
| Microservices | Your BFF experience is relevant here |

---

## BEHAVIORAL (STAR format — your HR background is a huge asset here)

| Question | Your angle |
|---|---|
| Tell me about yourself | Career switcher, 7yr Amazon HR → dev, now building .NET microservices at PDF Solutions |
| Why software dev? | HR analytics dashboards sparked it, went back to school, now doing it professionally |
| Biggest challenge | Picking up Scala/WebSockets on the job, OpenTelemetry from scratch |
| Conflict with teammate | Amazon HR experience = dozens of real examples |
| Most proud project | WebSocket server or the D3.js visualization library |
| Why leaving current job? | (Prepare a neutral, forward-looking answer) |

---

## STUDY SCHEDULE — 6 Weeks to Interview Ready

| Week | Focus | Target Problems |
|---|---|---|
| 1 | Arrays, Hashing, Two Pointers | 15 problems |
| 2 | Sliding Window, Stack, Binary Search | 15 problems |
| 3 | Linked List, Trees (DFS) | 15 problems |
| 4 | Trees (BFS), Graphs, Heap | 15 problems |
| 5 | DP (1D + 2D), Intervals, Greedy | 15 problems |
| 6 | Backtracking, Mock interviews, review weak spots | 10 problems + 3 mocks |

**Daily:** 1 easy + 1 medium = ~45-60 min  
**Resource:** neetcode.io — follow their roadmap, it maps exactly to this list

---

## QUICK REFERENCE — Time Complexities to Know

| Structure/Algorithm | Time | Space |
|---|---|---|
| HashMap lookup | O(1) | O(n) |
| Binary Search | O(log n) | O(1) |
| DFS/BFS on graph | O(V+E) | O(V) |
| Sorting | O(n log n) | O(1)–O(n) |
| Heap push/pop | O(log n) | O(n) |
| DP (2D) | O(n*m) | O(n*m) |
