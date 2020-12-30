export interface ISpacing {
    (): string;
    (all: number): string;
    (topAndBottom: number, rightAndLeft: number): string;
    (top: number, rightAndLeft: number, bottom: number): string;
    (top: number, right: number, bottom: number, left: number): string;
}
type ICreateSpacing = (baseValue?: number) => ISpacing;

type ITransform = (value?: number) => string;
type IBaseTransform = (baseValue: number) => ITransform;

const transform: IBaseTransform = (baseValue) => (value = 1): string => `${baseValue * value}px`;

export const createSpacing: ICreateSpacing = (baseValue = 8) => {
    const baseTransform = transform(baseValue);

    return (...args: number[]): string => (!args.length ? baseTransform() : args.map(baseTransform).join(' '));
};
