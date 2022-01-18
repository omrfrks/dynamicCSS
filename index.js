var bodyStyles
const dynamicCSS = {
  'sahne-color': '#FF0000',
  'chars-text-color': '#FF0000',
  'sahne-background-color': '#FF0000',
  'chars-background-color': '#FF0000',
  'chars-font-family': 'Arial',
  'sahne-font-family': 'Arial',
  'sahne-font-style': 'normal',
  'chars-font-style': 'normal',
  'sahne-font-decoration': 'none',
  'chars-font-decoration': 'none',
  'sahne-font-transform': 'none',
  'chars-font-transform': 'none',
  'sahne-font-size': 10,
  'chars-font-size': 10
}
document.addEventListener('DOMContentLoaded', function () {
  bodyStyles = document.documentElement.style
  const gui = new dat.GUI()
  setGUI(gui)
})

function cssChanged(id) {
  if (id.includes('font-size')) {
    bodyStyles.setProperty('--' + id, dynamicCSS[id] + 'px')
  } else {
    bodyStyles.setProperty('--' + id, dynamicCSS[id])
  }
}

function setGUI(gui) {
  gui.width=400;
  const colorsFolder = gui.addFolder('Colors')
  colorsFolder.addColor(dynamicCSS, 'sahne-color').onChange(() => cssChanged('sahne-color')).name('Sahne Text Rengi')
  colorsFolder.addColor(dynamicCSS, 'chars-text-color').onChange(() => cssChanged('chars-text-color')).name('Karakter Text Rengi')
  colorsFolder.addColor(dynamicCSS, 'sahne-background-color').onChange(() => cssChanged('sahne-background-color')).name('Sahne Arkaplan Rengi')
  colorsFolder.addColor(dynamicCSS, 'chars-background-color').onChange(() => cssChanged('chars-background-color')).name('Karakter Arkaplan Rengi')
  const fontsFolder = gui.addFolder('Fonts')
  fontsFolder.add(dynamicCSS, 'chars-font-family', {'Times New Roman':'Times New Roman', Arial:'Arial',Helvetica:'Helvetica'}).onFinishChange(()=>cssChanged('chars-font-family')).name('Karakter Font Tipi')
  fontsFolder.add(dynamicCSS, 'sahne-font-family', {'Times New Roman':'Times New Roman', Arial:'Arial',Helvetica:'Helvetica'}).onFinishChange(()=>cssChanged('sahne-font-family')).name('Sahne Font Tipi')
  fontsFolder.add(dynamicCSS, 'sahne-font-style', {normal:'normal', italic:'italic',oblique:'oblique'}).onFinishChange(()=>cssChanged('sahne-font-style')).name('Sahne Font Stili')
  fontsFolder.add(dynamicCSS, 'chars-font-style', {normal:'normal', italic:'italic',oblique:'oblique'}).onFinishChange(()=>cssChanged('chars-font-style')).name('Karakter Font Stili')
  fontsFolder.add(dynamicCSS, 'sahne-font-decoration', {none:'none',overline:'overline', 'line-through':'line-through',underline:'underline'}).onFinishChange(()=>cssChanged('sahne-font-decoration')).name('Sahne Font Dekarasyonu')
  fontsFolder.add(dynamicCSS, 'chars-font-decoration', {none:'none',overline:'overline', 'line-through':'line-through',underline:'underline'}).onFinishChange(()=>cssChanged('chars-font-decoration')).name('Karakter Font Dekarasyonu')
  fontsFolder.add(dynamicCSS, 'sahne-font-transform', {none:'none',uppercase:'uppercase', lowercase:'lowercase',capitalize:'capitalize'}).onFinishChange(()=>cssChanged('sahne-font-transform')).name('Sahne Font Transformu')
  fontsFolder.add(dynamicCSS, 'chars-font-transform', {none:'none',uppercase:'uppercase', lowercase:'lowercase',capitalize:'capitalize'}).onFinishChange(()=>cssChanged('chars-font-transform')).name('Karakter Font Transformu')
  fontsFolder.add(dynamicCSS, 'sahne-font-size',10,40,0.5 ).onChange(()=>cssChanged('sahne-font-size')).name('Sahne Font Size')
  fontsFolder.add(dynamicCSS, 'chars-font-size',10,40,0.5 ).onChange(()=>cssChanged('chars-font-size')).name('Karakter Font Size')



}
