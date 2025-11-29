import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper";
import useWindowsStore from "#store/window";

const Image = () => {
  const { windows } = useWindowsStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target={"imgfile"} />
        <h2>{name}</h2>
      </div>

      <div>
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image,'imgfile')
export default ImageWindow;
