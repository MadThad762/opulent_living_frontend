// darkModeToggle.js

// use this in root.tsx to initialize dark mode
/* useEffect(() => {
    // Initialize dark mode and get the cleanup function
    const cleanup = initializeDarkMode();

    // Run the cleanup when the component unmounts
    return cleanup;
  }, []); */

export const initializeDarkMode = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const bodyElement = document.querySelector('body');

  const setDarkModeClass = (e) => {
    if (e.matches) {
      bodyElement.classList.add('dark');
    } else {
      bodyElement.classList.remove('dark');
    }
  };

  setDarkModeClass(darkModeMediaQuery);

  darkModeMediaQuery.addEventListener('change', setDarkModeClass);

  // To be used for cleanup
  return () => {
    darkModeMediaQuery.removeEventListener('change', setDarkModeClass);
  };
};
