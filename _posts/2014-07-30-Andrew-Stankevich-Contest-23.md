---
layout: post
title: "Andrew Stankevich Contest 23"
author: Sd.Invol
tags: ["Editorial"]
category: algorithm
key: 100003
---

[题目链接](http://codeforces.com/gym/100339)

很早之前训练过的一套ASC题，难度相对来说还可以接受。

### A. Bike Roads
平面上有两个圆形跑道，在圆上走比其他走法速度快，求两个圆上各一点间的最短路

离开第一个圆以及到达第二个圆的位置确定后，代价也确定了。答案单峰性质不是非常明显，但还是能以分段三分套三分的方法得到正确的结果。

### B. Diversion
一个国家是一个n个点m条边构成的无向图，边分黑白两种，白边有$ n-1 $条并构成一棵生成树。现在可以拆除一条黑边一条白边，求让图不连通的方案总数，保证图中没有桥。

每条黑边能覆盖一整条链，找出所有只被一条黑边覆盖的白边即可。

### C. Hex
一个在六边形网格上博弈的问题。

### D. Monotone Gray Code
设计一种奇怪的格雷码。

### E.Nice Sequence
一个连续的序列是$k-nice$当且仅当序列中每个数的出现次数都不比比它大的数字出现次数减$k$少。求给定序列一个最长的$k-nice$的前缀。

用线段树维护所有数的出现次数。

### F.Integer Packing
给定了一个压缩的方式，输出数字压缩后的结果。

### G.Rectangular Polygon
给定一堆木棒，把这堆木棒分成两份，每份的总长度相等。

### H.SETI
求一个字符串中有多少子串不重叠的出现了两次。

### I.Sum vs Product
如果一个集合中元素的和与积相等，则它是漂亮的，求有$n$个元素的漂亮集合有多少个，元素都为正整数。


### J.Superposition
输入两个格式化的线性分段函数$f(x)$、$g(x)$ ，求$g(f(x))$的表达式并格式化输出。
