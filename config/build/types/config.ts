
export type BuildMode = "development" | "production";

export interface buildPaths {
    entry: string;
    build: string;
    html: string;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: buildPaths;
    isDev: boolean;
}