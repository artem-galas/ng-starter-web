export const entityStartLoadingFn = <T>(state: T) => ({...(state as any), isLoading: true, selectedId: undefined});
export const entityStopLoadingFn = <T>(state: T) => ({...(state as any), isLoading: false});
export const entityErrorFn = <T>(state: T, error: any) => ({...(state as any), isLoading: false, selectedId: undefined, error});
