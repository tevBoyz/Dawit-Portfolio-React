import { useTheme } from '../context/ThemeContext';

const BaseLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-bg text-text ${theme}`}>
      {children}
    </div>
  );
};

export default BaseLayout;