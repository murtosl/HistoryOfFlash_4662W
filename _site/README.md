# HistoryOfFlash_4662W
Historicizing Project for Sarah Murto


#Help, I am code reviewing?

Hello! This site is written in Jekyll. While it is still written in CSS and HTML, the files are located in different locations than your expecting, and may look incomplete.

Jekyll is a tool that lets me reuse bits of code and text. So, I have all my layout code in a couple of separate files and the actual content of my paper in another area.

I do have a style.css file and an index.html file right visible right inside the root of this repository. Everything else is a bit more spread out.

_layouts/default.html is the core of my layout, but you’ll notice it looks pretty empty because Jekyll is reading that code and calling other files. That’s what the following line is doing:

       {% include header.html %}

header.html is located in another folder: _includes. These files look more like what you’re expecting to see. It also includes line like this:

        <h4>{{ page.subtitle }}</h4>

which it pulls in from specific pages of my paper.

Pages of my paper are located in the _posts folder. This is the actual content of my paper.  Every post starts with a list of settings like the following:


      --- 
      layout: default 
      title: The Rise and Fall of Flash - Plug-Ins 
      subtitle: Plug-Ins 
      category: Plugin
      --- 


See that “Subtitle: Plug-Ins”? Jekyll looks at that setting and fills in the  {{ page.subtitle }} in the header.

The other confusing this is how links and URLS work. I can customize the URL to be whatever I feel like.  So you’ll see links written like

       <a class="nxt" href="{{ site.baseurl }}{% post_url 2015-10-12-Designers %}">Next: Design Revolution</a>



which obviously is not a URL. Jekyll looks at the code and fills that information in with the special URL I made. So rather than the URL being a filepath to the post, it’s a customized bit of information that Jekyll points to the right place. 

What you really need to know is my layout code is in the _includes folder and my content is in the _posts folder. If you have any questions, feel free to ask me!
