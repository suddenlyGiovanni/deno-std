// Copyright 2018-2025 the Deno authors. MIT license.
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g6-3
description: >
    The JSON lexical grammar allows 'b' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\b"'), '\b', 'JSON.parse(\'"\\b"\')');
