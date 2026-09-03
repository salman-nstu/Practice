// Problematic
function createStore() {
    const state = { user: 'Alice' };
    return {
        getState: () => state // Exposes mutable reference!
    };
}

const store = createStore();
store.getState().user = 'Hacked'; // Bypasses store restrictions!

console.log(store.getState());

// Defensive Fix: Return a shallow/deep clone or read-only copy
function createSecureStore() {
    const state = { user: 'Alice' };
    return {
        getState: () => ({ ...state }) // Safe clone
    };
}