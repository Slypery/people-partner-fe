function TransitionLink({ children, href, className, selector, delay = 300, ...props }) {
	return (
		<a href={href} className={className} data-transition-target={selector ?? '[data-transition-page="true"]'} data-delay={delay} {...props}>
			{children}
		</a>
	);
}

export function navigateTo(href, {
	selector = '[data-transition-page="true"]',
	delay = 300,
} = {}) {
	const a = document.createElement('a');
	a.href = href;
	a.setAttribute('data-transition-target', selector);
	a.setAttribute('data-delay', delay);

	a.style.display = 'none';
	document.body.appendChild(a);

	const event = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window,
	});

	a.dispatchEvent(event);
	document.body.removeChild(a);
}

export default TransitionLink;
