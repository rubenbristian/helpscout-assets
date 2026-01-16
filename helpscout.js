document.addEventListener('DOMContentLoaded', function() {

	var elContentArea = document.getElementById('contentArea');
  
  // Add preset names

  const presetNames = {
    'Local': 'Local, Soleway, Caffeine, Lively',
    'Borders': 'Borders, Objekts, Readers, Folio, Mosaic',
    'Combine': 'Combine, Gadget, Blush, Ring, Bites',
    'Highlight': 'Highlight, Single, Brush',
    'Split': 'Split, Drawer, Nomad',
    'Kingdom': 'Kingdom, Queen, Prince'
  };

  const homepageCollectionTitles = document.querySelectorAll('#collection-632, #collection-759, #collection-657, #collection-370, #collection-550, #collection-463');
  homepageCollectionTitles.forEach(title => {

    title.querySelector('a').innerHTML = `${title.querySelector('a').innerHTML} theme collection`;

    let selectedPreset = '';
    if ( title.id === 'collection-632' ) {
      selectedPreset = 'Local';
    } else if ( title.id === 'collection-759' ) {
      selectedPreset = 'Borders';
    } else if ( title.id === 'collection-657' ) {
      selectedPreset = 'Combine';
    } else if ( title.id === 'collection-370' ) {
      selectedPreset = 'Split';
    } else if ( title.id === 'collection-550' ) {
      selectedPreset = 'Highlight';
    } else if ( title.id === 'collection-463' ) {
      selectedPreset = 'Kingdom';
    }

    const presetNamesSpan = document.createElement('span');
    presetNamesSpan.classList.add('preset-names');
    presetNamesSpan.innerHTML = `Including presets: ${presetNames[selectedPreset]}`;

    title.appendChild(presetNamesSpan);

  });

  // Set inner page titles

  const selectedPage = document.querySelector('#mainNav li.active');

  const collectionPageDom = document.createElement('div');
  collectionPageDom.classList.add('page-banner-title');

  if ( selectedPage.id === 'shopify-basics' ) {
    collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Shopify basics</span><span class="page-banner-title__caption">Various tips and tricks to get you started with Shopify</span>`;
    document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
  } else {

    if ( selectedPage.id === 'local' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Local theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Local']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Local']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'borders' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Borders theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Borders']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Borders']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'combine' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Combine theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Combine']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Combine']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'highlight' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Highlight theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Highlight']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Highlight']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'split' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Split theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Split']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Split']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'kingdom' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Kingdom theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Kingdom']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Kingdom']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    }

  }

  // collection page banners

  const collectionHeroImage = document.createElement('img');
  collectionHeroImage.className = 'collection-hero-image';
  collectionHeroImage.width = '1600';
  collectionHeroImage.height = '1100';
  collectionHeroImage.sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 840px';
  if ( document.location.pathname.includes('collection/657-combine') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/combine_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/combine_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/combine_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  } else if ( document.location.pathname.includes('collection/632-local') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/local_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/local_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/local_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  } else if ( document.location.pathname.includes('collection/759-borders') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/borders_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/borders_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/borders_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  } else if ( document.location.pathname.includes('collection/370-split') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/split_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/split_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/split_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  } else if ( document.location.pathname.includes('collection/550-highlight') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/highlight_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/highlight_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/highlight_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  } else if ( document.location.pathname.includes('collection/463-kingdom') ) {
    collectionHeroImage.srcset = 'https://rubenbristian.github.io/helpscout-assets/img/kingdom_hero_1160.jpg 1160w, https://rubenbristian.github.io/helpscout-assets/img/kingdom_hero_1620.jpg 1620w';
    collectionHeroImage.src = 'https://rubenbristian.github.io/helpscout-assets/img/kingdom_hero_1620.jpg';
    document.querySelector('.contentWrapper').prepend(collectionHeroImage);
  }

  // continue with homepage  

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

  // Krown gallery start - search for more than 2 p siblings containing images with size set to a value smaller than 340px and wrapps them in a block element (the rest is css)
  const fullArticle = document.getElementById("fullArticle");
  if ( fullArticle ) {
    const figures = fullArticle.querySelectorAll("figure");
    let galleryWrapper = null;
  
    figures.forEach((figure, index) => {
      const widthMatch = figure.getAttribute("style")?.match(/width:\s*(\d+)px/);
      const figureWidth = widthMatch ? parseInt(widthMatch[1], 10) : null;
      const nextElement = figure.nextElementSibling;
      
      if (figureWidth !== null && figureWidth < 300) {
        if (!galleryWrapper) {
          galleryWrapper = document.createElement("div");
          galleryWrapper.classList.add("krown-gallery");
          figure.before(galleryWrapper);
        }
        galleryWrapper.appendChild(figure);
  
        if (!nextElement || nextElement.tagName !== "FIGURE") {
          galleryWrapper = null;
        }
      } else {
        galleryWrapper = null;
      }
    });
  }
 
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
});