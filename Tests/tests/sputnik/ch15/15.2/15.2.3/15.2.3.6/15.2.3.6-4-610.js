/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-610.js
 * @description ES5 Attributes - all attributes in Object.keys are correct
 */


function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "keys");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.keys;

        try {
            Object.keys = "2010";

            var isWritable = (Object.keys === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "keys") {
                    isEnumerable = true;
                }
            }
        
            delete Object.keys;

            var isConfigurable = !Object.hasOwnProperty("keys");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, "keys", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
