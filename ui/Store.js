// Simple store for the global state, use sparely, most state is should be in component scope
export const Store = {
    notification: new ReactiveVar({ msg: '', type: 'warn' }),
}