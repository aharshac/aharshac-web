---
cizm_thread_id: S1fpYk2Rx
cizm_path: 'https://www.collaborizm.com/thread/S1fpYk2Rx'
category: general
date: '2017-04-24T21:10:17.692Z'
title: Adding bugs to collaborizm.
route: blog/adding-bugs-to-collaborizm.md
layout: Post
description: >-
  I wanted @Robert and @Anton to distinguish inline code from regular text and I
  gave them the CSS too. 


  While the CSS gave me what I…
---
I wanted @[Robert](21339) and @[Anton](4kvzVlj5e) to distinguish **inline code** from regular text and I gave them the CSS too. 

While the CSS gave me what I wanted, it started overriding the syntax highlighting in **block code**.
![image.png](czm://pkoibmn2ff1hrffgzsvt)

## Faulty CSS
```
code {
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    border-radius: 3px;
    color: #dd1144;
    padding: 2px 4px;
    overflow-wrap: break-word;
}
```

## Fix
```
*:not(pre) > code {
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    border-radius: 3px;
    color: #dd1144;
    padding: 2px 4px;
    overflow-wrap: break-word;
}
```

PS: Are there prizes for fails? :P 

#Fail #fails
