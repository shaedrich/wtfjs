import fs from "fs/promises";
import { existsSync } from "fs";
import { marked } from "marked";
import Head from "./app/head.mjs";
import layout from "./app/elements/site-layout.mjs";

const mdPath = './app/md'
const mdFiles = await fs.readdir(mdPath)

function renderPage(content) {
    return `${Head().replace(/\/_public\//g, './_public/')}
    <body>
        <div id="wrap">
            <div id="nav">
                <ul>
                    <li><a href="/">wtfjs</a></li>
                    <li><a href="./about.html">about</a></li>
                </ul>
            </div>

            <h2 class="about">
                created by
                <a href="http://brian.io/">Brian LeRoux</a> &amp;
                <a href="https://twitter.com/alunny">Andrew Lunny</a>.
                sparodically uncurated by
                <a href="http://dtrejo.com">David Trejo</a>.
            </h2>

            <div id="content">${content}</div>
            <div id="foot">wtfjs is <a href="/license">free software</a>. get the <a href="http://github.com/shaedrich/wtfjs">source on github</a>. </div>
            <a href="http://github.com/shaedrich/wtfjs"><img style="position: absolute; top: 0; right: 0; border: 0;" src="data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPEVycm9yPjxDb2RlPkFjY2Vzc0RlbmllZDwvQ29kZT48TWVzc2FnZT5BY2Nlc3MgRGVuaWVkPC9NZXNzYWdlPjxSZXF1ZXN0SWQ+UlRXM0NQQjFXNEtFUEZCWDwvUmVxdWVzdElkPjxIb3N0SWQ+UW1nM2ZJRkRxU1hLNkJ4NFJtUzBpdVVwMDJGUzFWdGJtT2tXOVh4K0MraHBGSmFuMDU2MDNzSDhMUWpKc2F4Qjl2OHhXaFIvRE5vPTwvSG9zdElkPjwvRXJyb3I+" alt="Fork me on GitHub" /></a>
        </div>
    </body>
    </html>`
}

function renderSiteLayout(content) {
    return `${Head().replace(/\/_public\//g, './_public/')}
        <body>
            ${content}
            <script type="module">
                import layout from './assets/js/site-layout.mjs'

                window.customElements.define('site-layout', class extends layout.bind(window, { html: function(strings, ...values) {
                    return String.raw({ raw: strings }, ...values)
                  } }) {})
            </script>
        </body>
    </html>`
}

function createIfNotExists(dir) {
    dir.split('/').reduce((path, segment) => {
        const currentPath = [...path, segment]
        if (!existsSync(currentPath.join('/'))) {
            console.log(`Directory ${currentPath.join('/')} does not exist. Create ...`)
            fs.mkdir(currentPath.join('/'))
        } else {
            console.log(`Directory ${currentPath.join('/')} does already exist. Skip.`)
        }

        return currentPath
    }, [])
}

async function renderStaticPage(page) {
    const pageContent = await fs.readFile(`app/pages/${page}.html`)
    fs.writeFile(`static/${page}.html`, renderPage/*renderSiteLayout*/(pageContent))
}

['static/assets/js'].forEach(createIfNotExists)

for(const file of mdFiles.reverse()) {
    const raw = await fs.readFile(`${mdPath}/${file}`, { encoding: 'utf8' })
    const parsed = marked.parse(raw)
    fs.writeFile(`static/${file.replace(/\.md$/, '.html')}`, renderPage(parsed))
}
fs.cp('public', 'static/_public', { recursive: true });
['about', 'license'].forEach(renderStaticPage)
fs.writeFile('static/index.html', renderPage(`<ul>${mdFiles.map(file => `<li><a href="./${file.replace(/\.md$/, '.html')}">${file.replace(/\.md$/, '')}</a></li>`).join('\n')}</ul>`))

//console.log(mdFiles)