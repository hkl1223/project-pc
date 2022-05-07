declare module 'vue' {
    export interface GlobalComponents {
        Carousel: typeof import('./src/components/carousel/carousel.vue')['default']
        Waterfalls: typeof import('./src/components/waterfalls/waterfalls.vue')['default']
    }
}

export { }