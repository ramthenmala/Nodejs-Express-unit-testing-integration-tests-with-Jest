# The largest heading
## jest.fn
Reference Link [pluralsight](https://www.pluralsight.com/guides/how-does-jest.fn()-work)

Method allows us to create a new mock function directly.

1. by itself, a higher-order function
2. It's a factory method that creates new, unused mock functions
3. Each mock function has some special properties. The mock property is fundamental. This property is an object that has all the mock state information about how the function was invoked. This object contains three array properties:

- Calls - property, it will store the arguments used on each call
- Instances - property will contain the this value used on each invocation
- Results - array will store how and with which value the function exited each invocation.

There are three ways a function can complete:

1. The function explicitly returns a value.
2. The function runs to completion with no return statement (which is equivalent to returning undefined).
3. The function throws an error.


```
function greetWorld(greettingFn) {
  return greetingFn('world');
}

test('greetWorld calls the greeting function properly', () => {
  const greetImplementation = name => `Hey, ${name}!`;
  const mockFn = jest.fn(greetImplementation);
  const value = greetWorld(mockFn);
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('world');
  expect(value).toBe('Hey, world!');
});
```
Jest provides a set of custom matchers to check expectations about how the function was called:

```
expect(fn).toBeCalled()
expect(fn).toBeCalledTimes(n)
expect(fn).toBeCalledWith(arg1, arg2, ...)
expect(fn).lastCalledWith(arg1, arg2, ...)
```
### How Does It Work?

## jest.spyOn
To mock an object method.

## jest.mock
To mock a whole module.

###### The smallest heading