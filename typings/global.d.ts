declare const DEBUG: boolean;
declare const module: IHotModule;

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}