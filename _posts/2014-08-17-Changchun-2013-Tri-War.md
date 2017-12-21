---
layout: post
title: "hdu 4822 Tri-War"
author: Sd.Invol
tags: ["Editorial"]
category: algorithm
---

[题目链接](http://acm.hdu.edu.cn/showproblem.php?pid=4822)

给定一棵无根树，边权都为1，每次询问给定三个点，求这三个点各控制了多少个点。

点A被点B控制当且仅当点A到其他点的的距离都小于点A到点B的距离。

这道题可以是一道大讨论题，但感觉很容易讨论错且找不到问题。所以想了一些更完备<del>优美</del>的做法。

三个点$x , y , z$确定以后，明显对于大部分点都是没有意义的，有意义的只有$x , y , z$之间的$LCA$，即最近公共祖先。为了避免麻烦，我将$x , y , z$间路径的中点也列入关键点，这个中点有可能有两个。

这样对于一个询问，就能把树简化为一个至多12个点的结构。利用树的dfs序列可以实现线性复杂度建树，当然这里暴力建树也没问题。

现在再考虑其他点，这些点分为两类，一部分点会附加到某个关键点上，另一部分点会附加到关键点之间的边上，每个关键点和边的权值都可以用子树的size容斥出来。最后就可以在这棵树上DFS出每个点/边被$x , y , z$哪个点控制。点权可能无法被控制，但边权肯定是要被一个点控制的。

这种做法也很容易扩展到每次询问给定$k$个点的情况，每次询问的时间复杂度都是$O(k)$级别的。

建立新树的关键代码：

    foreach(it , Vec) {
        int u = *it;
        while (top && R[u] > R[S[top - 1]]) {
            -- top;
        }
        val[u] = size[u];
        if (top) {
            int v = S[top - 1] , w = size[getkth(u , dep[u] - dep[v] - 1)];
            val[v] -= w;
            wei[MCNT >> 1] = w - size[u];
            E[MCNT] = (edge) {u , P[v]} , P[v] = MCNT ++;
            E[MCNT] = (edge) {v , P[u]} , P[u] = MCNT ++;
        } else {
            val[u] += n - size[u];
        }
        S[top ++] = u;
    }
