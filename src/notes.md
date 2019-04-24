1. Constructor will run once on initial render

2. Component will mount

3. Render now runs 3rd - do not call setState in render

4. Component did mount runs(All children will run before the parent component mounts), good place for setting up ajax calls and setting up subscriptions

**_When you change state all components in the class and its children will re-render_**

5. ShouldComponentUpdate - pass **_true_** if it should or **_false_** if it shouldnt re-render
