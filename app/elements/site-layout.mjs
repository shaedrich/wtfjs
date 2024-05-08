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
            </h2>

            <div id="content"><slot></slot></div>
            <div id="foot">wtfjs is <a href="/license">free software</a>. get the <a href="http://github.com/shaedrich/wtfjs">source on github</a>. </div>
        </div>
        <a href="http://github.com/shaedrich/wtfjs"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub" /></a>
        <script src="/jquery-1.4.2.min.js" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
            var _gaq = _gaq || [];
             _gaq.push(['_setAccount', 'UA-190386-6']);
             _gaq.push(['_trackPageview']);

             (function() {
               var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
               ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
               var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
             })();
        </script>
    </body>
</html>
<!-- 3 > 2 >= 1 -->
`
}