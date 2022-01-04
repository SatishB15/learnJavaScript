function resizeImage() {
    let Url = document.getElementById('url').value;
    let Height = document.getElementById('height').value;
    let Width = document.getElementById('width').value;
    let Image = document.getElementById('image');
    Image.src = Url;
    Image.height = Height;
    Image.width = Width;
}