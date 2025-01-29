# Node.js Server Unresponsiveness with Long-Running Tasks

This repository demonstrates a common issue in Node.js where a server can become unresponsive when dealing with long-running operations that are not handled asynchronously.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` example uses `setInterval` to simulate a long-running task within the request handler.  Because this is a synchronous operation,  the server will not be able to handle subsequent requests until this task is finished.  This leads to unresponsiveness and potential performance bottlenecks.

## Solution

The `bugSolution.js` file demonstrates the proper approach using asynchronous programming with `setTimeout` or promises.  This allows the server to handle other requests concurrently while the long-running task executes in the background.