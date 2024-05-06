export default function wtf({ html, state }) {
    const { store } = state

    return html`
        <site-layout>
            ${store.docs.sort((a, b) => b.title.localeCompare(a.title)).map(doc => html`<li><a href="${doc.url}">${doc.title}</a>`).join(html`<br />`)}
        </site-layout>
    `
}
