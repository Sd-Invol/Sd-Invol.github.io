---
layout: post
title: "hihoCoder Challenge 3 全图传送"
author: Sd.Invol
tags: ["Editorial","divide and conquer"]
category: algorithm
---

[题目链接](http://hihocoder.com/problemset/problem/1065)

一棵树，点上有权，每次询问以`u`节点为中心，半径`r`以内的节点中，权值最大的节点的编号是多少。如果有多个节点，返回编号最小的。

同样用树点分治解决，每次在子树内找到重心后，用vector记录该子树内所有点到中心的距离，排序后记录对应前缀的节点权值最大值。

对于每个询问只需要在每个包含该节点的分治重心内的vector二分查找即可。

特别的，即使在某个分治重心内，询问的点与某个点在一个子树内部。这时这两个节点的距离会被认为是两个节点到重心的距离之和。其实也无所谓，因为这个子树以后也是会被询问到的，那时就可以得到正确的距离，两个节点到重心的距离之和一定不小于正确的距离。

时间复杂度为$O(nlog^2n)$

> Written with [StackEdit](https://stackedit.io/).
