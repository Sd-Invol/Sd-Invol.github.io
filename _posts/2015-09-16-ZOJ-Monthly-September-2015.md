---
layout: post
title: "ZOJ Monthly, September 2015"
author: Sd.Invol
tags: ["Editorial"]
category: algorithm
---

### [A.Available Computation Sequence](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5573)

虽然串长为$10^5$，但是只有至多100个运算符，就可以转化为经典的DP问题，复杂度$O(n^3)$

### [B.Board](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5574)

手工构造出$n=1,2,3,4$的情况，对于大于4的$n$可以通过中间放$n-2$然后四周用$n=3$以及$2 \times 3$的块来补满。

### [E.Permutation](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5577)

对于排列$C$的每个置换环都是独立的，所以分配提取出$A$,$B$的对应位置是否可以匹配上。如果能匹配上就能得到一个关于次数的同余式，合并这些同余式即可，需要高精度。

（求教Java怎么写递归的扩展欧几里得算法 = =）

### [G.Stean](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5579)

体积大家都会算。

表面积是一个曲面积分，好像是找不到对应的原函数的，所以使用自适应simpson积分。如果直接上精度会比较低，可以发现$\pi$是一个循环，这样就可以只对一个不大于$\pi$的区间积分，可以大大提高精度。

### [I.Three Circles](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5581)

很明显的是这个点必须是三个圆两两的根轴的交点，而且这个点不能在任意圆内或边界上，先把交点求出来，然后判断一下这个点是不是在圆内即可。还要考虑解集更大的情况，这时候只要选一个远离世界的点即可。计算交点的过程可能需要`__int128`，而判断点是否在圆内一定要用double。

### [J.Travel](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5582)

树分治，分治的时候记录一下当前分治中心到各个点的路径是否是非降，相等，非增的。对于每个询问只需要容斥一下即可。

### [K.Triangle](http://acm.zju.edu.cn/onlinejudge/showContestProblem.do?problemId=5583)

分成4个部分来求解答案。

#### 1.三条边都确定

枚举所有三元环即可。

#### 2.两条边确定，一条边不确定

假设我们要计算两条确定的边分别是0和1的数量，首先枚举一个点，如果这个点连着$x$条0边，$y$条1边，就对答案贡献$x \cdot y$，这里面包含了三条边都确定的情况，所以最后再减掉100环和110环数量的两倍，因为每个这样的环都被多算了两次。

两条确定的边都是0和都是1也是一样的算法。

#### 3.一条边确定，两条边确定

枚举一条边$(x , y)$，考虑第三个点能选的点不应该和边上的点连过边，所以这样的点有$n-deg_x-deg_y+cover_{xy}$个，$cover_{xy}$为这条边被三元环覆盖的次数。

#### 4.三条边都不确定

一样的方法，补图的三元环数量可以容斥出来。

每一种环对答案的贡献都不一样，需要自己手算一下，所以最后就是如何枚举所有三元环，[这里](http://bestcoder.hdu.edu.cn/solutions.php?page=2)介绍了一种$O(m \sqrt{m})$的方法。

>首先把所有点按照$deg$的大小排序, 并重新标号. 然后给每一条无向边定向, 从标号小的连向编号大的. 那么我们可以发现, 每个三元环的出度数是这样的2, 1, 0, 分别令这三个点为$a, b,c$.  然后, 我们枚举$a,b$, 同事求出$a$的出边表和$b$的出边表的交集, 显然$c$必定属于这个交集.

>如果边表都是有序的, 那么合并的复杂度是边表的大小. 然后我们可以发现边表大小最大是$\sqrt {2m}$. 于是总的复杂度是$O(m \sqrt {m})$.
