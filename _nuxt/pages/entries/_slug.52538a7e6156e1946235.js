webpackJsonp([1],{"59fo":function(e,t){e.exports="<section><h1>A Reflection On The Past Three Years</h1>\n<p>Written on August 13th in the year 2018.</p>\n<hr>\n<p>Almost three years ago, my wife and I moved from Wheaton to Pasadena, California. At the time I was just coming out of a three and a half year stretch of doing professional photography, and I was burnt out. It isn’t easy to navigate the feelings of confusion you get when you realize you are sick and tired of doing the thing you thought you were meant to be doing.</p>\n<p>Initially when we moved out, it was for my wife to pursue graduate school in the field of psychology. Truth be told I had no idea what I was going to do next. I had taken a couple web design courses in high school, and I had some friends from college that had gotten into web development, so I thought to myself “why not give this a try.”</p>\n<p>Fast-forward three years, and I feel like I’m only just beginning to realize how far down the rabbit trail goes. I spent the first 6 months of being in California studying web development 80 hours a week. I learned everything from the basics of html and css to building out full stack applications using node, angular, and a plethora of other technologies (many of which are probably no longer relevant #techmovesfastbro). In the spring of 2016, I started a job as a full-stack engineer working for a startup in Santa Monica. We worked predominantly with PHP, which really isn’t as bad as people love to say it is. Anyway, it didn’t take me long to realize that I was in over my head for a number of reasons, one of the main ones being that I was the only engineer onsite. I realized that if I wanted to continue building this skillset, I needed the dynamic that only a team of engineers working together could provide. So I quit.</p>\n<p>A couple months later, I started as a junior software engineer at my current company. It’s crazy to think that I’ve been here for two years already, time has flown by. It’s so easy in the moment to get discouraged when faced with what seems like a impossible task you’re not certain how to finish. Panic sets in, imposter syndrome rents a room in your mind and you begin to wonder if building that very first “hello world” application was the right choice or a very bad mistake. To be honest, I feel like this most days still. That is partially why I’ve written this post, just as a simple reminder to myself and whoever somehow stumbles upon it. I once heard that the only person I should compare myself to is the man I was two years ago. There was a time when if you had asked me to spin up some docker containers, link them together, and run some microservices on them I would have looked at you wide eyed and said “excuse me?”. Or, there was a time when if you had asked me to deploy some changes to the code base of a wordpress repository I probably would have deleted the folder system itself (I actually did do this, but that’s for another time). My point is that I’ve realized that being in the industry of software development is truly a marathon. Things take time, things change a lot, pace is of the utmost importance. Pace and patience. All of the things I mentioned above, I know how to do now, and more.</p>\n<p>So anyway, that’s a little bit about what’s been going on in the past few years of my life. This is my blog, where I’ll occasionally write about things related to web development, or things unrelated. Thanks for reading!</p>\n</section>\n"},"7tqk":function(e,t){e.exports='<section><h1>How to use Mac Keybindings for Visual Studio Code on Ubuntu</h1>\n<p>Written on February 28th in the year 2019.</p>\n<hr>\n<p>For a while now (a couple years), I have been suffering through a long divorce from the Apple ecosystem. It started with my iPhone actually. The last iPhone I had was the 6. It was a great phone, but to this day I still hold that the iPhone 5s was the best mobile device apple has ever made. It is the perfect unity of power, design, and software. I started to become disgruntled with what I felt was the lack of innovation in iOS through several iterations of iPhones to come.</p>\n<p>Finally, back in 2017 I acquired my first android phone, and since then it’s been a successful journey of separating myself from Apple’s ecosystem…and latching onto Google’s (oh god. i mean what was i gonna do, get a windows phone?). Irony aside, one of my crowning achievements was convincing a group of friends to migrate our group chat off of iMessage on onto Whatsapp.</p>\n<p>So anyway, part of my journey away from Apple was deciding that I needed to start using other operating systems as well. I hadn’t used Windows in years (I came back to Windows in 2018 for the sake of gaming), so naturally the alternative was Linux. It seemed like a good idea, I was already relatively familiar with how linux operated because of the work I do.</p>\n<p>The last time I really used Ubuntu was back in 5th grade and I can assure you, it’s come a long since then. This was my distro of choice mainly because the learning curve for it was trivial. Perhaps one day I’ll become an Arch Bro, but it is not this day. I got everything set up and installed properly, but there was one problem: When I finally sat down to do some coding, none of my keybindings for VSCode worked. It was then that I realized the Ubuntu Keybindings resembled those of Windows, and I had a moment where I considered just walking away.</p>\n<p>You see, I had been working in VSCode for Mac for several years now, and my muscle memory was attuned to what those hotkeys were. So, I decided to do what anyone adverse to too much change would do: import my OSX keybindings into VSCode for Linux. I’m happy to say it wasn’t too difficult. I should say this though: I ended up remapping a ton of the Ubuntu Super hotkeys. This was fine for me, because I didn’t much care for the default setup. Anyway, here are the steps I went through in order to get my Mac OSX keybindings for VSCode working on Ubuntu:</p>\n<ol>\n<li>Open up the ubuntu keyboard shortcut settings and remap everything that was ‘meta+<somekey>.’ This was fairly easy to do, I just added shift to all of these.</li>\n<li>If you have VSCode for mac, open up the keybindings.json file. Doing this via the command palette will bring up both the default bindings file, and the custom keybindings file. For me, since I wanted to just replace the default linux keybindings with the default OSX keybindings, I just copied the default keybindings file.</li>\n<li>Create a new json file and paste the settings into it. Either put this on github, send it to yourself, or save it on a floppy disk.</li>\n<li>On your linux machine, open up VSCode, and again open up the keybindings.json file via the command palatte.</li>\n<li>Paste all of your keybindings from your saved file into the keybindings.json file in VSCode.</li>\n<li>In the keybindings.json file, do a search and replace for the ‘cmd’ key and swap it out for the ‘meta’ key. Save the file.</li>\n</ol>\n<p>And that’s pretty much it! You should now be able to use the default OSX keybindings for VSCode on Ubuntu. To save a couple of steps, I’ve uploaded the keybindings.json file for Ubuntu here:<br>\n<a href="https://github.com/micahchiang/vscode-keybindings">https://github.com/micahchiang/vscode-keybindings</a>.</p>\n</section>\n'},A4Gc:function(e,t,s){var n={"./build-a-static-site-with-nuxt.md":"xVAk","./mac-keybindings-on-linux.md":"7tqk","./retrospective-on-2018.md":"WTk5","./three-year-reflection.md":"59fo"};function a(e){return s(o(e))}function o(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="A4Gc"},KtWI:function(e,t,s){var n=s("yB6o");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("rjj0")("b2fd6b0c",n,!1,{sourceMap:!1})},Tadj:function(e,t,s){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("div",{staticClass:"home__link-container"},[t("nuxt-link",{attrs:{to:"/"}},[this._v("Return Home")])],1),t("div",{attrs:{id:"wrapper"},domProps:{innerHTML:this._s(this.post)}}),t("div",{staticClass:"home__link-container"},[t("nuxt-link",{attrs:{to:"/"}},[this._v("Return Home")])],1)])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},WTk5:function(e,t){e.exports='<section><h1>A Retrospective on 2018</h1>\n<p>Written on January 1 in the year 2019.</p>\n<hr>\n<p>In scrum one of the common things to do is run through a retrospective of a just-completed sprint. That is where I came up with the title for this entry. Creative, I know.</p>\n<p>In many ways I felt like 2018 never really got started. I think one of the biggest challenges I had was really focusing in deeply on any one thing. And, before I knew it, the year was over. That being said, it wasn’t a total loss, as Jenna and I created some great memories. In March, we surprised her mom by showing up in Boston to celebrate her retirement. In June we went on a road trip and visited Zion and Yosemite, both of them breath-taking. In November, I had the opportunity to visit a dear friend, and finally in December we were able to spend Christmas with my famiy. Summary aside, lets talk about some things that worked, and some things that didn’t work for 2018.</p>\n<h3>Things That Didn’t Work</h3>\n<ol>\n<li>\n<p>Doing more than 1 set of ‘100 Days of Code.’ I finished one round of this early in the year, from January to mid April, and by the time it was over I was pretty burnt. I tried to do another round later in the year, but just couldn’t do it. Spending a minimum of a hour a day writing code that is not work related for 100 days is much more exhausting than I first anticipated.</p>\n</li>\n<li>\n<p>Spending 15 minutes per day studying mandarin. I started this and lasted about 6 months but eventually broke down. I think I eventually hit a wall and just wasn’t able to consistently keep up after that. I think a course more focused with clear goals is something that would have helped.</p>\n</li>\n<li>\n<p>Reading one book per month. Yeah…I think the biggest thing I learned about myself with this is that I really need physical books to read effectively. For me, it’s just too easy to get distracted when trying to read E-books.</p>\n</li>\n<li>\n<p>Launching three personal projects. Initially I thought this was doable if these projects were each given four months of time. Four months is still pretty reasonable in my mind, but after the first one I felt pretty burned out. I still managed to get two off the ground though. This blog, and another project called <a href="http://dailyhoops.io/#/">dailyhoops.io</a>.</p>\n</li>\n</ol>\n<h3>Things That Did Work</h3>\n<ol>\n<li>\n<p>A better mastery of Javascript. In the first 100 days of code I did, I built several projects using only vanilla javascript and es6. These included a todo app (classic right?), and a blog platform. Doing routing in vanilla javascript as well as things like data binding gave me a better appreciation for how much heavy lifting frameworks do, and a greater understanding of what is going on behind the scenes.</p>\n</li>\n<li>\n<p>Adding $5K to the emergency fund. This was a pretty easy thing to do because I chose to spread it out over the course of the entire year instead of taking one big hit. Weekly, recurring transfers from a checking into a savings account made this painless.</p>\n</li>\n<li>\n<p>Learning some new technologies. I spent a decent amount of time learning Go. I like it. It’s much different than Javascript and is relatively intuitive. I also spent a good amount of time sifting through a lot of the products that AWS has to offer. 2018 was also a year in which I spent a lot of time bulding things with Vue. This blog is actually built with a framework that’s built on top of Vue called Nuxt. Vue is super easy to pick up, very flexible, and feels more like what the successor to OG angular should or could have been.</p>\n</li>\n</ol>\n<h3>Thoughts On 2019</h3>\n<p>I know it’s partially because of the time of year, but this is the most excited I’ve been for the start of a new year in a long, long while. In creating my goals for this year, a big theme was joy. I asked myself the question “what are some things that have brought you the most joy in the past?” I let that thought guide my creation process and came up with a list of goals including:</p>\n<ol>\n<li>\n<p>Net $6000 in flipping alone. I did a lot of this several years ago and it was something that enjoyed so much I have no idea why I stopped doing it. The goal here is to try and isolate all transactions and expenses to Paypal and Venmo. Using any profit to build a bigger bank role.</p>\n</li>\n<li>\n<p>Create an online shop for photo prints. If you know me, then you may know my history with photography. I used to do it professionally. After I stepped away from it, for the longest time I couldn’t even take a picture without feelings of anger or frustration. 2018 was the first year in which some of those old hurts began to mend.</p>\n</li>\n</ol>\n<p>I decided a few years ago to stop making resolutions and instead focus on goals. The key difference, and the reason resolutions don’t often pan out, is the work involved. Goals inherently give you something to work toward, entailing some sort of growth process. Resolutions suggest an immediate change, without often taking into account unforeseen challenges or side effects. I’m not sure what 2019 will hold but I’m ready to jump in and do work.</p>\n</section>\n'},ZEEi:function(e,t,s){"use strict";var n=s("Xxa5"),a=s.n(n),o=s("exGp"),i=s.n(o);s("NYxO");t.a={data:function(){return{}},fetch:function(){var e=i()(a.a.mark(function e(t){var s=t.store,n=t.route;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.dispatch("LOAD_ENTRY",n.params.slug);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),computed:{post:function(){var e=this.$store.state.entry;return s("A4Gc")("./"+e+".md")}}}},f6mm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("ZEEi"),a=s("Tadj"),o=!1;var i=function(e){o||s("KtWI")},r=s("VU/8")(n.a,a.a,!1,i,null,null);r.options.__file="pages/entries/_slug.vue",t.default=r.exports},xVAk:function(e,t){e.exports='<section><h1>How To Build A Statically Generated Blog With Nuxt And Deploy It To Github Pages</h1>\n<p>Written on September 24th in the year 2018.</p>\n<hr>\n<p>If you google static site generator and vue, one of the results that will come up is Nuxt. Nuxt is a framework built on top of Vue that offers a number of features one of which is an option to generate a static site from the application you’ve built.</p>\n<p>There are several benefits of opting for a statically generated site including:</p>\n<ol>\n<li>Security - All generated files are just flat HTML files with css and javascript. When a user requests a page, all they are sent is that flat file. Because there is no build process for the requested asset, common security risks such as cross site scripting become non-factors.</li>\n<li>Speed - Since there is no processing involved, the server hosting all the static files can just send back a response immediately containing the static file requested.</li>\n</ol>\n<p>In this article we’ll go through how to build a personal blog using some of the features Nuxt has to offer. Once we’ve finished building our blog site, we’ll walk through how to deploy it to Github Pages. Please note: this article assumes a working knowledge of Vue itself as well as Vuex. If you’re unfamiliar with Vue, the <a href="https://vuejs.org/v2/guide/">official docs</a> are a great place to start. By the end of our time together, my hope is that you’ll have learned a little bit more about Nuxt, and the process of deploying to Github pages.</p>\n<h3>Installing Nuxt</h3>\n<p>All you need to do to get started with Nuxt is initialize a new Vue project with the Nuxt starter template:</p>\n<pre><code class="language-javascript">vue init nuxt-community/starter-template &lt;project-name&gt;\n</code></pre>\n<p>Once this is done, cd into your project directory and install the dependencies using either npm or yarn, both are fine:</p>\n<pre><code class="language-javascript">npm install / yarn install\n</code></pre>\n<p>Finally, fire up the project using terminal:</p>\n<pre><code class="language-javascript">npm run dev / yarn dev\n</code></pre>\n<h3>A Word on Directory Structure</h3>\n<p>This article will reference several different directories, so it’s worth briefly summarizing what they are and what they will be use for.</p>\n<ul>\n<li><strong>assets</strong> - Similar to a regular project in that you might put things like images, css, or javascript in here.</li>\n<li><strong>components</strong> - Contains your Vue components. Unlike what you may find in a regular Vue project, components stored here don’t have routes that go to them. These components are used to build your pages.</li>\n<li><strong>pages</strong> - This directory houses the views and routes for your Nuxt application. Unlike a regular Vue project, you don’t have to worry about configuring your router directly, as Nuxt takes care of this for you. The vue components in this directory are built with the components you create in the ‘components’ directory.</li>\n<li><strong>static</strong> - Contains static files. For this project, we will use this to keep track of our blog entries.</li>\n<li><strong>store</strong> - Vuex Store files go here. Creating an <code>index.js</code> file here will automatically activate the Vuex option in Nuxt.</li>\n<li><strong>plugins</strong> - Any sort of plugins you’d want to run before instantiating the root application would be put here.</li>\n</ul>\n<p>The above is just a brief rundown of some of the directories we will be addressing later on. You’ll notice that some directories aren’t mentioned, and that’s because they aren’t used much in this particular project. For more information, feel free to check out the official Nuxt documentation <a href="https://nuxtjs.org/guide">here</a>.</p>\n<h3>Displaying Blog Entries on a Page</h3>\n<p>In Nuxt, each page that is shown to a user is created in the ‘pages’ directory. These pages are comprised of smaller, potentially reusuable components which are built in the ‘components’ directory. For our project, we will create a page called index.vue, and populate it with a component called EntriesComponent.vue:</p>\n<pre><code class="language-javascript">&lt;template&gt;\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">entries-component</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">entries-component</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>\n\n&lt;script&gt;\n<span class="hljs-keyword">import</span> EntriesComponent <span class="hljs-keyword">from</span> <span class="hljs-string">\'~/components/EntriesComponent\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">components</span>: {\n        EntriesComponent,\n    },\n    <span class="hljs-keyword">async</span> fetch( {store} ) {\n        <span class="hljs-keyword">await</span> store.dispatch(<span class="hljs-string">\'LOAD_ENTRIES\'</span>);\n    }\n}\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre>\n<p>If you’ve used Vue before then all of this looks pretty standard except potentially one thing and that is the <code>fetch</code> method. Nuxt gives it to us for free and it’s a way to set store data before components in the <strong>pages</strong> directory are loaded. Perhaps an easier, more familiar way to think about it is as a life-cycle hook for Nuxt, similar to how Vue itself has it’s own life-cycle hooks. Within the <code>fetch</code> method, we’re dispatching a Vuex store action, similar to how you might do so in a regular Vue application. We won’t go into much more depth about <code>fetch</code> here, but if you can read more about it <a href="https://nuxtjs.org/api/pages-fetch">in the Nuxt docs</a>.</p>\n<p>What we will talk more about is what goes on in <code>EntriesComponent</code>.</p>\n<p>As mentioned earlier, pages are comprised of components built in the components directory. In the previous step, we built our index.vue page and imported EntriesComponent.vue into it for use. Really the one thing EntriesComponent.vue does is display our data by looping through it using the common <code>v-for</code> technique provided by Vue:</p>\n<pre><code class="language-javascript">&lt;template&gt;\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>\n            <span class="hljs-attr">class</span>=<span class="hljs-string">"entry__list-item"</span>\n            <span class="hljs-attr">v-for</span>=<span class="hljs-string">"entry in entries"</span>\n            <span class="hljs-attr">:key</span>=<span class="hljs-string">"entry.id"</span>\n        &gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link</span>\n                <span class="hljs-attr">class</span>=<span class="hljs-string">"entry__link"</span>\n                <span class="hljs-attr">:to</span>=<span class="hljs-string">"\'/entries/\'+entry.slug"</span>\n            &gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"entry__link-header"</span>&gt;</span>\n                    <span>{{</span> entry.title <span>}}</span>\n                <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">nuxt-link</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span>entry.createdAt<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>\n\n&lt;script&gt;\n    <span class="hljs-keyword">import</span> {mapState} <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuex\'</span>;\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">\'EntriesComponent\'</span>,\n        <span class="hljs-attr">computed</span>: mapState([\n            <span class="hljs-string">"entries"</span>\n        ])\n    }\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre>\n<p>Two things to mention:</p>\n<ol>\n<li><code>&lt;nuxt-link&gt;&lt;/nuxt-link&gt;</code> : this component is provided by Nuxt as a means to navigate between different pages built in the Pages directory. You’ll notice in the <code>:to</code> attribute a path has been added that corresponds to the page we’re trying to navigate to.</li>\n<li>We have implemented <code>mapState</code> which is given to us by Vuex, and mapped it to this vue instance’s <code>computed</code> property.</li>\n</ol>\n<p>Up until this point, we’ve been talking about the steps required to display a list of blog entries on a page. All of the things mentioned are pieces you’d typically find in a normal Vue project: component construction, Vuex store interaction, etc. With the introduction of EntriesComponent.vue, now is an appropriate time to move from the process of displaying things on a page, and talk a little more specifically about what goes on in our Vuex store, and how Nuxt handles dynamic pages and routes.</p>\n<h3>Presenting Individual Entries</h3>\n<p>Earlier we highlighted <code>&lt;nuxt-link&gt;&lt;/nuxt-link&gt;</code> which allowed us to created routes to each of our entries displayed. You’ll notice the path populating the <code>:to</code> attribue is <code>:to=&quot;\'/entries/\'+entry.slug&quot;</code>. This tips us off to the fact that behind the scenes, Nuxt is creating a dynamic route for each entry we have. Let’s create the page that will present each individual entry to the user. In the <strong>pages</strong> directory, we’ll create a new directory called entries, enter into it, and create a file called <code>_slug.vue</code>. If you’ve used dynamic routes in Vue Router before, the structure of creating a folder in the pages directory and then adding a file prefixed by an underscore in said directory will yield a familiar result when Nuxt finishes generating the router:</p>\n<pre><code class="language-javascript">router: {\n  <span class="hljs-attr">routes</span>: [\n    {\n      <span class="hljs-attr">name</span>: <span class="hljs-string">\'entries-slug\'</span>,\n      <span class="hljs-attr">path</span>: <span class="hljs-string">\'/entries/:slug?\'</span>,\n      <span class="hljs-attr">component</span>: <span class="hljs-string">\'pages/entries/_slug.vue\'</span>\n    }\n  ];\n}\n</code></pre>\n<p>So we’ve created the page that’s going to display an individual entry when a user clicks on a link from the entries list. Next we’ll take a look at what goes on in there, and that will give us the final piece we need to jump into our Vuex store. In the <code>_slug.vue</code> file, we’ll add this code:</p>\n<pre><code class="language-javascript">&lt;template&gt;\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"home__link-container"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span>&gt;</span>Return Home<span class="hljs-tag">&lt;/<span class="hljs-name">nuxt-link</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"wrapper"</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">"post"</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"home__link-container"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span>&gt;</span>Return Home<span class="hljs-tag">&lt;/<span class="hljs-name">nuxt-link</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {mapGetters} <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuex\'</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n        <span class="hljs-keyword">return</span> {}\n    },\n    <span class="hljs-keyword">async</span> fetch({store, route}) {\n        <span class="hljs-keyword">await</span> store.dispatch(<span class="hljs-string">\'LOAD_ENTRY\'</span>, route.params.slug);\n    },\n    <span class="hljs-attr">computed</span>: {\n        post() {\n            <span class="hljs-keyword">let</span> entry = <span class="hljs-keyword">this</span>.$store.state.entry;\n            <span class="hljs-keyword">return</span> <span class="hljs-built_in">require</span>(<span class="hljs-string">`~/static/entries/<span class="hljs-subst">${entry}</span>.md`</span>);\n        }\n    }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre>\n<p>Initially it may look like there are some unfamiliar features in this file, but upon closer inspection, we realize that all of what is in here we have most likely seen before. We used the <code>fetch</code> method Nuxt provides earlier in our EntriesComponent. We’ve already implemented <nuxt-link> for routing and we’ve talked about dispatching store actions. So really, the only thing that needs mentioning here is the computed property we’ve created, <code>post()</code>. Assuming you have used Vue computed properties before, all we are doing in here is retrieving the name of the entry we want from the store which is set asynchronously in the fetch method. Once we’ve retrieved that, we just return a require statement containing the path to our static entry. Finally, we use the Vue attribute, <code>v-html</code> to bind the content of the wrapper div to the value of the entry we’ve loaded in <code>post()</code>.</p>\n<h3>Maintaining State in Vuex</h3>\n<p>Now that we have talked about all the pieces that go into displaying an individual entry selected from a list, let’s talk about how we manage the state of our application.</p>\n<p>In Vue, the suggested way of maintaining state is to use Vuex. We won’t go into much depth regarding what exactly Vuex is. Deep down it really is just a glorified object that comes bundled with a set of tools that allows you the developer a simple, predictable, way of maintaining and managing the state of your application. If you’d like to read more about it, feel free to <a href="https://vuex.vuejs.org">check out the docs</a>.</p>\n<p>Earlier when we created the file structure for our project, one of the directories we generated was called ‘store’. Nuxt provides us with this directory should our project require the use of a state management tool (Vuex), all we have to do is add an <code>index.js</code> to it. So, let’s add that to our store directory and populate it with this:</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vuex <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuex\'</span>;\n<span class="hljs-keyword">import</span> entriesData <span class="hljs-keyword">from</span> <span class="hljs-string">\'~/static/entriesinfo.json\'</span>;\n\n<span class="hljs-keyword">const</span> store = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Vuex.Store({\n    <span class="hljs-attr">state</span>: {\n      <span class="hljs-attr">entries</span>: [],\n      <span class="hljs-attr">entry</span>: <span class="hljs-string">\'\'</span>\n    },\n    <span class="hljs-attr">mutations</span>: {\n      setEntries(state, data) {\n        state.entries = data;\n      },\n      setEntry(state, name) {\n        state.entry = name;\n      }\n    },\n    <span class="hljs-attr">actions</span>: {\n      LOAD_ENTRIES({ commit }) {\n        <span class="hljs-keyword">const</span> entries = entriesData.entries;\n        commit(<span class="hljs-string">\'setEntries\'</span>, entries);\n      },\n      LOAD_ENTRY({ commit }, entryName) {\n        commit(<span class="hljs-string">\'setEntry\'</span>, entryName);\n      }\n    }\n  });\n};\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> store;\n</code></pre>\n<p>We’ve seen a couple of these things in action already in components mentioned earlier, but let’s walk through each bit and talk about what they do.</p>\n<ol>\n<li>LOAD_ENTRIES: This is an action we’ve created to help us load the list of our entries. It really is just a function which loads entries from our json data file. Once it has those, it commits a mutation called <code>setEntries</code> which in turn sets our store entries array to the data we’ve retrieved.</li>\n<li>LOAD_ENTRY: This action takes an entry name that we retrieve from the route params given to use by Vue. It then commits a mutation called <code>setEntry</code> that just sets our store ‘entry’ key to the value of our entry name.</li>\n</ol>\n<p>With that, we are done with the majority of our project. In fact, there are only a couple more things that need to be mentioned before we deploy to github pages. Let’s go over those things now.</p>\n<h3>Managing the Metadata of Our Entries</h3>\n<p>When talking about state management, I mentioned a json data file. To keep things simple, all we will do is create a json file in our static directory, and populate it with the metadata of each entry we create. There are definitely other ways to do this, but this works for now. Our json file, named “entriesinfo.json” will maintain this structure:</p>\n<pre><code class="language-javascript">{\n  <span class="hljs-string">"entries"</span>: [\n    {\n      <span class="hljs-string">"id"</span>: <span class="hljs-string">"yourID"</span>,\n      <span class="hljs-string">"title"</span>: <span class="hljs-string">"yourTitle"</span>,\n      <span class="hljs-string">"createdAt"</span>: <span class="hljs-string">"theDate"</span>,\n      <span class="hljs-string">"slug"</span>: <span class="hljs-string">"yourSlug"</span>\n    },\n  ]\n}\n</code></pre>\n<p>This is just regular json, and shouldn’t need much clarification. Certainly, you can choose your own property names, just be sure to update them wherever they are used in your application.</p>\n<h3>Rendering Markdown as HTML</h3>\n<p>For this piece, we’ve used a module recommended by Nuxt, <a href="https://github.com/nuxt-community/markdownit-loader">markdownit-loader</a>. Using this module allows us to bind to v-html, similar to what we did in our <code>_slug.vue</code> page. Modules are loaded and configured in the nuxt.config.js file. For this project, we’ve stuck with defaults for most options:</p>\n<pre><code class="language-javascript"><span class="hljs-comment">/// nuxt.config.js</span>\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-comment">/// other configs,</span>\n  modules: [<span class="hljs-string">\'@nuxtjs/markdownit\'</span>],\n  <span class="hljs-attr">markdownit</span>: {\n    <span class="hljs-attr">preset</span>: <span class="hljs-string">\'default\'</span>,\n    <span class="hljs-attr">linkify</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">breaks</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">typographer</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">injected</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">use</span>: [<span class="hljs-string">\'markdown-it-container\'</span>, <span class="hljs-string">\'markdown-it-attrs\'</span>]\n  }\n};\n</code></pre>\n<h3>Configuring Routes for Static Rendering</h3>\n<p>By default, Nuxt does not recognize dynamic routes when running <code>nuxt generate</code>. In order to ensure dynamic routes are generated properly, a ‘routes’ function must be passed to the generate attribute located in the nuxt.config.js file:</p>\n<pre><code class="language-javascript"><span class="hljs-comment">/// nuxt.config.js</span>\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-comment">/// other configs,</span>\n  generate: {\n    <span class="hljs-attr">routes</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> entriesData.entries.map(<span class="hljs-function"><span class="hljs-params">entry</span> =&gt;</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'/entries/\'</span> + entry.slug;\n      });\n    }\n  }\n};\n</code></pre>\n<p>Typically when deploying to github pages you will need to set <code>/&lt;repo-name&gt;</code> as the router base. However, since we are going to be using our own domain name, leaving router base as it’s default <code>/</code> is fine.</p>\n<h3>Configuring Github Pages with a Custom Domain</h3>\n<p>We have one last step to take care of before we finally push our code up to github pages. Typically a github pages site will have a URL that looks something like https://<username>.github.io. That’s fine, but in order to truly make your site your own, you really should have a custom domain point to whichever repo your project lives in. So, instead of https://<username>.github.io, you’ll have <a href="http://customDomain.com">customDomain.com</a>. Lets go through the steps needed to do this now:</p>\n<ol>\n<li>Purchase a custom domain and register it with a DNS provider (godaddy, google domains, etc.).</li>\n<li>Add the custom domain to the github repository you want to use in that repository’s settings. Settings &gt; GitHub Pages &gt; Custom domain.</li>\n<li>In your DNS provider’s control panel, you should have the option to configure an <code>A</code> record for your domain. Github provides four IP addresses when setting up a custom domain to point to github pages repository: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Set up an <code>A</code> recrod for each of these. NOTE: these IP addresses may potentially change, so check <a href="https://help.github.com/articles/setting-up-an-apex-domain/">this page</a> for the current ones, as well as a more detailed guide about setting up <code>A</code> records with github pages.</li>\n</ol>\n<p>Alright, let’s talk about deploying.</p>\n<h3>Deploying Your Static Site to Github Pages</h3>\n<p>Finally, we’re ready to deploy our static site to Github Pages. To makes things a little easier, we’ll use a node module that allows us to deploy directly from the command line. Go ahead and install the push-dir package:</p>\n<pre><code class="language-javascript">npm install push-dir --save-dev\n</code></pre>\n<p>Since we are deploying from the command line, we need to add a script that will allow us to do so in our package.json: <code>&quot;deploy&quot;:&quot;push-dir --dir=dist --branch-gh-pages --cleanup&quot;</code>.</p>\n<p>Now that we have our deploy script ready, all we need to do is first generate our static site by running <code>npm run generate</code>. Once this is done, we can run our deploy script and push our generated static site up to github pages. For a more in-depth walkthrough of the deploy process, feel free to check out the <a href="https://nuxtjs.org/faq/github-pages">Nuxt faq on deployment</a>.</p>\n<h3>Closing Thoughts</h3>\n<p>And we’re done! With the last step of pushing to GitHub Pages complete, we’ve officially finished creating our static website. Though this was a relatively simple example of using nuxt to create a static site, I hope you’ll find that it covered some topics and processes that can be extended to more advanced use cases. Thanks for reading!</p>\n</section>\n'},yB6o:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"#wrapper{margin:0 auto;width:100%;max-width:850px;padding:32px;padding:2rem}hr{border-top:2px solid #506987}pre{background-color:#b7c3d0;color:#fff;padding:16px;padding:1rem;overflow:scroll}p,pre{margin:16px 0;margin:1rem 0}.home__link-container{text-align:right;width:100%;max-width:850px;margin:0 auto;padding:16px 32px;padding:1rem 2rem}",""])}});