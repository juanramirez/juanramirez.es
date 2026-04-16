---
title: "7 tips to have your code better reviewed [<em>recovered post</em>]"
date: 2021-08-29 13:30:00 +0200
tags:
  - code review
featured-image: "/assets/images/code_review.png"
featured-image-alt: Code reviews are a fantastic way to keep all the team on the same page
excerpt: "Code reviews are a fantastic way to keep all the team on the same page and encourage everybody to follow best coding practices. Here you have tips to avoid your code reviews to become painful or useless."
published: true
---

<div class="recovered-note"><strong>Note:</strong> This post has been recovered from my archive after having been lost <a href="/abi/about-me/hello-and-welcome/">due to my brain injury</a>. It was originally posted in my old development blog on September 25, 2017.</div>

![code-review](/assets/images/code_review.png)

Code reviews take time. Of course. But they are helpful. **Very** helpful. They are a fantastic way to keep all the team on the same page and encourage everybody to do _the right things_ and to do them _correctly_. Here you have some tips I've learn through the years to avoid my code reviews to become painful or useless:

1. **Create reviews for all the code you push**. No, seriously: **do it**. Some companies or teams have this process semi-automated or very established as part of its tech culture. If they don't, ask your manager to do so. And if she responds that it's a bad idea, run out of that company!! _NOW!!_.

    **Remember:** Most of the times _optional code reviews_ means _no code reviews_.

2. **Create your reviews _early and often_**. Don't wait to have a monster with a million of lines of code. Several small, specific changesets, are way easier to review than one big changeset with lots of changes. Also, your changes will more likely be accepted if you divide them into several smaller steps.

3. **Review your own code** before showing it to your teammates. Imagine you receive that code from another person to be reviewed for the first time. **Be your best reviewer**, be critical with your code. Take your time.

4. In order to avoid noise, use your IDE to identify possible bugs. Modern IDEs analyze your code in order to find possible warnings or bugs. If your IDE does not analyze it automatically, **pass your code through a static code analyzer**.

	If your team uses a code formatting standard, **use an automatic formatting tool** to format it. This will allow your teammates to concentrate on the really important things and avoid silly conversation threads about coding style.

5. **_Prepare_ your review**. I mean, not only add the code or the changesets you want to review. Link the review to the corresponding ticket and/or explain the feature you're trying to add, focusing on implementation details that maybe are _not_ in the ticket, but are relevant. If there is some piece of code which is not obvious, you should explain _why_ you did it that way and not differently.

6. Carefully **select the people you want to review your code**. If there is a policy for that, follow it. Most of the cases, however, not everybody in your team needs to review your code.

    People who probably needs to be included in your code review includes your manager, some people with experience in the related product domain, the original author of the piece of code you're touching (or just someone who touched the code before) and anyone who is developing another related feature in parallel (ask for that if necessary).

7. **Don't take it personally**. It's _your code_ what is being reviewed, not _you_. Long comment threads in a review doesn't mean someone hates you or wants to annoy you. More probably, it will mean she disagrees with you in some specific technical thing. Be nice, **assume the best intentions** on the reviewer and answer all the comments pleasantly.

    **Be ready to learn from others**. Be grateful on the good suggestions and express your arguments clearly, but with politeness, if there's something you honestly don't agree with.
