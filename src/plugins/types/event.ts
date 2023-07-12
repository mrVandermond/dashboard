 export interface MyEvent<T extends EventTarget = EventTarget > extends Event {
    readonly target: T | null
}
