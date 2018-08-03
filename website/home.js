const defaultBuyButton = `
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="JWETZFLXVWQPY">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" onclick="client.addEvent('track', { type: 'clickthrough' });">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;

module.exports = ({ price = '$24.99', buyButton = defaultBuyButton }) => `
<div class="left">
  <img id="cover" src="/images/cover_400.png" />
</div>
<div class="right">
  <h1 class="title">Mastering Async/Await</h1>

  <h3 class="tagline">
    Become your team's expert on escaping callback hell.
  </h3>

  <p>
    Async/await is the most important new feature in the
    <a href="https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf">
      2017 JavaScript language specification</a>.
    Async/await lets you write asynchronous, non-blocking code without callbacks.
    Imagine writing your entire <a href="http://expressjs.com/">Express</a> API
    or <a href="https://reactjs.org/">React</a> app without nested callbacks
    or convoluted promise chains. With async/await, that dream is now a reality.
  </p>

  <p>
    <i>Mastering Async/Await</i> provides a concise and comprehensive guide to
    async/await fundamentals from micro to macro. You'll learn how to implement a
    <a href="https://promisesaplus.com/">Promises/A+ compliant</a> promise
    library from scratch (micro) and see how await operates on the custom
    promise library (macro). You'll also learn about using async/await with
    the frameworks you use every day, like <a href="http://expressjs.com/">Express</a>
    and <a href="https://reactjs.org/">React</a>. This book is designed to
    avoid wasteful fluff and is only 52 pages, so you can master async/await
    in hours, not days.
  </p>

  <h3>About the Author</h3>

  <p id="author">
    <img src="https://pbs.twimg.com/profile_images/891062607053860864/rDX7vHYT_400x400.jpg" style="float: right; width: 145px; margin-left: 10px">

    Valeri Karpov is the lead maintainer of <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>.
    He's a core contributor to
    <a href="https://www.npmjs.com/package/mocha">Mocha</a>, <a href="https://www.npmjs.com/package/agenda">Agenda</a>,
    and other npm modules with over 10M combined monthly downloads.
    He was an early engineer at MongoDB (IPO in October 2017) and LevelUp (acquired for $390M in 2018).
    He's the author of <a href="http://es2015generators.com/"><i>The 80/20 Guide to ES2015 Generators</i></a>
    and <a href="https://www.amazon.com/Professional-AngularJS-Valeri-Karpov/dp/1118832078/ref=sr_1_1?ie=UTF8&qid=1528769632&sr=8-1&keywords=professional+angularjs"><i>Professional AngularJS</i></a>.
    <a href="http://thecodebarbarian.com/">His blog</a>
    is the top result on Google for "async await design patterns".

    <div class="clear"></div>
  </p>

  <h3>Buy</h3>

  <div class="price">
    ${price}
  </div>

  <div class="buy-button">
    ${buyButton}
  </div>

  <div class="money-back">
    <p>
      <i>
        Have an issue?
        <a href="https://github.com/vkarpov15/mastering-async-await-issues/issues">Report it on GitHub</a>
        and we'll respond within 24 hours
      </i>.
    </p>

    <p>
      <i>
        Not happy with your purchase? Report an issue on the
        <a href="https://www.paypal.com/disputes/">PayPal Resolution Center</a>
        or email <a href="mailto:val@karpov.io">val@karpov.io</a> with your
        PayPal transaction id for a full refund within 72 hours.
      </i>
    </p>
  </div>

  <h3>Preview</h3>

  <ul>
    <li><a href="/bin/toc.pdf">Table of Contents</a></li>
    <li><a href="/bin/page-30-31.pdf">Pages 30-31</a></li>
  </ul>

  <h3>What Developers are Saying</h3>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">So I started reading &quot;Mastering Async/Await&quot; by <a href="https://twitter.com/code_barbarian?ref_src=twsrc%5Etfw">@code_barbarian</a> - and just like his &quot;Generators guide&quot; it is an awesome practical tutorial for all the ways you should be using &quot;async/await&quot; in JS. No fluff, straight examples, great text. <a href="https://t.co/nnAEFhtTjj">https://t.co/nnAEFhtTjj</a></p>&mdash; Gleb Bahmutov (@bahmutov) <a href="https://twitter.com/bahmutov/status/1013882918941446146?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just bought the &quot;Mastering async/await&quot; book from <a href="https://twitter.com/code_barbarian?ref_src=twsrc%5Etfw">@code_barbarian</a>.<br>Thank you Valeri for putting this together!<br><br>Find it here: <a href="https://t.co/WnsH4tqDld">https://t.co/WnsH4tqDld</a> <a href="https://t.co/KYh5QZROap">pic.twitter.com/KYh5QZROap</a></p>&mdash; Marcus Poehls ⚡️ (@marcuspoehls) <a href="https://twitter.com/marcuspoehls/status/1014520503485259779?ref_src=twsrc%5Etfw">July 4, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m super impressed with <a href="https://twitter.com/code_barbarian?ref_src=twsrc%5Etfw">@code_barbarian</a> &#39;s latest ebook: Mastering Async/Await. Check it out: <a href="https://t.co/8tsaVfSjsN">https://t.co/8tsaVfSjsN</a></p>&mdash; Brad Vogel (@BradVogel) <a href="https://twitter.com/BradVogel/status/1016473731332390913?ref_src=twsrc%5Etfw">July 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">From the maintainer of my favorite <a href="https://twitter.com/MongoDB?ref_src=twsrc%5Etfw">@MongoDB</a> library <a href="https://twitter.com/mongoosejs?ref_src=twsrc%5Etfw">@mongoosejs</a>, comes a new book giving a deep dive on learning and understanding Async/Await, one of the best new features of es6.<br><br>ch-ch-ch-check it outtt <a href="https://t.co/givAinTbPV">https://t.co/givAinTbPV</a></p>&mdash; Harry Wolff (@hswolff) <a href="https://twitter.com/hswolff/status/1007340590210699265?ref_src=twsrc%5Etfw">June 14, 2018</a></blockquote>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<div style="clear: both"></div>
`;
