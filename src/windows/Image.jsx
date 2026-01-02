import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window.js";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2 className="text-sm font-medium truncate">{name}</h2>
      </div>

      <div className="bg-white h-full overflow-auto flex items-center justify-center p-5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain rounded"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageFileWindow;