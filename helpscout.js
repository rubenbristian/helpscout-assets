document.addEventListener('DOMContentLoaded', function() {

	var elContentArea = document.getElementById('contentArea');
  
  // Add preset names
  

  const presetNames = {
    'Seventh': 'Seventh, (coming soon: Oak, Nora)',
    'Local': 'Local, Soleway, Caffeine, Lively',
    'Borders': 'Borders, Objekts, Readers, Folio, Mosaic',
    'Combine': 'Combine, Gadget, Blush, Ring, Bites',
    'Highlight': 'Highlight, Single, Brush',
    'Split': 'Split, Drawer, Nomad',
    'Kingdom': 'Kingdom, Queen, Prince'
  };

  const homepageCollectionTitles = document.querySelectorAll('#collection-936, #collection-632, #collection-759, #collection-657, #collection-370, #collection-550, #collection-463');
  homepageCollectionTitles.forEach(title => {

    title.querySelector('a').innerHTML = `${title.querySelector('a').innerHTML} theme collection`;

    let selectedPreset = '';

    if ( title.id === 'collection-936' ) {
      selectedPreset = 'Seventh';
    } else if ( title.id === 'collection-632' ) {
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

    if ( selectedPage.id === 'seventh' ) {
      collectionPageDom.innerHTML = `<span class="page-banner-title__heading">Seventh theme collection</span><span class="page-banner-title__caption">Including presets: ${presetNames['Seventh']}</span>`;
      document.querySelector('#main-content h1:first-child').innerHTML = `${document.querySelector('#main-content h1:first-child').innerHTML} <span class="preset-names">Including presets: ${presetNames['Seventh']}</span>`;
      document.querySelector('#main-content').insertBefore(collectionPageDom, document.querySelector('#main-content').firstChild);
    } else if ( selectedPage.id === 'local' ) {
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

  // collection page banners & category blocks

  const themeCollections = {
    'seventh': {
      path: 'collection/936-seventh',
      hero: 'seventh_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/939-theme-settings' },
        { name: 'Header & Footer', url: '/category/987-header-footer' },
        { name: 'Sections', url: '/category/940-sections-pages' },
        { name: 'Cards', url: '/category/985-cards' },
        { name: 'Blocks', url: '/category/941-cards-blocks' },
        { name: 'Pages', url: '/category/986-pages' },
        { name: 'Video Guides', url: '/category/988-video-guides' }
      ]
    },
    'local': {
      path: 'collection/632-local',
      hero: 'local_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/791-theme-settings' },
        { name: 'Header & Footer', url: '/category/797-header-footer' },
        { name: 'Products & Collections', url: '/category/802-products-collections' },
        { name: 'Sections & Pages', url: '/category/807-sections-pages' },
        { name: 'Video Guides', url: '/category/851-video-guides' },
        { name: 'FAQ', url: '/category/895-faq' }
      ]
    },
    'borders': {
      path: 'collection/759-borders',
      hero: 'borders_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/765-theme-settings' },
        { name: 'Header & Footer', url: '/category/766-header-footer' },
        { name: 'Products & Collections', url: '/category/763-products-collections' },
        { name: 'Sections & Pages', url: '/category/762-sections' },
        { name: 'Video Guides', url: '/category/869-video-guides' }
      ]
    },
    'combine': {
      path: 'collection/657-combine',
      hero: 'combine_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/812-theme-settings' },
        { name: 'Header & Footer', url: '/category/818-header-footer' },
        { name: 'Products & Collections', url: '/category/822-product-collections' },
        { name: 'Sections & Pages', url: '/category/826-sections-pages' },
        { name: 'Video Guides', url: '/category/852-video-guides' },
        { name: 'FAQ', url: '/category/892-faq' }
      ]
    },
    'split': {
      path: 'collection/370-split',
      hero: 'split_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/853-theme-settings' },
        { name: 'Sections & Pages', url: '/category/859-sections-pages' },
        { name: 'Header & Footer', url: '/category/858-header-footer' },
        { name: 'Video Guides', url: '/category/862-video-guides' }
      ]
    },
    'highlight': {
      path: 'collection/550-highlight',
      hero: 'highlight_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/840-theme-settings' },
        { name: 'Sections & Pages', url: '/category/845-sections-pages' },
        { name: 'Video Guides', url: '/category/849-video-guides' }
      ]
    },
    'kingdom': {
      path: 'collection/463-kingdom',
      hero: 'kingdom_hero',
      categories: [
        { name: 'Theme Settings', url: '/category/829-theme-settings' },
        { name: 'Sections & Pages', url: '/category/836-sections-pages' },
        { name: 'Video Guides', url: '/category/850-video-guides' }
      ]
    }
  };
  
  const baseUrl = 'https://rubenbristian.github.io/helpscout-assets/img/';
  const contentWrapper = document.querySelector('.contentWrapper');
  
  const currentTheme = Object.values(themeCollections).find(
    theme => document.location.pathname.includes(theme.path)
  );
  
  if (currentTheme && contentWrapper) {
  
    // Hero image
    const collectionHeroImage = document.createElement('img');
    collectionHeroImage.className = 'collection-hero-image';
    collectionHeroImage.width = '1600';
    collectionHeroImage.height = '1100';
    collectionHeroImage.sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 840px';
    collectionHeroImage.srcset = `${baseUrl}${currentTheme.hero}_1160.jpg 1160w, ${baseUrl}${currentTheme.hero}_1620.jpg 1620w`;
    collectionHeroImage.src = `${baseUrl}${currentTheme.hero}_1620.jpg`;
    contentWrapper.prepend(collectionHeroImage);
  
    // Categories
    if (currentTheme.categories.length) {
      const categoriesDiv = document.createElement('div');
      categoriesDiv.className = 'collection-hero-categories';
      categoriesDiv.innerHTML = currentTheme.categories.map(cat =>
        `<a class="category" href="${cat.url}"><h3>${cat.name}</h3></a>`
      ).join('');
      contentWrapper.appendChild(categoriesDiv);
    }
  
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

  // add Vevol Media form

  (() => {
    // guard: URL check
    if (!window.location.href.includes('668-custom-work')) return;
  
    const anchor = document.getElementById('-ItG9S');
    if (!anchor) return;
  
    // create container for the form
    const container = document.createElement('div');
    container.id = 'hubspot-form';
  
    // insert AFTER the anchor element
    anchor.insertAdjacentElement('afterend', container);
  
    const loadForm = () => {
      if (!window.hbspt || !window.hbspt.forms) return;
  
      window.hbspt.forms.create({
        portalId: '143516866',
        formId: 'caf5a175-b5fe-43a9-85f4-a7656f7c17fa',
        region: 'eu1',
        target: '#hubspot-form'
      });
    };
  
    // load HubSpot script only once
    if (window.hbspt) {
      loadForm();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = loadForm;
      document.head.appendChild(script);
    }
  })();
  
});