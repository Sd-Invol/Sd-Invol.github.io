---
layout: post
title: "2014西安全国邀请赛简易题解"
author: Sd.Invol
tags: ["Editorial"]
category: algorithm
---

[题目链接](http://acm.hdu.edu.cn/search.php?field=problem&key=2014%CE%F7%B0%B2%C8%AB%B9%FA%D1%FB%C7%EB%C8%FC&source=1&searchmode=source)

### A. Wow! Such Doge!
统计输入文本里面有多少只Doge，直接暴力统计即可。

### B. Wow! Such Conquering!
搜索，变种的TSP问题，先对原图进行一次Floyd。

有两个比较重要的剪枝：

*   如果当前存在一个没有走过的点，直接走过去也会超过Deadline，剪。
*   如果当前搜到的时间和已经大于答案，剪。

有了这两个剪枝，这道题就可以通过了。

### C. Wow! Such City!
很基础的最短路，直接Dijkstra即可。

### D. Wow! Such String!
如果把三个连续的字符看成一个节点，原问题可以转化为求26^3个节点的欧拉路径问题。比如aaa后面加一个b，就相当于从aaa节点往aab节点连一条边。

注意n如果大于26^4+3是无解的。

### E. Wow! Such Precision!

### F. Wow! Such Tetris!

### G. Trader Dogy
注意数据中的树是随机产生的，这就意味着树的深度不会很大，两个点之间的距离是$ O(logn) $级别的。

这样我们就可以把Dogy行动的整条路径给弄出来，在这条路径上dp。
我们设从出发到第i个点而且有车的最小费用为f[i]，则f[i]可以从f[i - 1]开车过来，也可以之前把车放在上一次到i对应的节点，中间一段全部走路。

f[i]计算出来后，答案就是f[i]再加上从i出发走到终点的费用的最小值。

### H. Round-table Conference
根据Hall定理，二分图存在完备匹配当且仅当任意X点集子集的基数，不大于对应Y点集的并集的基数。所以一个naive的想法是$ O(2^n) $枚举所有区间，看这些区间并集的大小，是否小于对应人数的总和。

不难发现，如果两个区间都是可行的，而它们又不相交，显然它们的并集也是可行的。所以我们只需验证所有连续的并集是否合法，这些并集就只有$ O(m^2) $种了。

不妨假设原问题是一条链，如果我们枚举一个区间$ [x,y] $ ， 判断该区间是否可行，等价于判断：
$ \sum\_{x \leq L\_i,  R\_i \leq y} A\_i \leq y - x + 1 $是否成立，继续推导，等价于判断：
$ \sum\_{x \leq L\_i,  R\_i \leq y} A\_i + x \leq y + 1 $是否成立。如果固定一个$ y $，继续等价于
$ max(\sum\_{x \leq L\_i,  R\_i \leq y} A\_i + x) \leq y + 1 $是否成立。

设$ magic[x] = \sum\_{x \leq L\_i,  R\_i \leq y} A\_i + x $。
不难看出，如果当$ y $ += 1 时，需要插入所有$ R\_i = y + 1 $的区间，按照$ magic $的定义，只需要把的$ magic[0] , magic[1] ... magic[L\_i] $ 都加上 $ A\_i $。
剩下的就是用线段树来维护$ magic $ 了。

现在返回原问题。我们只需要把链倍长，枚举$ y $时限定一下$ x $的范围来判定即可。

### I. Goddess
从原点往各个圆作切线，则切线把弧度划分成很多个区间。

而每一段区间内部，弦长与射线斜率的弧度的关系是单峰的，应该是一个凸函数。

这样就能在每一段区间里靠三分来求出极值。

### J. Tunnels
求出全源最短路，就是一个简单的状压DP。
