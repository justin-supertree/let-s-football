export const getBackground = (bgColor?: string) => {
  switch (bgColor) {
    case 'dark':
      return 'black';
    case 'bright':
      return 'white';
    case 'transparent':
      return 'transparent';
    default:
      return '#black';
  }
};
