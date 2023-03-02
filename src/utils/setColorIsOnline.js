export const setColorIsOnline = props => {
  switch (props.isOnlineType) {
    case true:
      return 'rgba(39, 140, 53, 1)';
    case false:
      return 'rgba(199, 48, 48, 1)';
    default:
      return 'rgba(80, 80, 80)';
  }
};
