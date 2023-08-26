export default function layout({ html }) {
    return html`
        <div id="wrap">
            <div id="nav">
                <ul>
                    <li><a href="/">wtfjs</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </div>

            <h2 class="about">
                created by
                <a href="http://brian.io/">Brian LeRoux</a> &amp;
                <a href="https://twitter.com/alunny">Andrew Lunny</a>.
                sparodically uncurated by
                <a href="http://dtrejo.com">David Trejo</a>.
                maintained by
                <a href="https://sebastian-haedrich.de/webdev">Sebastian Hädrich</a>.
            </h2>

            <div id="content"><slot></slot></div>
            <div id="foot">wtfjs is <a href="/license">free software</a>. get the <a href="http://github.com/shaedrich/wtfjs">source on github</a>. </div>
        </div>
        <a href="http://github.com/shaedrich/wtfjs"><img style="position: absolute; top: 0; right: 0; border: 0;" src="/_public/forkme_right_gray_6d6d6d.svg" alt="Fork me on GitHub" /></a>
        <script src="/jquery-1.4.2.min.js" type="text/javascript" charset="utf-8"></script>
    </body>
</html>
<!-- 3 > 2 >= 1 -->
`
}