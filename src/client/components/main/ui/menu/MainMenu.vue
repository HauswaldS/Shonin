<template>
    <header>
        <nav class="secondary-navigation">
            <a class="applicators-map-link"
               :href="localePath('applicators-map')">
                <v-icon name="map-marker-alt" scale="1.5"></v-icon>
                <div>
                    <span>
                        <strong>{{ $t('ui.nav.find_your_applicator')}}</strong>
                    </span>
                    <span>{{ $t('ui.nav.see_the_map')}}</span>
                </div>
            </a>
            <div class="search-bar">
                <input type="text" :placeholder="$t('ui.nav.your_search')" v-model="search">
                <button type="button" class="t-btn">{{ $t ('ui.nav.search') }}</button>
            </div>
            <div class="societe-infos">
                <a href="tel:+33(0)297401903">+33 (0) 2 97 40 19 03</a>
                <a href="mailto:contact@thermacote.eu">contact@thermacote.eu</a>
            </div>
            <div class="social-media">
                <a href="https://www.facebook.com/ThermacoteFrance/" target="_BLANK" class="facebook">
                    <v-icon name="brands/facebook-square" scale="1.5"></v-icon>
                </a>
                <a href="https://twitter.com/thermacotefr" target="_BLANK" class="twitter">
                    <v-icon name="brands/twitter-square" scale="1.5"></v-icon>
                </a>
                <a href="https://fr.linkedin.com/company/thermacote-france" target="_BLANK" class="linkedin">
                    <v-icon name="brands/linkedin" scale="1.5"></v-icon>
                </a>
            </div>
            <div class="language-switcher">
                <div class="current-language"
                     @click="language_switcher = !language_switcher"
                     @mouseenter="language_switcher = true">
                    <img :src="currentFlag">
                    <v-icon :name="`caret-${language_switcher ? 'up':'down'}`">
                    </v-icon>
                </div>
                <transition name="menu-popover">
                    <nav v-show="language_switcher" @mouseleave="language_switcher = false">
                        <div class="arrow-top-right"></div>
                        <a v-for="language in languages"
                           v-if="i18n.locale !== language.code"
                           :key="language.code"
                           :href="switchLocalePath(language.code)">
                            <img :src="require(`@/assets/images/flag-${language.code}.png`)">
                            {{language.label}}
                        </a>
                    </nav>
                </transition>
            </div>
        </nav>
        <fixed-header :fixed.sync="isFixed" :threshold="61">
            <nav :class="{'primary-navigation': true, 'is-fixed': isFixed}">
                <a class="logo-container" :href="localePath('/')">
                    <img src="@/assets/images/logo-full.png" alt="Thermacote logo"/>
                </a>
                <button @click="mobile_menu = true"
                        class="icon-btn menu-activator"
                        type="button">
                    <v-icon
                        name="bars"
                        scale="1.5"/>
                </button>
                <div class="menu-container">
                    <div>
                        <a :href="localePath('what-is-thermacote')">
                            {{$t('ui.nav.what_is_thermacote')}}
                        </a>
                        <a :href="localePath('case-study')">
                            {{ $t('ui.nav.case_study')}}
                        </a>
                        <a :href="localePath('the-company')">
                            {{$t('ui.nav.the_company')}}
                        </a>
                        <a :href="localePath('realisations')">
                            {{$t('ui.nav.realisations')}}
                        </a>
                    </div>
                    <div>
                        <a @click="sub_menu = !sub_menu"
                           @mouseenter="sub_menu = true"
                           style="position:relative;">
                            {{ $t('ui.nav.informations')}}
                            <button class="icon-btn">
                                <v-icon :name="`caret-${sub_menu ? 'up':'down'}`">
                                </v-icon>
                            </button>
                            <transition name="menu-popover">
                                <div class="sub-menu-container"
                                     v-show="sub_menu"
                                     @mouseleave="sub_menu = false">
                                    <div class="arrow-top-center"></div>
                                    <a :href="localePath('documentation')">
                                        {{$t('ui.nav.documentation')}}
                                    </a>
                                    <a :href="localePath('faq')">
                                        {{$t('ui.nav.faq')}}
                                    </a>
                                    <a :href="localePath('glossary')">
                                        {{$t('ui.nav.glossary')}}
                                    </a>
                                </div>
                            </transition>
                        </a>
                        <a :href="localePath('contact')">
                            {{$t('ui.nav.contact')}}
                        </a>
                    </div>
                </div>
            </nav>
        </fixed-header>
        <transition name="menu-slide-right">
            <nav class="mobile-menu-container" v-show="mobile_menu">
                <button class="icon-btn" type="button" @click="mobile_menu = false">
                    <v-icon name="times-circle" scale="2" label="button"></v-icon>
                </button>
                <a :href="localePath('what-is-thermacote')">
                    {{$t('ui.nav.what_is_thermacote')}}
                </a>
                <a :href="localePath('case-study')">
                    {{ $t('ui.nav.case_study')}}
                </a>
                <a :href="localePath('the-company')">
                    {{$t('ui.nav.the_company')}}
                </a>
                <a :href="localePath('realisations')">
                    {{$t('ui.nav.realisations')}}
                </a>
                <a class="applicators-map-link"
                   :href="localePath('applicators-map')">
                    <div>
                        <v-icon name="map-marker-alt" scale="1.7"></v-icon>
                        <div>
                            <span>{{ $t('ui.nav.find_your_applicator')}}</span>
                            <span>{{ $t('ui.nav.see_the_map')}}</span>
                        </div>
                    </div>
                </a>
                <a :href="localePath('contact')">
                    {{$t('ui.nav.contact')}}
                </a>
                <a :href="localePath('documentation')">
                    {{$t('ui.nav.documentation')}}
                </a>
                <a :href="localePath('faq')">
                    {{$t('ui.nav.faq')}}
                </a>
                <a :href="localePath('glossary')">
                    {{$t('ui.nav.glossary')}}
                </a>
                <div class="languages">
                    <a v-for="language in languages"
                       v-if="i18n.locale !== language.code"
                       :key="language.code"
                       :href="switchLocalePath(language.code)">
                        {{language.label}}
                    </a>
                </div>
            </nav>
        </transition>
    </header>
</template>

<script>
    import FixedHeader from 'vue-fixed-header';
    import {mapState} from 'vuex';

    export default {
        components: {
            FixedHeader
        },
        data() {
            return {
                search: '',
                isFixed: false,
                language_switcher: false,
                mobile_menu: false,
                sub_menu: false,
            }
        },
        computed: {
            ...mapState([
                'i18n',
                'languages'
            ]),
            currentFlag() {
                return require(`@/assets/images/flag-${this.i18n.locale}.png`);
            }
        }

    }
</script>

<style scoped>

    header {
        z-index: 1000;
        -moz-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        -o-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
    }

    .primary-navigation.is-fixed {
        background: white;
        position: fixed;
        top: 0;
        -moz-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        -o-box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.2);
    }

    .primary-navigation.is-fixed .logo-container {
        height: 45px;
    }

    .primary-navigation.is-fixed .logo-container::after {
        display: none;

    }

    .primary-navigation.is-fixed .logo-container img {
        margin-top: 0;
    }

    .secondary-navigation,
    .primary-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .societe-infos,
    .menu-container,
    .social-media,
    .secondary-navigation .applicators-map-link {
        display: none;
    }

    /*SECONDARY NAV*/

    .language-switcher {
        position: relative;
        padding: 1rem;
        border-left: 1px solid rgba(128, 128, 128, 0.27059);
    }

    .language-switcher .current-language img,
    .language-switcher nav img {
        height: 25px;
    }

    .language-switcher nav img {
        padding-right: .2rem;
    }

    .language-switcher .current-language svg {
        padding-left: 2px;
        padding-bottom: 5px;
    }

    .language-switcher nav {
        position: absolute;
        top: 88%;
        left: -7rem;
        background: white;
        padding: 1rem;
        -webkit-box-shadow: 0px 0px 78px -19px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: 0px 0px 78px -19px rgba(0, 0, 0, 0.35);
        box-shadow: 0px 0px 78px -19px rgba(0, 0, 0, 0.35);
        border-radius: 5px;
        z-index: 100;
    }

    .language-switcher nav a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        padding-bottom: 1rem;
        padding-left: .5rem
    }

    .search-bar {
        width: 78%;
    }

    .search-bar input {
        width: 60%;
        padding: .2rem;
        margin-left: 1.5rem;
        border: solid 1px;
        border-color: #d7d7d7;
        line-height: 25px;
        outline: none;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }

    .search-bar button.t-btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: .2rem .5rem;
    }

    /*PRIMARY NAV*/
    .secondary-navigation {
        background-color: #d7d7d759;
    }

    .logo-container {
        width: 55%;
        margin-left: .5rem;
    }

    .logo-container img {
        width: 100%;
        max-width: 170px;
    }

    .menu-activator {
        padding: 1rem;
        color: #005daa;
    }

    /*MOBILE MENU*/

    .mobile-menu-container {
        z-index: 1000;
        position: fixed;
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: white;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, .9);
    }

    .mobile-menu-container > button {
        color: #005daa;
        margin-left: 80vw;
        margin-top: 1rem;
    }

    .mobile-menu-container a {
        display: inline-block;
        width: 80%;
        text-decoration: none;
        font-weight: 400;
        color: white;
        padding: .7rem 0 .7rem 1.5rem;
    }

    .mobile-menu-container .applicators-map-link div {
        display: flex;
        color: orange
    }

    .mobile-menu-container .applicators-map-link {
        display: inline-block;
        margin: .5rem 1rem .5rem 1.5rem;
        padding: 1rem 0 !important;
        border-top: solid 1px grey;
        border-bottom: solid 1px grey;
    }

    .mobile-menu-container .applicators-map-link svg {
        margin-top: .2rem;
    }

    .mobile-menu-container .applicators-map-link > div > div {
        display: flex;
        flex-direction: column;
        padding-left: 1.5rem;
        font-size: .9rem;
        font-weight: 400;
    }

    .mobile-menu-container .languages {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 10px 1.5rem;
        border-top: solid 1px grey;
        padding: 15px 0px 15px 0px;
    }

    .mobile-menu-container .languages a {
        padding-left: 0;
    }

    @media all and (min-width: 700px) {
        .language-switcher {
            width: 12%;
        }

        .search-bar {
            width: 42%;
        }

        .applicators-map-link {
            width: 36%;
        }

        .secondary-navigation {
            padding-left: 20%;
        }

        .secondary-navigation .applicators-map-link {
            display: flex;
            font-size: .8rem;
            text-decoration: none;
            color: black;
            border-right: 1px solid #80808045;
            margin-left: 1rem;
        }

        .applicators-map-link:hover svg {
            transform: translateY(-5px);
        }

        .secondary-navigation .applicators-map-link svg {
            transition: all, transform 200ms ease-out;
            color: #005daa;
            margin-right: 10px;
        }

        .secondary-navigation .applicators-map-link div {
            display: flex;
            flex-direction: column;
            padding-right: 1.5rem;
        }

        .primary-navigation {
            justify-content: flex-end;
            background: white;
        }

        .primary-navigation .logo-container {
            position: absolute;
            top: 0;
            left: 0;
            height: 70px;
            background: white;
            margin: 0;
            display: flex;
            align-items: center;
            width: 15%;
        }

        .primary-navigation .logo-container img {
            width: 100%;
            max-width: 144px;
            margin-left: 1rem;
            margin-top: 1rem;
            margin-right: 1rem;
            z-index: 1000;
        }

        .primary-navigation .logo-container::after {
            position: absolute;
            right: -70px;
            top: 0;
            content: "";
            border-bottom: 36px solid white;
            border-left: 36px solid white;
            border-top: 36px solid transparent;
            border-right: 36px solid transparent;
        }
    }

    @media all and (min-width: 1000px) {

        .search-bar {
            width: 42%;
            border-right: 1px solid rgba(128, 128, 128, 0.27059);
        }

        .societe-infos {
            display: flex;
            flex-direction: column;
            padding: 0 2rem;

        }

        .societe-infos a {
            font-size: .9rem;
            text-decoration: none;
            color: #000;
            text-align: right;
        }

        .menu-activator {
            display: none;
        }

        .menu-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 20%;
            width: 100%;
        }

        .menu-container div {
            display: flex;
            justify-content: flex-start;
        }

        .menu-container a {
            text-decoration: none;
            color: black;
            padding: .8rem .5rem;
        }

        .sub-menu-container {
            position: absolute;
            z-index: 100;
            top: 35px;
            left: 0;
            background: white;
            padding: 1rem;
            -webkit-box-shadow: 0px 0px 78px -19px rgba(0, 0, 0, .35);
            box-shadow: 0px 0px 78px -19px rgba(0, 0, 0, .35);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
        }
    }

    @media all and (min-width: 1150px) {
        .language-switcher {
            width: 9%;
        }

        .primary-navigation .logo-container img {
            margin-left: 20%;
            max-width: 160px;
        }
    }

    @media all and (min-width: 1200px) {
        .social-media {
            display: flex;
            justify-content: space-between;
            border-left: 1px solid rgba(128, 128, 128, 0.27059);
            padding: 0 1rem;
            height: 33px;
        }

        .social-media a {
            display: flex;
            align-items: center;
            padding: 0 .3rem;
        }

        .social-media .facebook {
            color: #3b5998;
        }

        .social-media .twitter {
            color: #1da1f2;
        }

        .social-media .linkedin {
            color: #000000;
        }
    }
</style>
