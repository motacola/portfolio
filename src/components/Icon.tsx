interface IconProps {
  name: 'email' | 'phone' | 'location' | 'linkedin';
  title?: string;
  className?: string;
}

const Icon = ({ name, title, className }: IconProps) => (
  <svg
    aria-hidden={title ? undefined : 'true'}
    role={title ? 'img' : undefined}
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
  >
    {title ? <title>{title}</title> : null}
    <use href={`/icons.svg#icon-${name}`} />
  </svg>
);

export default Icon;
