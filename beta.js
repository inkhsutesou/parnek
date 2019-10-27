( () => {
  const { forEach, push } = Array.prototype
  forEach.call(
    [ forEach, push ],
    method => {
      const { name } = method
      Array.prototype[ name ] = function ( ... etc ) {
        method.call(  this, ... etc )
        return this
      }
    } )
} )()
const setStatus = message => document.querySelector( 'status-node' ).innerHTML = message

// ============================================================================
//  Configuration
// ============================================================================
window.data = {}
const getData = async name => {
  const url = `./data/2019XXXX+isTesou+D&D_Parnek_${ name }.yaml?${ Math.random() }`
  Object.assign( data, await YAML.load( url ) )
}
// ( [ 'Lore', 'Places', 'Roadmap', 'Rules', 'Sessions', 'Characters' ] )
( [ 'Characters', 'Sessions' ] )
  .forEach( getData )

console.log(data);
// ============================================================================
//  Initialize
// ============================================================================
( () => {
  return

const init = async () => {

  setStatus( 'loading parnek data' )
  data = await YAML.load( dataUrl )
  console.log( dataUrl, data )
  setStatus( 'parnek loaded' )
  lessSetup()
  return

  const flagRX = /\[(.*?)\]/g
  const targetNode = document.getElementsByTagName( 'container-node' )[ 0 ]
  // body.KE.ALPHA
  document.body.classList.add( ... getCodes() )

  displayAllChores()
  lessSetup()
  await populateMarkDown(targetNode)

  const nodeList = Array.from( targetNode.querySelectorAll( '*' ) )
  const h2List = Array.from( targetNode.querySelectorAll( 'h2' ) )

  nodeList
    .forEach( node => {
      const textNode = node.textNodes[ 0 ]
      if ( !textNode ) return
      const { textContent } = textNode
      let flagList = flagRX.exec( textContent )
      textNode.textContent = textContent.replace( flagRX, '' )
      if ( !flagList ) return
      flagList = flagList[ 1 ].split( '' )
      flagList.forEach( key => {
        const data = codeMap[ key ]
        const { className, method } = data
        if ( className ) {
          node.classList.add( className.replace( ' ', '-' ) )
        }
        if ( method ) {
          method( node, data )
        }
      } )
    } )

  h2List
    .filter( node => node.innerHTML.includes( 'People' ) )[ 0 ]
    .nextElementSibling
    .children[ 0 ]
    .children
    .toArray()
    .forEach( node => applyToggle( node ) )

}

// ============================================================================
//  Utilities
// ============================================================================

const onClickExpand = event => {
  const { currentTarget } = event
  const { parentNode } = currentTarget
  event.preventDefault()
  parentNode.dataset.isExpand = !parentNode.dataset.isExpand.includes( 'true' )

}

const displayAllChores = () => {
  getCodes()
    .filter( code => teamList.includes( code ) )
    .forEach( teamName => {
      const team = users[ teamName ]
      displayChores( team )
    } )
}
const displayChores = ({ playerList, dayIndex }) => {
  const playerN = playerList.length
  const date = new Date()
  const day = 1000 * 60 * 60 * 24
  const week = day * 7
  const now = date.getTime()
  const currentDay = date.getDay()
  const weekBegin = ( ( now - ( now % day) ) - currentDay * day )
  const playDate = new Date( weekBegin + dayIndex * day )
  const nextDate = new Date( playDate.getTime() + week )
  const isPassed = new Date().getDay() > dayIndex
  const turn = ((now - ( now % week )) / week % playerN ) + isPassed

  const choreMessage = ( `
    This week: ${ playDate.toDateString() }
      ${ playerList[ ( turn + 0 ) % playerN ].name }: ${ choreList[ 0 ] }
      ${ playerList[ ( turn + 1 ) % playerN ].name }: ${ choreList[ 1 ] }
      ${ playerList[ ( turn + 2 ) % playerN ].name }: ${ choreList[ 2 ] }

    Next week: ${ nextDate.toDateString() }
      ${ playerList[ ( turn + 1 ) % playerN ].name }: ${ choreList[ 0 ] }
      ${ playerList[ ( turn + 2 ) % playerN ].name }: ${ choreList[ 1 ] }
      ${ playerList[ ( turn + 3 ) % playerN ].name }: ${ choreList[ 2 ] }
  ` )
  const choreNode = document.createElement( 'chore-node' )
  choreNode.innerHTML = choreMessage
  document.body.append( choreNode )
}

const lessSetup = () => {
  const lessStyleNode = document.createElement( 'link' )
  const lessScriptNode = document.createElement( 'script' )

  lessStyleNode.setAttribute( 'rel', 'stylesheet/less' )
  lessStyleNode.setAttribute( 'type', 'text/css' )
  lessStyleNode.setAttribute( 'href', `./src/css/beta.less?${ Math.random() }` )
  lessScriptNode.setAttribute( 'src', './lib/js/less.min.js' )

  document.head.append( lessStyleNode, lessScriptNode )
}

const populateMarkDown = async ( targetNode ) => {
  const md = markdownit()
  const response = await fetch(`./data/${ parnekVersion }+isTesou+D&D_Parnek.md?${ Math.random() }`)
  const responseText = await response.text()
  targetNode.innerHTML = md.render( responseText )
}

const applyImage = async node => {
  const { textNodes } = node
  const fileName = textNodes[0].textContent
      .replace(/^\s{0,1}([A-z\s\']*),{0,1}.*\n{0,1}$/, '$1')
      .replace( ' ', '_' )
      .toLowerCase()
      + '.json'
  const url = `./assets/portraits/portrait_${ fileName }?${ Math.random() }`
  const response = await fetch( url )
  const responseText = await response.text()
  const imageData = JSON.parse( responseText )
  const li = document.createElement( 'li' )
  const container = document.createElement( 'dmhero-image' )
  imageData.forEach( ({ className, src, style }) => {
    const img = document.createElement( 'img' )
    img.setAttribute( 'style', style )
    img.setAttribute('src', src )
    img.classList.add( className )
    container.prepend( img )
  } )
  li.append( container )
  node.querySelector( 'ul' ).prepend( container )
}

const applyAvatar = ( node, { avatarURL } ) => {
  const img = document.createElement( 'img' )
  img.classList.add( 'avatar' )
  img.setAttribute( 'src', avatarPrefix + avatarURL )
  node.prepend( img )
}

const applyToggle = node => {
  const { tagName } = node
  const clickNode = document.createElement( 'toggle-text' )
  node.classList.add( 'toggle' )
  clickNode.innerHTML = node.textNodes[0].textContent
  clickNode.addEventListener( 'click', onClickExpand, false )
  node.textNodes[0].textContent = ''
  node.prepend( clickNode )
  node.dataset.isExpand = false

  if ( !tagName.match( /^H\d{1}$/ ) ) return

  const containerNode = document.createElement( 'div' )
  const childList = Array.from( node.parentNode.children )
  const startIndex = childList.indexOf( node )

  let endIndex
  let endNode

  childList.splice( 0, startIndex + 1 )
  childList
    .some( ( siblingNode, index ) => {
      if ( siblingNode.tagName.includes( tagName ) ) {
        endNode = siblingNode
        endIndex = index
        return true
      }
    } )
  childList.splice( endIndex )
  containerNode.append( ... childList )
  node.parentNode.insertBefore( containerNode, endNode )
}

( () => {
  function returnArray () {
    return Array.from( this )
  }

  Object.defineProperty( HTMLCollection.prototype, 'toArray', {
    value: returnArray
  } )
} )()

const getCodes = () => {
  return window.location.search
    .replace( '?', '' )
    .replace( `DM`, 'ERROR' )
    .replace( `%F0%9F%91%81`, 'DM' )
    .split( '&' )
    .filter( isNotEmpty => isNotEmpty )
}

( () => {
  function getTextNodes () {
    return Array.from( this.childNodes )
      .filter( ({ nodeType }) => nodeType === Node.TEXT_NODE )
  }

  Object.defineProperty( HTMLElement.prototype, 'textNodes', {
    get: getTextNodes
  } )
} )()


const avatarPrefix = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails'
const users = {
  dungeonMaster: {
    name: 'Inkh Su Tesou',
    character: 'Dungeon Master',
    diet: 'Omnivore',
    base: 'Manhattan, Chelsea'
  },
  ALPHA: {
    dayIndex: 5, // Friday
    playerList: [
      {
        name: 'Josie',
        character: 'Kelaria Lightfoot',
        diet: 'Omnivore',
        base: 'Queens, Flushing',
        color: 'hsla( 204, 91%, 33%, 1.0 )'
      },
      {
        name: 'Ali',
        character: 'Vyse Vosenhaut',
        diet: 'Omnivore',
        base: 'Manhattan, Midtown'
      },
      {
        name: 'Laura',
        character: 'Mugnila Coppice',
        diet: 'Pescatarian',
        base: 'Manhattan, Upper West Side'
      }
    ]
  },
  OMEGA: {
    dayIndex: 3, // Wednesday
    playerList: [
      {
        name: 'Evelyn',
        character: 'Adamah Machinist II',
        diet: 'Vegetarian',
        base: 'Manhattan, Chelsea'
      }
    ]
  }
}

const choreList = [ 'Main Dish', 'Side Dish', 'Drink / Snack' ]
const teamList = [ 'ALPHA', 'OMEGA' ]

const codeMap = {
  k: {
    code: 'KE',
    name: 'Kelaria Brightleaf',
    avatarURL: '/10/85/150/150/636339381754406274.png',
    method: applyAvatar
  },
  v: {
    code: 'VY',
    name: 'Vyse Vosenhaut',
    avatarURL: '/17/354/150/150/636377876666593924.jpeg',
    method: applyAvatar
  },
  m: {
    code: 'MU',
    name: 'Mugnila Coppice',
    avatarURL: '/17/974/150/150/636378928531490132.png',
    method: applyAvatar
  },
  a: {
    code: 'AD',
    name: 'Adamah Machinist II',
    avatarURL: '/6512/675/235/150/636983755581789019.jpeg',
    method: applyAvatar
  },
  x: {
    code: 'ALPHA',
    className: 'party-alpha',
    method: ( node, data ) => {
      if ( node.nodeName.match( /^H\d{1}$/ ) ) return
      applyAvatar( node, codeMap.k )
      applyAvatar( node, codeMap.v )
      applyAvatar( node, codeMap.m )
    }
  },
  o: {
    code: 'OMEGA',
    className: 'party-omega'
  },
  z: { className: 'all' },
  "+": {
    method: applyToggle
  },
  "<": { className: 'voice-icon' },
  " ": {},
  "?": {
    method: applyImage
  }
}
for ( key in codeMap ) {
  const { name } = codeMap[ key ]
  if ( name ) {
    codeMap[ key ].className = name
      .replace( ' ', '-' )
      .toLowerCase()
  }
}

init()
})()