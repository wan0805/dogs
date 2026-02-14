/* import { watchEffect } from 'vue';

export function Head(props) {
    watchEffect(() => {
        const title = props.title ? `${props.title} | Dogs` : 'Dogs';
        document.title = title;

        const description = props.description || '';
        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
    });
} */

import { watchEffect } from 'vue';

export function Head(props) {
    watchEffect(() => {
        const title = props.title ? `${props.title} | Dogs` : 'Dogs';
        document.title = title;

        // 2. Meta Descrição Padrão
        const description = props.description || 'Dogs Origamid - A rede social para amantes de cachorros.';
        setMetaTag('name', 'description', description);

        // 3. Open Graph (Facebook / WhatsApp / LinkedIn / Instagram)
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:type', 'website');
        // Idealmente, passe uma URL de imagem padrão no props se não houver uma específica
        setMetaTag('property', 'og:image', props.image || '/src/assets/images/login.jpg');
        setMetaTag('property', 'og:url', window.location.href);

        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);
    });
}

function setMetaTag(attr, value, content) {
    let element = document.querySelector(`meta[${attr}="${value}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}
