declare module 'framer-motion' {
    export * from 'framer-motion/dist/index';
}

declare module 'framer-motion/dist/index' {
    import { ComponentType, ReactNode, CSSProperties } from 'react';

    export interface MotionProps {
        children?: ReactNode;
        style?: any;
        className?: string;
        whileHover?: any;
        whileTap?: any;
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        [key: string]: any;
    }

    export interface UseScrollOptions {
        target?: any;
        offset?: string[] | [string, string];
        [key: string]: any;
    }

    export interface MotionValue<T = any> {
        get(): T;
        set(value: T): void;
        on(event: string, callback: (value: T) => void): () => void;
    }

    export const motion: {
        div: ComponentType<MotionProps>;
        nav: ComponentType<MotionProps>;
        button: ComponentType<MotionProps>;
        [key: string]: ComponentType<MotionProps>;
    };

    export function useScroll(options?: UseScrollOptions): {
        scrollY: MotionValue<number>;
        scrollYProgress: MotionValue<number>;
    };

    export function useTransform<T>(
        value: MotionValue,
        inputRange: number[],
        outputRange: T[]
    ): MotionValue<T>;
}
