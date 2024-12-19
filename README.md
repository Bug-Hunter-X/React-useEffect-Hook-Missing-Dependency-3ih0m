# React useEffect Hook Missing Dependency

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The `useEffect` hook is missing a dependency, leading to unexpected behavior.

## Bug Description

The `MyComponent` component uses `useState` to track a count. An `useEffect` is used to log a message when the count is greater than 0. However, the dependency array for `useEffect` is missing, causing the effect to not always run as expected.  Specifically, the effect is only triggered if the count is greater than 0 when the component mounts and never runs otherwise.

## Solution

The solution involves adding the `count` state variable to the dependency array of the `useEffect` hook.  This ensures the effect runs whenever the `count` changes.