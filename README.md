# param.js

Simple script that allows you to share short link like `example.com?i` and redirect user to anything you want (ex. `example.com?utm_source=instagram&utm_medium=bio&utm_campaign=inst`)

## Why

We often have to share our link. Put them in bio, send with messages, attach them to posts. And sometimes we have to put some URL parameters. Like UTM codes. They're clumsy, looooong and they overshadow what we really want to show: our perfect beautiful website address.

[qurle.net?utm_source=github&utm_medium=param-js-readme&utm_campaign=paramjs](https://qurle.net?utm_source=github&utm_medium=param-js-readme&utm_campaign=paramjs) is yuck.

[qurle.net?g](https://qurle.net?g) is much better.

## How to use

Just put in your server directory and connect by `<script scr="path/to/param.js"></script>` tag. You definitely can put it in your `<head>` as soon as it should redirect user instantly.

Change redirect object with URL-parameters you need (the example is given) and you're on!

## Parameters

Here's and example of your redirect object:

```
redirect = {
    "s": "utm_source=test&utm_medium=test&utm_campaign=test",
    "e": "utm_source=email&utm_medium=sign&utm_campaign=email",
    "f": "utm_source=figma&utm_medium=bio&utm_campaign=figma",
    ...
}
```

This means that `example.com/whatever?e` will redirect to `example.com/whatever?utm_source=email&utm_medium=sign&utm_campaign=email`

## Problem? Idea? Kind words?

I accept feature suggestions and ideas to improve this script. 
Or you can contact me via e-mail at [nick@qurle.net](mailto:nick@qurle.net?subject=param.js) or at [qurle.net/contact](https://qurle.net/contact).

## <3
