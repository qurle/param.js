/* Copyright (c) 2021, Nikita Denisov
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. */

redirect = {
    "i": "utm_source=instagram&utm_medium=bio&utm_campaign=inst",
    "f": "utm_source=figma&utm_medium=bio&utm_campaign=figma",
    "v": "utm_source=vk&utm_medium=bio&utm_campaign=vk",
    "e": "utm_source=email&utm_medium=sign&utm_campaign=email",
    "t": "utm_source=telegram&utm_medium=message&utm_campaign=telegram",
    "s": "utm_source=test&utm_medium=test&utm_campaign=test",
    "ss": "utm_source=test&utm_medium=test&utm_campaign=test",
    "g": "utm_source=github&utm_medium=param-js-readme&utm_campaign=paramjs"
}

const search = window.location.search
let chached = false
if (search) {
    // Our params
    const params = new URLSearchParams(search)
    // Replace params
    for ([k, v] of params) {
        if (redirect[k] != undefined) {
            changed = true
            params.delete(k)
            if (!search.includes(redirect[k]))
                for ([k2, v2] of new URLSearchParams(redirect[k]).entries())
                    params.append(k2, v2)
        }
    }
    if (changed)
        window.location.href = window.location.origin + window.location.pathname.replace(/\\$/, '') + '?' + params.toString()
}