declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import React from 'react';

    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.woff";
declare module "*.woff2";

declare const __IS_DEV__: boolean;