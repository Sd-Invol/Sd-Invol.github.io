---
layout: post
title: "FFT mod 1e9 + 7"
author: Sd.Invol
tags: ["Math"]
category: algorithm
---

在做FFT mod 任意质数一个传统的方法是利用NTT和CRT，这样比较适合一些小模数的题目，因为要保证$NP^2$在64位整数范围内，不然将需要更高精度的整数。

但最近学习了一种比较Tricky的方法，假设模数为$P$，设$M=\lceil \sqrt{P} \rceil$，可以将一个多项式$F(x)$拆成两个多项式$F\_{0}(x),F\_{1}(x)$，其中：

$$
F_{0}(x) = F(x) \mod M
$$

$$
F_{1}(x) = \lfloor \frac{F(x)}{M} \rfloor
$$

这样就能把多项式每一项系数的值域变成$\sqrt{P}$级别，用`double`实现的复数做FFT精度就不会爆炸了。

如果要求两个多项式$F(x),G(x)$的卷积：

$$
F(x) * G(x) = F_{0}(x) * G_{0}(x)+M(F_{0}(x) * G_{1}(x)+F_{1}(x) * G_{0}(x))+M^2F_{1}(x) * G_{1}(x)
$$

这样只需似乎只用做7次FFT，效率应该比NTT要好，然而这只是一个开始。

由于这里需要用复数的FFT来做整数的卷积，可以使用一些技巧来继续减少 FFT 的次数。

比如如果需要对$A$和$B$分别做一次DFT，可以构造两个多项式：
$$P[k] = A[k] + i B[k]，Q[k] = A[k] - iB[k]$$

不难证明 $DFT(Q)[i] = DFT(P)[n - i]$，$n$ 是 DFT 的规模，所以只需要对 $P$ 做一次 DFT，就能一块求出 $Q$ 的 DFT。

然后 $DFT(A) = \frac{DFT(P) +DFP(Q)}{2} ,  DFT(B) = -\frac{DFT(P) - DFT(Q)}{2}i$。

这样只需 FFT 2 次就能计算出$F\_{0}(x),F\_{1}(x), G\_{0}(x),G\_{1}(x)$ 的 DFT 。

IDFT 也是同理，虽然 IDFT 前的结果是复数，但是 IDFT 后的结果都是整数，所以也能使用上述的技巧将 IDFT 的次数从 3 次减少到 2 次，从而就得到了只需 FFT 4 次的任意模数的卷积运算。
