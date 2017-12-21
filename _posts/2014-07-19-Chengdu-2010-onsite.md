---
layout: post
title: "2010 Asia Chengdu Regional Contest"
author: Sd.Invol
tags: ["Editorial"]
category: algorithm
---

一套质量非常棒的题目，不拿来训练实在可惜。整体难度不是很大，但简单题比较少。

[题目链接](http://acm.hdu.edu.cn/search.php?field=problem&key=2010%20Asia%20Chengdu%20Regional%20Contest&source=1&searchmode=source)

### A. Balanced Number
每个Balanced Number实际上只会有一个支点。

于是就可以愉快地枚举一下支点，再进行常规的数位DP，

### B. Battle over Cities
（坑）

### C. Binary Number
最简单的题，直接枚举。

### D. Detector Placement
模拟一条光线进入三棱镜折射的过程。

也是直接模拟，但要考虑很多细节，比较麻烦。

注意光线进入了棱镜不一定能出来，可能发生全反射。

### E. Double Maze
比较简单且有趣的BFS题，需要一定的代码量。

输出要求字典序最小，BFS时注意枚举的顺序。

### F. Error Curves
一堆单峰函数取了$ max $还是单峰函数，三分求极值。

### G. Go Deeper
可以走的深度取决于$ x[] $的取值，取值只有$ 0/1 $。

二分答案后就可以转化为一个判定2-SAT解是否存在的问题。

### H. Jenga
题意比较晦涩，需要认真读一下。
设$ f[cur][top][m][A][C] $ 为现在轮到是$ cur $操作，当前最顶上一层有$ top $个木条，形成了$ m $层的Jenga，除了最顶层有$ A $个A类型，有$ C $个C类型的最大概率。

转移的话分三种，即A->B , A->C , C->D。

注意这题是基于博弈的概率DP，最好认真思考一下状态转移，难度不是很大。

### I. Rescue
先二分答案，转化为一个判定问题。

不难发现每一次放power ball都要从最后一个存在的石头那里开始，于是只需要模拟一下整个过程。

相当于要实现一个数据结构，来支持区间减一个二次函数（减少的值不能小于0）。

由于题目的特殊性，可以对每一个位置维护一个二次函数，以 $ O(n) $的时间实现判定。

### J. Similarity
对于每一个询问，需要找到一个两个集合间$ 26 $个字母的一一映射，使得相似度最大。
如果一个字母A映射到答案的一个字母B，它对相似度的贡献为$ \sum\_{T\_i = A and S\_i = B} $。

实际上就是一个寻找二分图带权最大匹配的过程。

### K. Snooker Referee
（这题太变态了，赶快来个人把他过了吧）
