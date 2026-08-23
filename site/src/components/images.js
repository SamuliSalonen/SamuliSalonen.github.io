//onst images = require.context('./Assets/ehg-gallery', true);
let images = {};
const imageContext = require.context('./Assets/ehggallery', false, /\.(png|jpe?g|gif|svg)$/);
images = imageContext.keys()
/*
imageContext.keys().forEach((key) => {
  const imageName = key.replace('./', '');
  images[imageName] = imageContext(key);
});
*/
const imgs = [];//JSON.stringify(images);//[];
const imgInput = images;

for (let index = 0; index < imgInput.length; index++) {
    imgs.push(
//        "./Assets/ehg-gallery/" + imgInput[index].substring(2) + "  -"
        <img className = "gallery-image" src={require("./Assets/ehggallery/"+images[index].substring(2))}></img>
    );
}

export default imgs;
