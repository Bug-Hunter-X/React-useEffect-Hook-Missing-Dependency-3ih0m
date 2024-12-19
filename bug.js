```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for the effect dependency
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // This is missing in the bug

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```