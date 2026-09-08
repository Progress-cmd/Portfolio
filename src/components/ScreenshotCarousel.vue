<template>
    <div class="carousel">
        <div class="stage">
            <button class="arrow arrow-prev" @click="prev">‹</button>

            <div class="track">
                <img
                    v-for="(screenshot, index) in props.screenshots"
                    :key="index"
                    :src="screenshot"
                    class="slide"
                    :class="{
                        active: index === currentIndex,
                        prev: index === currentIndex - 1,
                        next: index === currentIndex + 1,
                        hidden: Math.abs(index - currentIndex) > 1
                    }"
                    @click="index === currentIndex ? openLightbox() : goTo(index)"
                >
            </div>

            <button class="arrow arrow-next" @click="next">›</button>
        </div>

        <div class="thumbnails">
            <img
                v-for="(screenshot, index) in props.screenshots"
                :key="index"
                :src="screenshot"
                class="thumbnail"
                :class="{ active: index === currentIndex }"
                @click="goTo(index)"
            >
        </div>

        <Teleport to="body">
            <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
                <img :src="props.screenshots[currentIndex]" class="lightbox-image" @click.stop>
                <button class="lightbox-close" @click="closeLightbox">×</button>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    screenshots: Array
})
const currentIndex = ref(0)
let intervalId

function startAutoplay() {
    clearInterval(intervalId)
    intervalId = setInterval(next, 15000)
}

function prev(){
    currentIndex.value = (currentIndex.value - 1 + props.screenshots.length) % props.screenshots.length
    startAutoplay()
}
function next(){
    currentIndex.value = (currentIndex.value + 1) % props.screenshots.length
    startAutoplay()
}
function goTo(index) {
    currentIndex.value = index
    startAutoplay()
}

onMounted(() => { startAutoplay() })
onUnmounted(() => { clearInterval(intervalId) })

const lightboxOpen = ref(false)

function openLightbox() { lightboxOpen.value = true }
function closeLightbox() { lightboxOpen.value = false }
</script>

<style scoped>
.carousel {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
}

.stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 320px;
}

.track {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 480px;
    max-width: 70%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;
}

.slide.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    z-index: 3;
    filter: none;
    cursor: default;
}

.slide.prev {
    transform: translate(-90%, -50%) scale(0.8);
    opacity: 0.5;
    z-index: 2;
    filter: brightness(0.6);
}

.slide.next {
    transform: translate(-10%, -50%) scale(0.8);
    opacity: 0.5;
    z-index: 2;
    filter: brightness(0.6);
}

.slide.hidden {
    opacity: 0;
    pointer-events: none;
    z-index: 1;
}

.arrow {
    position: relative;
    z-index: 4;
    background: none;
    border: 1px solid var(--border);
    color: var(--font-sub2);
    font-size: 1.5rem;
    line-height: 1;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.arrow:hover {
    border-color: var(--font-sub);
    color: var(--font-sub);
}

.thumbnails {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
}

.thumbnail {
    width: 60px;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid var(--border);
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.15s ease, border-color 0.15s ease;
}

.thumbnail:hover {
    opacity: 0.8;
}

.thumbnail.active {
    opacity: 1;
    border-color: var(--font-sub);
}

.lightbox-overlay {
    position: fixed;
    inset: 0;
    background: color-mix(in srgb, var(--background) 90%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 3rem;
}

.lightbox-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.lightbox-close {
    position: fixed;
    top: 1.5rem;
    right: 2rem;
    background: none;
    border: 1px solid var(--border);
    color: var(--font-sub2);
    font-size: 1.5rem;
    line-height: 1;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.lightbox-close:hover {
    border-color: var(--font-sub);
    color: var(--font-sub);
}

@media (max-width: 768px) {
    .stage {
        height: 240px;
        gap: 0.25rem;
    }

    .slide {
        width: 100%;
        max-width: 78%;
    }

    .slide.prev {
        transform: translate(-95%, -50%) scale(0.8);
        opacity: 0.35;
    }

    .slide.next {
        transform: translate(-5%, -50%) scale(0.8);
        opacity: 0.35;
    }

    .arrow {
        width: 2rem;
        height: 2rem;
        font-size: 1.2rem;
        flex-shrink: 0;
    }

    .thumbnails {
        flex-wrap: wrap;
        justify-content: center;
    }

    .lightbox-overlay {
        padding: 1.5rem;
    }

    .lightbox-close {
        top: 1rem;
        right: 1rem;
    }
}

@media (max-width: 480px) {
    .stage {
        height: 200px;
    }

    .slide {
        max-width: 85%;
    }

    .slide.prev,
    .slide.next {
        opacity: 0.2;
    }
}
</style>