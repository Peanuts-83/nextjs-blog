---
title: '{ "Frustration": "Motivation" }'
date: '2022-05-10'
tech: 'Mood'
---

I see some learners express their difficulties on a daily basis and ask themselves the question of continuing. It is healthy to express oneself and to externalize one's anxieties.

**However, we must make one thing clear: a young dev will be frustrated 90% of his time, falling from problem to problem during his apprenticeship.**

That's how it is, you have to accept this frustration and make it a source of motivation by keeping in mind these remaining 10% of satisfaction from having overcome a seemingly insoluble problem 😀!

**For example, here is my day on Sunday:**

In the morning, I started learning *NextJS*, a React-based framework that links front and back and allows SSR among other things.

In the afternoon, I tackle the migration of P13-ArgentBank into this techno, starting with the transition of the Redux store (huge piece!). The changes don't look complex and are few in number... and then bam!

*Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.*

I spent hours turning the problem around, consulted dozens of doc and forum pages to make sure my store's Provider was taken correctly.

Then I gradually moved away, I observed the close components then more distant... until my Header component. Nothing to do with Redux!
I use the Link component there, which is imported into React-CRA as follows:

```javascript
import { Link } from 'react-router-dom'
```

In NextJS, it is imported as follows:

```javascript
import Link from 'next/link'
```

**I removed the braces, smiled to have found the solution, put the computer to sleep. Sweet Dreams. It was 11 p.m....**
