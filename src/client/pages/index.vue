<template>
    <section id="main-slider">
        <swiper :options="slidersOption.mainSlider">
            <swiper-slide v-for="slide in mainSliderSlides"
                          :key="slide.title">
                <div class="overlay"></div>
                <div class="image" :style="{backgroundImage: `url(${slide.img_url})}`}"></div>
                <h2>{{ slide.title}}</h2>
                <h3>{{ slide.subtitle}}</h3>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
    import _ from 'lodash';
    import {mapState} from 'vuex';

    export default {
        layout: 'main',
        data() {
            return {
                slidersOption: {
                    mainSlider: {
                        loop: true,
                        slidesPerView: 1,
                        slides: [
                            {
                                img_url: require('@/assets/images/thermacote_industrial_application.jpg'),
                                title: this.$t('home.sliders.main_slider.slide2.title'),
                                subtitle: this.$t('home.sliders.main_slider.slide2.subtitle'),
                                order: 2
                            },
                            {
                                img_url: require('@/assets/images/thermacote_insulation_house.jpg'),
                                title: this.$t('home.sliders.main_slider.slide4.title'),
                                subtitle: this.$t('home.sliders.main_slider.slide4.subtitle'),
                                order: 4
                            },
                            {
                                img_url: require('@/assets/images/thermacote_container_insulation.jpg'),
                                title: this.$t('home.sliders.main_slider.slide3.title'),
                                subtitle: this.$t('home.sliders.main_slider.slide3.subtitle'),
                                order: 3
                            },
                            {
                                img_url: require('@/assets/images/thermacote_application.jpg'),
                                title: this.$t('home.sliders.main_slider.slide1.title'),
                                subtitle: this.$t('home.sliders.main_slider.slide1.subtitle'),
                                order: 1
                            },

                        ]
                    }
                }
            }
        },
        computed: {
            ...mapState(['languages']),
            mainSliderSlides() {
                return _.orderBy(this.slidersOption.mainSlider.slides, ['order', 'asc']);
            }
        },
        async fetch({store, params}) {
            if (!store.state.languages.length) {
                await store.dispatch('getLanguages')
            }
        }
    };
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
