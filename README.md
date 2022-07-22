### Use Cases:

```js
localstorage.listAll(); // list all keys
localstorage.getAll(); // get all keys
localstorage.get("key"); // return one value
localstorage.get(["key1", "key2"]); // return object of values
localstorage.save("key", "value"); // save one value
localstorage.save({"key1": "value1", "key2": "value2"}); // save multiple values
localstorage.remove("key"); // remove one value
localstorage.remove(["key1", "key2"]); // remove multiple values
```