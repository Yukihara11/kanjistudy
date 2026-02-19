// kanjivganimate.d.ts
declare module "kanjivganimate" {
    export default class KanjivgAnimate {
        constructor(selector: string, duration?: number);
        destroy?: () => void;
    }
}
