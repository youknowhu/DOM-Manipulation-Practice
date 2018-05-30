/* Account for popping when no item is available,
also account if it is the last item in the stack. */

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
  }

  push(item) {
    const lastStack = this.stacks[this.stacks.length - 1];

    if (lastStack.length === this.capacity) {
      this.stacks[this.stacks.length] = [item];
    } else {
      lastStack.push(item);
    }
  }

  pop() {
    const lastStack = this.stacks[this.stacks.length - 1];
    lastStack.pop();

    if (lastStack.length === 0) this.stacks.pop();
  }

  popAt(idx) {
    const currentStack = this.stacks[idx];
    currentStack.pop();
  }
}
