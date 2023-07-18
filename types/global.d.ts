export { }
declare global {
    interface author {
        name: string
        url: string
    }
    interface repository {
        type: string
        url: string
    }
    const __APP_INFO__: {
        pkg: {
            name: string;
            author: author;
            license: string
            version: string;
            repository: repository;
            description: string
            dependencies: Recordable<string>;
            devDependencies: Recordable<string>;
        };
        gitTags: string;
        lastBuildTime: string;
    };

    interface ImportMetaEnv extends ViteEnv {
        __: unknown;
    }

    type Recordable<T = any> = Record<string, T>

    interface ViteEnv {
        VITE_PORT: number;
    }

    interface Window {
        $dialog: import('naive-ui').DialogApi;
        $message: import('naive-ui').MessageApi;
        $loading: import('naive-ui').LoadingBarApi;
        $notification: import('naive-ui').NotificationApi;
    }
}
