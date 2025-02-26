document.addEventListener('DOMContentLoaded', function() {

	var elContentArea = document.getElementById('contentArea');

	if ( document.location.pathname == '/' ) {

		var elWelcome = document.createElement('div');
		elWelcome.id = 'welcome';
		elWelcome.innerHTML = '<div><h3>Welcome to our support center!</h3><p>This is the place where you should find all the answers you need, in order to get started with our Shopify theme.</p><p>Start your journey by reading through the articles that we wrote for you, search for common questions, and if you still can\'t find the answer, then <a href="https://contact.krownthemes.com/" style="cursor:pointer;" >please contact us!</a> We usually respond within a business day.</p><p>Thanks a lot for being our customer, we hope that you\'ll enjoy our products and services</p><p><span>Sincerely, <br>KrownThemes Team.</span></p><!--<p style="color: blue;">PS: Our office is closed during the holidays. All queries sent between the 21st of December and the 3rd of January will be answered on the 4th of January. Thank you for your understanding!</p>--></div>';

		elContentArea.insertBefore(elWelcome, elContentArea.firstChild);

	}

	var elMessage = document.createElement('div');
	elMessage.id = 'help-message';
	elMessage.innerHTML = '<div><img src="https://rubenbristian.github.io/helpscout-assets/svg/help.svg" alt="Get help!" /><h3>Didn\'t find what you were looking for?</h3><p>Our support staff is here to answer your queries, so don\'t hesitate to write to us!</p></div><a href="https://contact.krownthemes.com/" style="cursor:pointer;" class="ct-button">CONTACT US</a>';

	elContentArea.insertBefore(elMessage, document.getElementsByTagName('footer')[0]);

	var elLink = document.createElement('li');
	elLink.innerHTML = '<a href="https://contact.krownthemes.com/" class="ct-button" style="cursor:pointer;" >CONTACT US</a>';

	var elNav = document.getElementsByClassName('nav')[0];
	elNav.insertBefore(elLink, elNav.firstChild);


	// TOC start
  if (!window.location.href.includes("article")) return; // only do toc on article pages

  const headings = document.querySelectorAll("h2");
  if (headings.length < 2) return; // no need for toc if no multiple sections

  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return; // no sidebar, no toc

  const toc = document.createElement("nav");
  toc.id = "toc";
  
  const tocTitle = document.createElement("h3");
  tocTitle.textContent = "On this page";
  toc.appendChild(tocTitle);
  
  const tocList = document.createElement("ul");
  tocList.classList.add("nav", "nav-list");

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = "section-" + index;
    }

    const tocItem = document.createElement("li");
    const tocLink = document.createElement("a");
    tocLink.href = "#" + heading.id;
    tocLink.textContent = heading.textContent;
    
    tocLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(tocLink.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    tocItem.appendChild(tocLink);
    tocList.appendChild(tocItem);
  });

  toc.appendChild(tocList);
  sidebar.appendChild(toc);

  const goToToc = document.createElement("a");
  goToToc.href = "#toc";
  goToToc.textContent = "Scroll to TOC";
  goToToc.classList.add("go-to-toc");
  goToToc.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("toc").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  document.body.prepend(goToToc);

  document.documentElement.style.scrollBehavior = "smooth";
	// TOC end

  // Krown gallery start - search for more than 2 p siblings containing images with size set to a value smaller than 340px and wrapps them in a block element (the rest is css)
  const fullArticle = document.getElementById("fullArticle");
  if (!fullArticle) return;

  const paragraphs = fullArticle.querySelectorAll("p");
  let galleryWrapper = null;

  paragraphs.forEach((paragraph) => {
    const img = paragraph.querySelector("img");
    if (img && img.width < 300) {
      if (!galleryWrapper) {
        galleryWrapper = document.createElement("div");
        galleryWrapper.id = "krown-gallery";
        paragraph.before(galleryWrapper);
      }
      galleryWrapper.appendChild(paragraph);
    } else {
      galleryWrapper = null;
    }
  });
  // Krown gallery end

});