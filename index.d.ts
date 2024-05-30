declare namespace DragEasing{
    interface ConstructorProp{
        element?: HTMLElement | string,
        elementOutsideRemoveEvent?: boolean,
        windowOutsideRemoveEvent?: boolean,
        minX?: number,
        maxX?: number,
        minY?: number,
        maxY?: number,
        easingRatio?: number,
        moveRatio?: number,
        onDragging?: (e: any) => void,
    }
}

declare class DragEasing{
    constructor(prop:DragEasing.ConstructorProp);
    destroy(): void;
}

export default DragEasing;
