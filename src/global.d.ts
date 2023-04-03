export { }
declare global {
    const __APP_INFO__: {
        pkg: {
            name: string;
            license: string
            version: string;
            dependencies: Recordable<string>;
            devDependencies: Recordable<string>;
        };
        gitTags: string;
    };

    type Recordable<T = any> = Record<string, T>

    interface ViteEnv {
        VITE_PORT: number;
    }
}
