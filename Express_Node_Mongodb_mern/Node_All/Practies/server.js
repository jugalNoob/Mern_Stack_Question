import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(new URL(import.meta.url));
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}