/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-292.js
 * @description Object.defineProperties - 'O' is an Arguments object, 'P' is an array index named accessor property of 'O' but not defined in [[ParameterMap]] of 'O', and 'desc' is accessor descriptor, test updating multiple attribute values of 'P' (10.6 [[DefineOwnProperty]] step 3)
 */


function testcase() {

        var arg;

        (function fun() {
            arg = arguments;
        }(0, 1, 2));

        function get_func1() {
            return 10;
        }

        Object.defineProperty(arg, "0", {
            get: get_func1,
            enumerable: true,
            configurable: true
        });

        function get_func2() {
            return 20;
        }

        Object.defineProperties(arg, {
            "0": {
                get: get_func2,
                enumerable: false,
                configurable: false
            }
        });

        return accessorPropertyAttributesAreCorrect(arg, "0", get_func2, undefined, undefined, false, false);
    }
runTestCase(testcase);
