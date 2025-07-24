function TransitionLink({ children, href, className, selector, delay = 300, ...props }) {
  return (
    <a href={href} className={className} data-transition-target={selector ?? '[data-transition-page="true"]'} data-delay={delay} {...props}>
      {children}
    </a>
  );
}

export default TransitionLink;
