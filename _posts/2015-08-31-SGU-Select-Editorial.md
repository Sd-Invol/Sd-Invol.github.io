---
layout: post
title: "SGU补题笔记"
author: Sd.Invol
tags: ["SGU","Editorial"]
category: algorithm
key: 100023
---

## 402
枚举最后占领的点，剩下的就是要求把剩下的图分成两部分的最小代价。
显然就是全局最小割，输出方案略有一点麻烦。

## 413
构造，比较有趣。
一个重点在于在DFS生成树上深度至多相差1的联通子集的导出子图必然是树。

## 416
猜结论，样例就是一个好例子

## 417
积分，猜结论。

## 422
概率DP，推出暴力转移的公式后，可以优化转移至$O(1)$。

## 428
小的合法方案可以拼成大的合法方案，构造

## 429
最暴力的DP是四维的$f[i][j][k][l]$表示还剩第i堆到第j堆的石子且第i堆还剩k个第j堆还剩l个，转移显然。
然而要注意到$f[i][j]$这个二位矩阵每行每列只有一个必输态，就能想办法将复杂度降至$O(n^2A)$甚至$O(n^2)$。

## 432
模拟

## 433
暴搜

## 434
如果一个集合大小为k的管子集合初始与终止水量和相同，那就需要k-1次倒水操作。
这样就能得到一个$O(3^n)$的DP，优化成$O(n2^n)$很容易。

## 439
最小表示法，扩展KMP

## 441
第二类斯特林数，矩阵

## 445
DP

## 446
枚举

## 447
只有28种可能的单词，转化为一个完全背包问题。

## 453
如果两个人不在起点与终点相遇，那么相遇的次数就是速度快的那个人往返的次数。
所以在一般情况下只需减掉两个人在起点与终点的相遇次数即可。

## 461
模拟

## 465
枚举在哪个点或哪条边上建立，维护一下最小费用。

## 467
一个圆能覆盖78%，两个圆能覆盖95%，三个圆没法全覆盖。

## 473
DP，高精度

## 476
容斥，高精度

## 482
简单DP

## 487
欧拉回路

## 490
首先边界只可能是白的
很显然极限情况下黑和白应该会形成一个棋盘的结构，每个黑色块都是单独的一格。
所以只要按照这个规则保证黑格子八联通随便填就好了。

## 491
枚举A，以及A的倍数，就能算出B能取那些，然后去重。

## 497
有一个奇怪的结论 = =

## 508
概率，贝叶斯公式。

## 510
暴力搜索，剪枝

## 511
数学推导，找原根简化式子后暴力会快不少。

## 521
LIS，判定可能在LIS中/必定在LIS中

## 525
图论，范围允许直接暴力出两点间是否可达。

## 532
枚举

## 536
模拟，BFS

## 537
如果直接枚举每个数字的分配应该是要超时的，可以直接随机出一些分配然后check。

## 539
置换群，构造

## 544
DP

## 548
贪心

## 549
贪心

## 552
暴力，hash

## 553
模拟
