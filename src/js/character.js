setStatus( 'parsing characters ..' )
const containment = document.querySelector( 'contain-node#character' )
handleClick = ({ target }) => {
  switch( target.nodeName ) {
    case 'VIEW-TOGGLE':
      const characterNode = target.parentNode
      characterNode.classList.contains('full')
        ? characterNode.classList.remove('full')
        : characterNode.classList.add('full')  
      break
    default:
  }
}
containment.addEventListener( 'click', handleClick,false )

data.characters
  .filter( ({ name }) => name !== 'template' )
  .forEach( character => {
    const {
      tags = [],
      name = '???',
      data = {},
      notes = '',
      url = null
    } = character

    character.node = document.createElement( 'character-node' )
    character.node.innerHTML = `
      <name-node>${ name }</name-node>
      <data-node>${ JSON.stringify( data, null, 2 ) }</data-node>
      <notes-node>${ notes }</notes-node>
      <view-toggle/>
    `
    url && ( character.node.style.backgroundImage = `url('${ url }')` )
    tags.forEach( tag => character.node.classList.add( tag.toLowerCase().replace( ' ', '-' ) ) )
    containment.append( character.node )
  } )
const style = document.createElement( 'style' )
style.innerHTML = `
  view-toggle {
    --size: 2vmin;
    display: none;
    position: absolute;
    top: calc( var( --size ) * -0.1 );
    right: calc( var( --size ) * -0.1 );
    height: var( --size );
    width: var( --size );
    border-radius: 100vmax;
    background-color: #a0f;
    cursor: pointer;
  }
  view-toggle:hover {
    background-color: #f0f;
  }
  contain-node#character {
    padding: 1rem;
    border: 1px solid #a0f;
    position: relative;
    display: inline-block;
  }
  contain-node#character contain-node.data {
    height: 60vmin;
    width: 60vmin;
    border: 1px solid #fa0;
    position: relative;
    float: right;
  }
	character-node {
    position: relative;
    display: inline-block;
    border: 1px solid #333;
    width: 15vmin;
    height: 20vmin;
    margin: 0.25vmin;
    vertical-align: middle;
    background-size: cover;
    background-color: hsla( 000, 000%, 000%, 0.5 );
    opacity: 0.75;
    transition-duration: 500ms;
    transition-property: opacity;
  }
  character-node.full {
    position: fixed;
    width: 95vw;
    height: 95vh;
    left: 2.5vw;
    top: 2.5vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    background-color: hsla(045, 025%, 075%, 1);
  }
  character-node:hover {
    opacity: 1;
  }
  character-node:hover view-toggle {
    display: block;
  }
`
document.body.append( style )


/*
    const applyImage = async node => {

        // For testing purposes.
        // When extractor is complete, this will pull from file(s) containing these strings.
        let responseText = "tfw41630413403351000000hk"
        responseText = responseText.split( '' )
      
        const attributes = {
          race : responseText.shift(),
          gender : responseText.shift(),
          color : responseText.shift(),
          backHair : responseText.shift(),
          backEars : responseText.shift(),
          underCloth : responseText.shift(),
          cloth : responseText.shift(),
          topCloth : responseText.shift(),
          head : responseText.shift(),
          eyes : responseText.shift(),
          sculpt : responseText.shift(),
          nose : responseText.shift(),
          wrinkle : responseText.shift(),
          mouth : responseText.shift(),
          eyebrows : responseText.shift(),
          hairTop : responseText.shift(),
          ears : responseText.shift(),
          beard : responseText.shift(),
          hood : responseText.shift(),
          backDeco : responseText.shift(),
          skinDeco : responseText.shift(),
          eyeDeco : responseText.shift(),
          headDeco : responseText.shift(),
          hairColor : responseText.join( '' )
        }
      
        const portraitMarkup = generateCharacterPortraitMarkup( attributes )
        const li = document.createElement( 'li' )
        
        const container = document.createElement( 'dmhero-image' )
        container.innerHTML = portraitMarkup;
      
        li.append( container )
        node.querySelector( 'ul' ).prepend( li )
      }
      
      const generateCharacterPortraitMarkup = ( attributes ) => {
      
        const emptyAsset = 'http://dmheroes.com/assets/empty.png?0002'
        const assetHost = 'http://dmheroes.com/assets'
      
        const characterAssetPath = '/' + attributes.race + attributes.gender + '/'
        const clothingAssetPath = '/c/c_n'
        const decorationAssetPath = '/de/d_n_'
      
        return `<img src='${ (+attributes.hood !== 0 || +attributes.backHair === 0) && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.hairColor + "_back_hair" + attributes.backHair + ".png" }' style="padding-top: 0px; z-index: 2;" ><img src='${ (+attributes.hood !== 0 || +attributes.backEars === 0) && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_back_ears" + attributes.backEars + ".png" }' style="padding-top: 0px; z-index: 16;" ><img src='${ assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_torso.png" }' style="z-index: 3;" ><img src='${ +attributes.underCloth === 0 && emptyAsset || assetHost + clothingAssetPath + "_under_clothes" + attributes.underCloth + ".png" }' style="z-index: 4;" ><img src='${ +attributes.cloth === 0 && emptyAsset || assetHost + clothingAssetPath + "_clothes" + attributes.cloth + ".png" }' style="z-index: 5;" ><img src='${ +attributes.topCloth === 0 && emptyAsset || assetHost + clothingAssetPath + "_top_clothes" + attributes.topCloth + ".png" }' style="z-index: 6;" ><img src='${ assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_head" + attributes.head + ".png" }' style="padding-top: 0px; z-index: 7;" ><img src='${ +attributes.eyes === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_eyes" + attributes.eyes + ".png" }' style="padding-top: 0px; z-index: 8;" ><img src='${ +attributes.sculpt === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_sculpt" + attributes.sculpt + ".png" }' style="padding-top: 0px; z-index: 9;" ><img src='${ assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_nose" + attributes.nose + ".png" }' style="padding-top: 0px; z-index: 10;" ><img src='${ +attributes.wrinkle === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_wrinkle" + attributes.wrinkle + ".png" }' style="padding-top: 0px; z-index: 11;" ><img src='${ assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_mouth" + attributes.mouth + ".png" }' style="padding-top: 0px; z-index: 12;" ><img src='${ +attributes.eyebrows === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.hairColor + "_eyebrow" + attributes.eyebrows + ".png" }' style="padding-top: 0px; z-index: 13;" ><img src='${ (+attributes.hood !== 0 || +attributes.hairTop === 0) && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.hairColor + "_hair" + attributes.hairTop + ".png" }' style="padding-top: 0px; z-index: 15;" ><img src='${ +attributes.ears === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.color + "_ears" + attributes.ears + ".png" }' style="padding-top: 0px; z-index: 16;" ><img src='${ +attributes.beard === 0 && emptyAsset || assetHost + characterAssetPath + attributes.race + "_" + attributes.gender + "_" + attributes.hairColor + "_beard" + attributes.beard + ".png" }' style="padding-top: 0px; z-index: 17;" ><img src='${ +attributes.hood === 0 && emptyAsset || assetHost + clothingAssetPath + "n_hood" + attributes.hood + ".png" }' style="padding-top: 0px; z-index: 19;" ><img src='${ +attributes.backDeco === 0 && emptyAsset || assetHost + decorationAssetPath + "back_deco" + attributes.backDeco + ".png" }' style="" ><img src='${ +attributes.skinDeco === 0 && emptyAsset || assetHost + decorationAssetPath + "skin_deco" + attributes.skinDeco + ".png" }' style="" ><img src='${ +attributes.eyeDeco === 0 && emptyAsset || assetHost + decorationAssetPath + "eye_deco" + attributes.eyeDeco + ".png" }' style="" ><img src='${ (+attributes.hood !== 0 || +attributes.headDeco === 0) && emptyAsset || assetHost + decorationAssetPath + "head_deco" + attributes.headDeco + ".png" }' style="" >`
      
      }
*/