export const getBackground = (bgColor?: string) => {
  switch (bgColor) {
    case 'dark':
      return 'black';
    case 'bright':
      return 'white';
    default:
      return '#black';
  }
};
