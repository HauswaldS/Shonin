<template>
    <section>
        <article id="main-slider">
            <swiper :options="slidersOption.mainSlider">
                <swiper-slide v-for="slide in mainSliderSlidesOrdered"
                              :key="slide.title">
                    <div class="image" :style="{backgroundImage: `url(${root}${slide.img_url})`}">
                        <div class="content">
                            <h2>{{ slide.title}}</h2>
                            <h3>{{ slide.subtitle}}</h3>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </swiper-slide>
            </swiper>
        </article>
        <section id="product-presentation">
            <article>
                <div class="content">
                    <h2>{{ $t('home.product_presentation.title')}}</h2>
                    <p>{{ $t('home.product_presentation.text')}}</p>
                </div>
                <div class="application-fields-container">
                    <div v-for="field in productPresentationCardsOrdered"
                         :key="field.img_url"
                         class="product-field-card">
                        <div class="image" :style="{backgroundImage: `url(${root}${field.img_url})`}">
                        </div>
                        <h2>{{field.title}}</h2>
                        <p>{{field.text}}</p>
                    </div>
                </div>
            </article>
            <aside>
                <a :href="localePath('what-is-thermacote')">
                    <span>{{$t('home.product_presentation.wanna_know_more')}}</span>
                    <v-icon name="regular/question-circle" scale="5"></v-icon>
                </a>
            </aside>
        </section>
        <article id="our-clients">
            <h2>{{ $t('our_clients')}}</h2>
            <!--<swiper-slide v-for="client in clients"-->
            <!--:key="client.logo">-->
            <!--{{client.logo}}-->
            <!--</swiper-slide>-->
        </article>
        <article id="case-studies">
            <h2>{{ $t('case_studies')}}</h2>
            <!--<swiper-slide v-for="caseStudy in caseStudies"-->
            <!--:key="`cs${caseStudy.id}`">-->
            <!--{{caseStudy.id}}-->
            <!--</swiper-slide>-->

        </article>
        <article id="certifications">
            <h2>{{ $t('certifications')}}</h2>
            <!--<swiper-slide v-for="caseStudy in caseStudies"-->
            <!--:key="`cs${caseStudy.id}`">-->
            <!--{{caseStudy.contents[0]}}-->
            <!--</swiper-slide>-->
        </article>
    </section>

</template>

<script>
    import _ from 'lodash';
    import {mapState} from 'vuex';

    export default {
        layout: 'main',
        data() {
            return {
                languages: [],
                clients: [],
                caseStudies: [],
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
                            }
                        ]
                    }
                },
                content: {
                    product_presentation: {
                        cards: [
                            {
                                img_url: require('@/assets/images/thermacote_industrial.jpg'),
                                title: this.$t('home.product_presentation.card1.title'),
                                text: this.$t('home.product_presentation.card1.text'),
                                order: 2
                            },
                            {
                                img_url: require('@/assets/images/thermacote_house_walls.jpg'),
                                title: this.$t('home.product_presentation.card2.title'),
                                text: this.$t('home.product_presentation.card2.text'),
                                order: 1
                            },
                            {
                                img_url: require('@/assets/images/thermacote_trailers.jpg'),
                                title: this.$t('home.product_presentation.card3.title'),
                                text: this.$t('home.product_presentation.card3.text'),
                                order: 3
                            },
                        ]
                    }
                }
            }
        },
        computed: {
            ...mapState([
                'root'
            ]),
            mainSliderSlidesOrdered() {
                return _.orderBy(this.slidersOption.mainSlider.slides, ['order', 'asc']);
            },
            productPresentationCardsOrdered() {
                return _.orderBy(this.content.product_presentation.cards, ['order', 'asc']);
            }
        },
        async asyncData({store, params}) {
            const clients = await store.dispatch('getClients', {skipNullLogo: true});

            const caseStudies = await store.dispatch('getCaseStudies', {limit: 3});
            console.log(clients, caseStudies)
            return {
                clients,
                caseStudies
            }
        }
    };
</script>

<style>
    /*ALL*/

    #product-presentation {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }

    /*MAIN SLIDER*/

    #main-slider .image {
        position: relative;
        height: 60vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
    }

    #main-slider .image .overlay {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.56);
    }

    #main-slider .image .content {
        z-index: 2;
        text-align: center;
        margin: 2rem;
    }

    #main-slider .image .content h2 {
        color: white;
        text-transform: uppercase;
    }

    #main-slider .image .content h3 {
        margin-top: 1rem;
        color: #f58426;
    }

    /*PRODUCT PRESENTATION*/
    #product-presentation {
        display: flex;
        justify-content: space-between;
    }

    #product-presentation aside {
        display: none;
        position: relative;
        background-color: #f58426;
        border: 4px solid #f58426;
        border-top: 0;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        -webkit-box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.3);
        transition: all ease-in .3s;
    }

    #product-presentation aside:hover {
        background: white !important;
        color: #f58426;
    }

    #product-presentation aside a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        padding: 1rem;
        color: white;
    }

    #product-presentation aside a span {
        font-size: 3rem;
        font-family: 'Comfortaa';
        font-weight: 100;
        margin-bottom: 25%;
    }

    #product-presentation article {
        width: 100%;
    }

    #product-presentation article .content h2 {
        letter-spacing: .2rem;
        font-weight: 100;
        margin: 1rem 0;
        line-height: 2.999rem;
    }

    #product-presentation article .content p {
        line-height: 2rem;
        font-size: 1.4rem;
        font-weight: 100;
    }

    /*APPLICATIONS FIELDS CARDS*/

    .application-fields-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .product-field-card {
        width: 33%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 280px;
        margin-top: 2rem;
        -webkit-box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.3);
        border-bottom: 12px solid #005daa;
    }

    .application-fields-container .image {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: cover;
    }

    .application-fields-container h2 {
        text-transform: uppercase;
        background: #005daa;
        color: white;
        text-align: center;
        padding: 2rem 0;
        font-size: 1.8rem;
        font-weight: 100;
        letter-spacing: .2rem;
    }

    .application-fields-container p {
        font-size: 1rem;
        font-weight: 100;
        padding: 2rem 1rem;
        height: 100%;
    }

    @media all and (min-width: 900px) {
        .application-fields-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
        }
    }

    @media all and (min-width: 1100px) {
        #product-presentation aside {
            display: flex;
            width: 25%;
        }

        #product-presentation article {
            width: 74%;
        }
    }


</style>
