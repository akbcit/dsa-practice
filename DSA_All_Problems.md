# DSA — Complete Interview Problem List (~400 Problems)
> All problems that realistically appear in software engineering interviews.
> Difficulty: E = Easy, M = Medium, H = Hard
> Priority: P1 = must know, P2 = should know, P3 = good to know

---

## PATTERN 1 — Arrays & Hashing

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 1 | Two Sum | E | P1 | HashMap |
| 217 | Contains Duplicate | E | P1 | HashSet |
| 242 | Valid Anagram | E | P1 | char frequency |
| 49 | Group Anagrams | M | P1 | sorted key map |
| 347 | Top K Frequent Elements | M | P1 | HashMap + heap |
| 238 | Product of Array Except Self | M | P1 | prefix/suffix |
| 128 | Longest Consecutive Sequence | M | P1 | HashSet O(n) |
| 271 | Encode and Decode Strings | M | P1 | delimiter |
| 36 | Valid Sudoku | M | P2 | 3 HashSets per row/col/box |
| 659 | Split Array into Consecutive Seqs | M | P2 | greedy + map |
| 560 | Subarray Sum Equals K | M | P2 | prefix sum + map |
| 523 | Continuous Subarray Sum | M | P2 | prefix mod map |
| 974 | Subarray Sums Divisible by K | M | P2 | prefix mod |
| 525 | Contiguous Array | M | P2 | prefix sum trick |
| 1 | Two Sum II (sorted) | M | P1 | two pointers |
| 380 | Insert Delete GetRandom O(1) | M | P2 | HashMap + list |
| 41 | First Missing Positive | H | P2 | index as hash |
| 442 | Find All Duplicates in Array | M | P2 | index negation |
| 448 | Find All Numbers Disappeared | E | P2 | index negation |
| 169 | Majority Element | E | P1 | Boyer-Moore voting |
| 229 | Majority Element II | M | P2 | 2 candidates |
| 287 | Find the Duplicate Number | M | P1 | Floyd's cycle |
| 268 | Missing Number | E | P1 | XOR or math |
| 189 | Rotate Array | M | P2 | reverse trick |
| 453 | Minimum Moves to Equal Elements | E | P2 | math |
| 134 | Gas Station | M | P2 | greedy |

---

## PATTERN 2 — Two Pointers

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 125 | Valid Palindrome | E | P1 | L/R skip non-alpha |
| 167 | Two Sum II | M | P1 | converging pointers |
| 15 | 3Sum | M | P1 | sort + two ptr |
| 16 | 3Sum Closest | M | P2 | track min diff |
| 18 | 4Sum | M | P2 | reduce to 3Sum |
| 11 | Container With Most Water | M | P1 | move shorter side |
| 42 | Trapping Rain Water | H | P2 | prefix max arrays |
| 75 | Sort Colors | M | P1 | Dutch national flag |
| 26 | Remove Duplicates from Sorted Array | E | P1 | slow/fast |
| 27 | Remove Element | E | P1 | overwrite |
| 283 | Move Zeroes | E | P1 | slow/fast |
| 977 | Squares of a Sorted Array | E | P1 | L/R merge |
| 844 | Backspace String Compare | E | P2 | simulate or two ptr |
| 986 | Interval List Intersections | M | P2 | two pointer on intervals |
| 1679 | Max Number of K-Sum Pairs | M | P2 | sort + two ptr |
| 680 | Valid Palindrome II | E | P2 | skip one char |

---

## PATTERN 3 — Sliding Window

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 121 | Best Time to Buy & Sell Stock | E | P1 | track min |
| 3 | Longest Substring Without Repeating | M | P1 | set + shrink |
| 424 | Longest Repeating Char Replacement | M | P1 | freq + window |
| 567 | Permutation in String | M | P1 | fixed window |
| 76 | Minimum Window Substring | H | P2 | shrink when valid |
| 239 | Sliding Window Maximum | H | P2 | monotonic deque |
| 438 | Find All Anagrams in String | M | P2 | fixed window |
| 1004 | Max Consecutive Ones III | M | P2 | flip at most K zeros |
| 992 | Subarrays with K Different Integers | H | P3 | atMostK trick |
| 904 | Fruit Into Baskets | M | P2 | at most 2 distinct |
| 1208 | Get Equal Substrings Within Budget | M | P2 | sliding window cost |
| 1358 | Number of Substrings with 3 Chars | M | P3 | sliding window |
| 1493 | Longest Subarray of 1s After Del | M | P2 | zero budget window |
| 2401 | Longest Nice Subarray | M | P3 | bit masking window |

---

## PATTERN 4 — Stack

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 20 | Valid Parentheses | E | P1 | classic stack |
| 155 | Min Stack | M | P1 | auxiliary min stack |
| 150 | Evaluate Reverse Polish Notation | M | P1 | operand stack |
| 22 | Generate Parentheses | M | P1 | backtracking |
| 739 | Daily Temperatures | M | P1 | monotonic stack |
| 853 | Car Fleet | M | P2 | sort + stack |
| 84 | Largest Rectangle in Histogram | H | P2 | monotonic stack |
| 85 | Maximal Rectangle | H | P3 | histogram per row |
| 394 | Decode String | M | P2 | stack for nesting |
| 71 | Simplify Path | M | P2 | stack for dirs |
| 402 | Remove K Digits | M | P2 | monotonic stack |
| 456 | 132 Pattern | M | P2 | monotonic stack + min |
| 503 | Next Greater Element II | M | P2 | circular + stack |
| 496 | Next Greater Element I | E | P2 | stack + map |
| 901 | Online Stock Span | M | P2 | stack of (price, span) |
| 1047 | Remove All Adjacent Duplicates | E | P2 | stack |
| 735 | Asteroid Collision | M | P2 | stack simulation |
| 32 | Longest Valid Parentheses | H | P3 | stack or DP |
| 316 | Remove Duplicate Letters | M | P3 | monotonic stack |
| 42 | Trapping Rain Water | H | P2 | stack or two ptr |

---

## PATTERN 5 — Binary Search

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 704 | Binary Search | E | P1 | basic template |
| 74 | Search a 2D Matrix | M | P1 | treat as 1D |
| 875 | Koko Eating Bananas | M | P1 | search on answer |
| 153 | Find Min in Rotated Sorted Array | M | P1 | pivot logic |
| 33 | Search in Rotated Sorted Array | M | P1 | which half sorted |
| 81 | Search in Rotated Array II (dups) | M | P2 | handle dups |
| 981 | Time Based Key-Value Store | M | P1 | BS on list |
| 4 | Median of Two Sorted Arrays | H | P2 | binary search halves |
| 34 | Find First and Last Position | M | P2 | two BS calls |
| 35 | Search Insert Position | E | P1 | lower bound |
| 162 | Find Peak Element | M | P2 | BS on slope |
| 278 | First Bad Version | E | P1 | BS variant |
| 374 | Guess Number Higher or Lower | E | P1 | BS variant |
| 658 | Find K Closest Elements | M | P2 | BS + window |
| 1011 | Capacity to Ship Packages in D Days | M | P2 | search on answer |
| 1231 | Divide Chocolate | H | P3 | search on answer |
| 410 | Split Array Largest Sum | H | P2 | search on answer |
| 1283 | Find Smallest Divisor | M | P2 | search on answer |
| 1482 | Minimum Days to Make Bouquets | M | P2 | search on answer |
| 2300 | Successful Pairs of Spells and Potions | M | P2 | sort + BS |
| 367 | Valid Perfect Square | E | P2 | BS or math |
| 69 | Sqrt(x) | E | P2 | BS integer sqrt |

---

## PATTERN 6 — Linked List

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 206 | Reverse Linked List | E | P1 | prev/curr/next |
| 21 | Merge Two Sorted Lists | E | P1 | dummy head |
| 141 | Linked List Cycle | E | P1 | fast/slow |
| 143 | Reorder List | M | P1 | find mid + reverse + merge |
| 19 | Remove Nth Node From End | M | P1 | two ptrs gap N |
| 138 | Copy List with Random Pointer | M | P1 | HashMap |
| 2 | Add Two Numbers | M | P1 | carry |
| 287 | Find the Duplicate Number | M | P1 | Floyd's |
| 146 | LRU Cache | M | P1 | HashMap + DLL |
| 23 | Merge K Sorted Lists | H | P2 | min heap |
| 25 | Reverse Nodes in K-Group | H | P2 | group reverse |
| 82 | Remove Duplicates from Sorted List II | M | P2 | skip all dups |
| 83 | Remove Duplicates from Sorted List | E | P2 | skip same |
| 92 | Reverse Linked List II | M | P2 | reverse between m..n |
| 86 | Partition List | M | P2 | two lists, rejoin |
| 61 | Rotate List | M | P2 | find tail + reconnect |
| 234 | Palindrome Linked List | E | P2 | reverse half |
| 160 | Intersection of Two Linked Lists | E | P2 | pointer sync |
| 328 | Odd Even Linked List | M | P2 | two pointer weave |
| 430 | Flatten a Multilevel DLL | M | P2 | stack or recursion |
| 708 | Insert into Sorted Circular LL | M | P3 | edge cases |

---

## PATTERN 7 — Trees (DFS)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 226 | Invert Binary Tree | E | P1 | swap children |
| 104 | Maximum Depth of Binary Tree | E | P1 | DFS |
| 543 | Diameter of Binary Tree | E | P1 | left+right height |
| 110 | Balanced Binary Tree | E | P1 | height check |
| 100 | Same Tree | E | P1 | recursive compare |
| 572 | Subtree of Another Tree | E | P1 | sameTree at each |
| 235 | Lowest Common Ancestor of BST | M | P1 | BST property |
| 236 | Lowest Common Ancestor of BT | M | P1 | post-order |
| 102 | Binary Tree Level Order | M | P1 | BFS queue |
| 199 | Binary Tree Right Side View | M | P1 | BFS last of level |
| 1448 | Count Good Nodes | M | P1 | DFS with max |
| 98 | Validate BST | M | P1 | min/max bounds |
| 230 | Kth Smallest in BST | M | P1 | inorder |
| 105 | Construct from Preorder+Inorder | M | P1 | recursive split |
| 106 | Construct from Postorder+Inorder | M | P2 | recursive split |
| 124 | Binary Tree Max Path Sum | H | P2 | post-order gain |
| 297 | Serialize/Deserialize Binary Tree | H | P2 | BFS or DFS |
| 112 | Path Sum | E | P2 | DFS subtract |
| 113 | Path Sum II | M | P2 | DFS + backtrack |
| 437 | Path Sum III | M | P2 | prefix sum + map |
| 129 | Sum Root to Leaf Numbers | M | P2 | DFS multiply |
| 257 | Binary Tree Paths | E | P2 | DFS collect |
| 111 | Minimum Depth | E | P2 | BFS first leaf |
| 222 | Count Complete Tree Nodes | M | P2 | binary search |
| 114 | Flatten BT to Linked List | M | P2 | Morris or stack |
| 116 | Populating Next Right Pointers | M | P2 | BFS or recursion |
| 117 | Populating Next Right Pointers II | M | P2 | same, non-perfect |
| 450 | Delete Node in BST | M | P2 | find successor |
| 701 | Insert into BST | M | P2 | recurse left/right |
| 700 | Search in BST | E | P1 | recurse |
| 96 | Unique BSTs | M | P2 | DP on roots |
| 95 | Unique BSTs II | M | P3 | generate all |
| 669 | Trim a BST | M | P2 | recurse with bounds |
| 538 | Convert BST to Greater Tree | M | P2 | reverse inorder |
| 501 | Find Mode in BST | E | P2 | inorder + count |
| 530 | Min Abs Diff in BST | E | P2 | inorder |
| 404 | Sum of Left Leaves | E | P2 | DFS flag |

---

## PATTERN 8 — Trees (BFS)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 102 | Binary Tree Level Order | M | P1 | queue level by level |
| 103 | Zigzag Level Order | M | P2 | alternate direction |
| 111 | Minimum Depth | E | P2 | BFS first leaf |
| 107 | Level Order Bottom-Up | M | P2 | reverse level order |
| 637 | Average of Levels | E | P2 | sum/count per level |
| 515 | Find Largest Value in Each Row | M | P2 | max per level |
| 116 | Populating Next Right Pointers | M | P2 | BFS |
| 993 | Cousins in Binary Tree | E | P2 | BFS track parent/depth |
| 662 | Maximum Width of Binary Tree | M | P2 | BFS with index |

---

## PATTERN 9 — Tries

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 208 | Implement Trie | M | P1 | TrieNode children dict |
| 211 | Design Add & Search Words | M | P1 | DFS for '.' |
| 212 | Word Search II | H | P2 | Trie + DFS |
| 1268 | Search Suggestions System | M | P2 | Trie or sort+BS |
| 745 | Prefix and Suffix Search | H | P3 | double Trie |
| 648 | Replace Words | M | P2 | Trie prefix match |
| 720 | Longest Word in Dictionary | M | P2 | Trie DFS |
| 676 | Implement Magic Dictionary | M | P3 | Trie + fuzzy |

---

## PATTERN 10 — Heap / Priority Queue

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 215 | Kth Largest Element in Array | M | P1 | min heap size K |
| 973 | K Closest Points to Origin | M | P1 | max heap |
| 621 | Task Scheduler | M | P1 | freq + greedy |
| 355 | Design Twitter | M | P2 | heap merge feeds |
| 295 | Find Median from Data Stream | H | P2 | two heaps |
| 1046 | Last Stone Weight | E | P2 | max heap |
| 1167 | Min Cost to Connect Sticks | M | P2 | min heap |
| 378 | Kth Smallest in Sorted Matrix | M | P2 | min heap |
| 373 | Find K Pairs with Smallest Sums | M | P2 | min heap |
| 264 | Ugly Number II | M | P2 | min heap or DP |
| 313 | Super Ugly Number | M | P3 | heap generalized |
| 358 | Rearrange String K Distance Apart | H | P3 | heap + queue |
| 767 | Reorganize String | M | P2 | freq heap |
| 1642 | Furthest Building You Can Reach | M | P2 | min heap ladders |
| 630 | Course Schedule III | H | P3 | greedy + heap |
| 1353 | Max Number of Events Attended | M | P3 | sort + min heap |
| 692 | Top K Frequent Words | M | P2 | heap with custom sort |
| 23 | Merge K Sorted Lists | H | P2 | min heap |
| 407 | Trapping Rain Water II | H | P3 | BFS + min heap |

---

## PATTERN 11 — Graphs (BFS/DFS — Grid)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 200 | Number of Islands | M | P1 | DFS flood fill |
| 695 | Max Area of Island | M | P1 | DFS count |
| 130 | Surrounded Regions | M | P1 | DFS from border |
| 994 | Rotting Oranges | M | P1 | BFS multi-source |
| 417 | Pacific Atlantic Water Flow | M | P1 | BFS from both oceans |
| 79 | Word Search | M | P1 | DFS + backtrack |
| 1020 | Number of Enclaves | M | P2 | DFS from border |
| 1254 | Number of Closed Islands | M | P2 | DFS, count closed |
| 827 | Making a Large Island | H | P2 | DFS label + merge |
| 733 | Flood Fill | E | P1 | BFS/DFS |
| 1091 | Shortest Path in Binary Matrix | M | P2 | BFS |
| 542 | 01 Matrix | M | P2 | BFS multi-source |
| 1162 | As Far from Land as Possible | M | P2 | BFS |
| 286 | Walls and Gates | M | P2 | BFS multi-source |
| 490 | The Maze | M | P2 | BFS/DFS rolling |
| 505 | The Maze II | M | P2 | Dijkstra |
| 675 | Cut Off Trees for Golf | H | P3 | BFS + sort |

---

## PATTERN 12 — Graphs (Adjacency List)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 133 | Clone Graph | M | P1 | BFS + HashMap |
| 207 | Course Schedule | M | P1 | cycle detect DFS |
| 210 | Course Schedule II | M | P1 | topological sort |
| 684 | Redundant Connection | M | P2 | Union Find |
| 323 | Number of Connected Components | M | P2 | Union Find or DFS |
| 261 | Graph Valid Tree | M | P2 | no cycle + connected |
| 743 | Network Delay Time | M | P2 | Dijkstra |
| 787 | Cheapest Flights Within K Stops | M | P2 | Bellman-Ford |
| 127 | Word Ladder | H | P2 | BFS word graph |
| 126 | Word Ladder II | H | P3 | BFS + backtrack |
| 399 | Evaluate Division | M | P2 | graph + DFS |
| 547 | Number of Provinces | M | P2 | DFS or Union Find |
| 1334 | Find City with Smallest Neighbors | M | P2 | Floyd-Warshall |
| 1557 | Minimum Number of Vertices | M | P2 | in-degree zero |
| 1615 | Maximal Network Rank | M | P2 | degree + shared edge |
| 269 | Alien Dictionary | H | P2 | topo sort |
| 444 | Sequence Reconstruction | M | P2 | topo sort unique |
| 990 | Satisfiability of Eq Constraints | M | P2 | Union Find |
| 839 | Similar String Groups | H | P3 | Union Find |
| 765 | Couples Holding Hands | H | P3 | Union Find / greedy |
| 785 | Is Graph Bipartite? | M | P2 | BFS coloring |
| 886 | Possible Bipartition | M | P2 | BFS coloring |
| 1376 | Time Needed to Inform Employees | M | P2 | DFS tree |
| 1192 | Critical Connections in Network | H | P3 | Tarjan bridges |

---

## PATTERN 13 — Union Find

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 684 | Redundant Connection | M | P1 | cycle via UF |
| 323 | Number of Connected Components | M | P1 | UF |
| 990 | Satisfiability of Eq Constraints | M | P2 | UF |
| 547 | Number of Provinces | M | P2 | UF |
| 1202 | Smallest String With Swaps | M | P2 | UF + sort |
| 1061 | Lexicographically Smallest Equiv | M | P2 | UF |
| 721 | Accounts Merge | M | P2 | UF + sort |
| 1101 | The Earliest Moment | M | P2 | UF + sort events |
| 1579 | Remove Max Edges to Keep Graph Traversable | H | P3 | two UFs |

---

## PATTERN 14 — Dynamic Programming (1D)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 70 | Climbing Stairs | E | P1 | Fibonacci |
| 746 | Min Cost Climbing Stairs | E | P1 | dp[i] = min + cost |
| 198 | House Robber | M | P1 | dp[i] = max skip/take |
| 213 | House Robber II | M | P1 | two passes |
| 337 | House Robber III | M | P2 | tree DP |
| 5 | Longest Palindromic Substring | M | P1 | expand center |
| 647 | Palindromic Substrings | M | P1 | count expansions |
| 91 | Decode Ways | M | P1 | 1 or 2 digit choices |
| 639 | Decode Ways II | H | P3 | with '*' wildcard |
| 322 | Coin Change | M | P1 | unbounded knapsack |
| 518 | Coin Change II | M | P2 | count ways |
| 152 | Maximum Product Subarray | M | P1 | track min+max |
| 139 | Word Break | M | P1 | dp[i] = can break |
| 300 | Longest Increasing Subsequence | M | P1 | dp[i] = max prev+1 |
| 673 | Number of LIS | M | P2 | count + length |
| 416 | Partition Equal Subset Sum | M | P1 | 0/1 knapsack |
| 494 | Target Sum | M | P2 | DFS + memo |
| 53 | Maximum Subarray (Kadane's) | M | P1 | reset negative |
| 918 | Max Sum Circular Subarray | M | P2 | total - min subarray |
| 1143 | Longest Common Subsequence | M | P1 | 2D DP |
| 1312 | Min Insertions to Make Palindrome | H | P2 | LCS variant |
| 115 | Distinct Subsequences | H | P2 | dp[i][j] |
| 309 | Best Time Buy/Sell with Cooldown | M | P2 | state machine |
| 714 | Best Time Buy/Sell with Fee | M | P2 | state machine |
| 123 | Best Time Buy/Sell III (2 tx) | H | P2 | 4 states |
| 188 | Best Time Buy/Sell IV (k tx) | H | P3 | DP k states |
| 256 | Paint House | M | P2 | 3-color DP |
| 265 | Paint House II | H | P3 | k colors |
| 740 | Delete and Earn | M | P2 | house robber variant |
| 1751 | Max Number of Events Attended II | H | P3 | DP + BS |

---

## PATTERN 15 — Dynamic Programming (2D / Grid)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 62 | Unique Paths | M | P1 | dp[i][j] = up+left |
| 63 | Unique Paths II | M | P2 | with obstacles |
| 64 | Minimum Path Sum | M | P2 | dp[i][j] = min |
| 72 | Edit Distance | M | P1 | insert/delete/replace |
| 97 | Interleaving String | M | P2 | dp[i][j] |
| 312 | Burst Balloons | H | P2 | interval DP |
| 1312 | Min Insertions for Palindrome | H | P2 | 2D LCS |
| 329 | Longest Increasing Path in Matrix | H | P2 | DFS + memo |
| 221 | Maximal Square | M | P2 | dp[i][j] = min nbrs +1 |
| 85 | Maximal Rectangle | H | P3 | histogram DP |
| 174 | Dungeon Game | H | P3 | reverse DP |
| 741 | Cherry Pickup | H | P3 | 3D DP |
| 1463 | Cherry Pickup II | H | P3 | 3D DP two robots |

---

## PATTERN 16 — Intervals

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 252 | Meeting Rooms | E | P1 | sort + overlap check |
| 253 | Meeting Rooms II | M | P1 | min heap end times |
| 56 | Merge Intervals | M | P1 | sort + merge |
| 57 | Insert Interval | M | P1 | find position + merge |
| 435 | Non-overlapping Intervals | M | P1 | greedy min removal |
| 452 | Minimum Arrows to Burst Balloons | M | P2 | greedy |
| 1851 | Minimum Interval for Each Query | H | P3 | sort + heap |
| 986 | Interval List Intersections | M | P2 | two pointers |
| 715 | Range Module | H | P3 | sorted interval list |
| 759 | Employee Free Time | H | P3 | merge + invert |
| 1288 | Remove Covered Intervals | M | P2 | sort + greedy |

---

## PATTERN 17 — Greedy

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 53 | Maximum Subarray | M | P1 | Kadane's |
| 55 | Jump Game | M | P1 | max reachable |
| 45 | Jump Game II | M | P1 | BFS levels |
| 134 | Gas Station | M | P2 | total must >= cost |
| 135 | Candy | H | P2 | two pass |
| 846 | Hand of Straights | M | P2 | sort + map |
| 1899 | Merge Triplets to Form Target | M | P2 | filter valid |
| 763 | Partition Labels | M | P2 | last occurrence |
| 678 | Valid Parenthesis String | M | P2 | range [lo, hi] |
| 406 | Queue Reconstruction by Height | M | P2 | sort + insert |
| 621 | Task Scheduler | M | P1 | freq + idle |
| 1029 | Two City Scheduling | M | P2 | sort by diff |
| 860 | Lemonade Change | E | P2 | greedy |
| 1005 | Maximize Sum After K Negations | E | P2 | greedy |
| 376 | Wiggle Subsequence | M | P2 | count direction changes |
| 738 | Monotone Increasing Digits | M | P3 | greedy right-to-left |
| 942 | DI String Match | E | P3 | greedy assign ends |
| 1753 | Max Score From Removing Stones | M | P3 | greedy math |

---

## PATTERN 18 — Backtracking

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 78 | Subsets | M | P1 | include/exclude |
| 90 | Subsets II | M | P1 | sort + skip dups |
| 39 | Combination Sum | M | P1 | reuse allowed |
| 40 | Combination Sum II | M | P1 | no reuse, skip dups |
| 216 | Combination Sum III | M | P2 | k numbers sum to n |
| 46 | Permutations | M | P1 | visited array |
| 47 | Permutations II | M | P1 | sort + skip dups |
| 79 | Word Search | M | P1 | DFS + mark visited |
| 131 | Palindrome Partitioning | M | P1 | DFS + isPalin |
| 132 | Palindrome Partitioning II | H | P2 | DP min cuts |
| 17 | Letter Combinations Phone Number | M | P1 | DFS digit map |
| 22 | Generate Parentheses | M | P1 | open/close count |
| 51 | N-Queens | H | P2 | DFS + col/diag check |
| 52 | N-Queens II | H | P3 | count solutions |
| 37 | Sudoku Solver | H | P3 | DFS fill |
| 93 | Restore IP Addresses | M | P2 | DFS 4 parts |
| 77 | Combinations | M | P2 | DFS pick k |
| 89 | Gray Code | M | P3 | bit manipulation |
| 491 | Non-decreasing Subsequences | M | P2 | DFS + set |
| 526 | Beautiful Arrangement | M | P3 | DFS permute |

---

## PATTERN 19 — Math & Bit Manipulation

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 191 | Number of 1 Bits | E | P1 | n & (n-1) |
| 338 | Counting Bits | E | P1 | dp[i>>1]+(i&1) |
| 190 | Reverse Bits | E | P1 | shift + OR |
| 268 | Missing Number | E | P1 | XOR |
| 136 | Single Number | E | P1 | XOR all |
| 137 | Single Number II | M | P2 | bit count mod 3 |
| 260 | Single Number III | M | P2 | two groups XOR |
| 371 | Sum of Two Integers | M | P1 | bit addition |
| 7 | Reverse Integer | M | P2 | overflow |
| 50 | Pow(x, n) | M | P2 | fast exponentiation |
| 43 | Multiply Strings | M | P2 | grade school |
| 54 | Spiral Matrix | M | P2 | layer by layer |
| 59 | Spiral Matrix II | M | P2 | fill spiral |
| 48 | Rotate Image | M | P2 | transpose + reverse |
| 73 | Set Matrix Zeroes | M | P2 | use first row/col |
| 289 | Game of Life | M | P2 | in-place states |
| 412 | Fizz Buzz | E | P1 | modulo |
| 204 | Count Primes | M | P2 | sieve of Eratosthenes |
| 172 | Factorial Trailing Zeroes | M | P2 | count 5s |
| 149 | Max Points on a Line | H | P3 | slope HashMap |
| 470 | Implement Rand10 Using Rand7 | M | P3 | rejection sampling |
| 233 | Number of Digit One | H | P3 | math |
| 342 | Power of Four | E | P2 | bit + check |
| 326 | Power of Three | E | P2 | log or loop |
| 231 | Power of Two | E | P2 | n & (n-1) == 0 |

---

## PATTERN 20 — String Manipulation

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 14 | Longest Common Prefix | E | P1 | vertical scan |
| 28 | Find the Index of First Occurrence | E | P1 | KMP or built-in |
| 58 | Length of Last Word | E | P1 | trim + scan |
| 344 | Reverse String | E | P1 | two ptr |
| 345 | Reverse Vowels | E | P2 | two ptr skip |
| 151 | Reverse Words in a String | M | P2 | split + reverse |
| 186 | Reverse Words in String II | M | P2 | in-place |
| 179 | Largest Number | M | P2 | custom sort |
| 443 | String Compression | M | P2 | two ptr |
| 6 | Zigzag Conversion | M | P2 | simulate rows |
| 8 | String to Integer (atoi) | M | P2 | parse carefully |
| 38 | Count and Say | M | P2 | RLE |
| 49 | Group Anagrams | M | P1 | sort key |
| 415 | Add Strings | E | P2 | digit by digit |
| 459 | Repeated Substring Pattern | E | P2 | KMP or double str |
| 647 | Palindromic Substrings | M | P1 | expand center |
| 5 | Longest Palindromic Substring | M | P1 | expand center |
| 1143 | Longest Common Subsequence | M | P1 | 2D DP |
| 72 | Edit Distance | M | P1 | DP |
| 392 | Is Subsequence | E | P1 | two ptr |
| 1704 | Determine if Halves Are Alike | E | P2 | count vowels |

---

## PATTERN 21 — Monotonic Stack / Queue

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 739 | Daily Temperatures | M | P1 | mono decreasing |
| 496 | Next Greater Element I | E | P2 | stack + map |
| 503 | Next Greater Element II | M | P2 | circular |
| 901 | Online Stock Span | M | P2 | (price, span) stack |
| 84 | Largest Rectangle in Histogram | H | P2 | mono increasing |
| 42 | Trapping Rain Water | H | P2 | mono or two ptr |
| 239 | Sliding Window Maximum | H | P2 | mono deque |
| 402 | Remove K Digits | M | P2 | mono increasing |
| 316 | Remove Duplicate Letters | M | P3 | mono + visited |
| 1019 | Next Greater Node in LL | M | P2 | stack + array |
| 456 | 132 Pattern | M | P2 | mono + min array |
| 907 | Sum of Subarray Minimums | M | P3 | mono stack contribution |
| 1856 | Max Subarray Min-Product | M | P3 | mono stack |

---

## PATTERN 22 — Segment Tree / BIT (Advanced — for senior roles)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 307 | Range Sum Query - Mutable | M | P3 | BIT or segment tree |
| 315 | Count of Smaller Numbers After Self | H | P3 | BIT / merge sort |
| 327 | Count of Range Sum | H | P3 | merge sort |
| 493 | Reverse Pairs | H | P3 | merge sort |

---

## PATTERN 23 — Design Problems (OOP + DS combined)

| LC# | Problem | Diff | Priority | Key Concept |
|---|---|---|---|---|
| 146 | LRU Cache | M | P1 | HashMap + DLL |
| 460 | LFU Cache | H | P2 | HashMap + freq map |
| 355 | Design Twitter | M | P2 | heap merge |
| 380 | Insert Delete GetRandom O(1) | M | P2 | map + list |
| 381 | Insert Delete GetRandom O(1) - Dups | H | P3 | map of indices |
| 295 | Find Median from Data Stream | H | P2 | two heaps |
| 208 | Implement Trie | M | P1 | children array |
| 211 | Design Add & Search Words | M | P1 | Trie + DFS |
| 642 | Design Search Autocomplete System | H | P3 | Trie + heap |
| 745 | Prefix and Suffix Search | H | P3 | double Trie |
| 348 | Design Tic-Tac-Toe | M | P2 | row/col/diag sums |
| 353 | Design Snake Game | M | P3 | deque + set |
| 933 | Number of Recent Calls | E | P2 | queue |
| 1472 | Design Browser History | M | P2 | doubly linked / list |
| 1670 | Design Front Middle Back Queue | M | P3 | two deques |

---

## PATTERN 24 — Sorting Algorithms (know these conceptually)

| Algorithm | Time | Space | When used |
|---|---|---|---|
| Quick Sort | O(n log n) avg | O(log n) | General purpose |
| Merge Sort | O(n log n) | O(n) | Stable, linked lists |
| Heap Sort | O(n log n) | O(1) | In-place, no extra mem |
| Counting Sort | O(n+k) | O(k) | Small integer range |
| Bucket Sort | O(n) avg | O(n) | Uniform distribution |
| Radix Sort | O(nk) | O(n) | Fixed length integers |

Key problems:
| LC# | Problem | Diff | Priority |
|---|---|---|---|
| 912 | Sort an Array | M | P2 |
| 215 | Kth Largest (QuickSelect) | M | P1 |
| 75 | Sort Colors (3-way partition) | M | P1 |
| 179 | Largest Number (custom sort) | M | P2 |
| 1122 | Relative Sort Array | E | P2 |

---

## SYSTEM DESIGN (1 round in most intermediate interviews)

| Topic | Key Points |
|---|---|
| URL Shortener | Hashing, Base62, DB schema, redirects, rate limiting |
| Chat App | WebSockets (you built this!), pub/sub, message queue |
| Rate Limiter | Token bucket, sliding window counter, Redis |
| Notification System | Fan-out, message queues, push vs pull |
| Design Twitter Feed | Fanout on write vs read, cache, pagination |
| Design an API | REST, pagination (cursor vs offset), auth, versioning |
| Caching Strategy | Redis, cache-aside, write-through, TTL, eviction |
| Load Balancing | Round-robin, consistent hashing, L4 vs L7 |
| Microservices | Service discovery, API gateway, circuit breaker — your BFF exp helps |
| Search System | Inverted index, Elasticsearch basics |
| File Storage | S3-style, chunking, metadata DB |

---

## BEHAVIORAL — STAR Stories to Prepare

| Question Type | Your Best Angle |
|---|---|
| Tell me about yourself | HR → analytics → BCIT → PDF Solutions. Career switcher with maturity. |
| Why software dev? | Built HR dashboards, got hooked, retrained at BCIT |
| Biggest technical challenge | WebSocket server in C# + Scala listeners — cross-language real-time system |
| Most proud project | D3.js visualization library consumed by multiple teams |
| Handling ambiguity | 7 years in HR = constant ambiguity, stakeholder management |
| Conflict with teammate | Amazon HR = dozens of real examples, use STAR |
| Why leaving current job? | Prepare neutral forward-looking answer |
| Leadership example | Led HR initiatives at Amazon, performance cycles |
| Failure/mistake | Pick something real but recoverable, show what you learned |
| Working with cross-functional teams | You literally did this in HR and do it now in eng |

---

## PRIORITY BREAKDOWN

| Priority | Count | When to do |
|---|---|---|
| P1 — Must Know | ~120 | Before any interview |
| P2 — Should Know | ~160 | After P1, within 4-6 weeks |
| P3 — Good to Know | ~80 | If targeting senior or FAANG |

**Total: ~360 problems**

---

## 8-WEEK STUDY SCHEDULE

| Week | Topics | P1 Problems | P2 Problems |
|---|---|---|---|
| 1 | Arrays, Hashing, Two Pointers | 20 | 5 |
| 2 | Sliding Window, Stack, Binary Search | 20 | 5 |
| 3 | Linked List, Trees DFS | 20 | 5 |
| 4 | Trees BFS, Heap, Tries | 15 | 8 |
| 5 | Graphs (grid + adj list), Union Find | 15 | 8 |
| 6 | DP 1D + 2D | 15 | 10 |
| 7 | Intervals, Greedy, Backtracking | 15 | 10 |
| 8 | Mock interviews, weak spots, System Design | — | review |

**Daily:** 1 easy + 1 medium = 45-60 min  
**Practice in C# on LeetCode**  
**Use neetcode.io for video explanations**
