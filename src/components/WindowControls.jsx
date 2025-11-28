import useWindowsStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowsStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
