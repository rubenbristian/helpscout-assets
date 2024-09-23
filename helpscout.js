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

});