import type { ReactElement } from 'react';

interface PropertyContainerProps {
  children: ReactElement[] | ReactElement;
  padding?: string;
  margin?: string;
}

export default function PropertyContainer({
  children,
  padding = 'px-6 lg:px-8',
  margin = 'mt-32',
}: PropertyContainerProps) {
  return (
    <section
      className={`${padding} ${margin} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8`}
    >
      {children}
    </section>
  );
}
