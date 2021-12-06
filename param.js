/* Copyright (c) 2021, Nikita Denisov
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. */

redirect = {
    "s": "utm_source=test&utm_medium=test&utm_campaign=test",
    "e": "utm_source=email&utm_medium=sign&utm_campaign=email",
    "f": "utm_source=figma&utm_medium=bio&utm_campaign=figma",
    "g": "utm_source=github&utm_medium=param-js-readme&utm_campaign=paramjs",
    "i": "utm_source=instagram&utm_medium=bio&utm_campaign=inst",
    "t": "utm_source=telegram&utm_medium=message&utm_campaign=telegram",
    "v": "utm_source=vk&utm_medium=bio&utm_campaign=vk",
}

export default Param = (redirect) => {
    let changed = false
    const params = new URLSearchParams(window.location.search)              // Our params
    for ([k, v] of params) {                                                // Check 'em
        if (redirect[k]) {
            changed = true
            params.delete(k)                                                // Remove param
            for ([k2, v2] of new URLSearchParams(redirect[k]).entries())
                if (!params.has(k2))
                    params.append(k2, v2)                                   // And add parameter
        }
    }
    if (changed)
        window.location.href = window.location.origin + window.location.pathname.replace(/\\$/, '') + '?' + params.toString()
}