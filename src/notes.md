**MOUNTING**

1. Constructor will run once on initial render

2. Render() - _do not call setState in render_

3. componentDidMount() runs(All children will run before the parent component mounts), good place for setting up ajax calls and setting up subscriptions

**UPDATING**

**_When you change state all components in the class and its children will re-render_**

5. getDerivedStateFromProps()

6. ShouldComponentUpdate() - pass **_true_** if it should or **_false_** if it shouldnt re-render

7. render() may run again

8. getSnapShotBeforeUpdate()

9. componentDidUpdate()

**UNMOUNTING**

10. componentWillUnmount()

**ERROR HANDLING**

- getDerivedStateFromError()
- componentDidCatch()
