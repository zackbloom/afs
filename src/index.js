import button from './components/button.css'
import input from './components/input.css'

const components = { button, input }

addEventListener('fetch', event => {
 event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const requestedComponentsString = new URL(request.url).searchParams.get('components')
  if (!requestedComponentsString)
    return new Response("You must specify components query parameter", {status: 400})

  const requestedComponents = requestedComponentsString.split(',')

  console.log(requestedComponents)

  let out = ""
  for (let i=0; i < requestedComponents.length; i++){
    const componentName = requestedComponents[i].trim()

    if (components[componentName])
      out += components[componentName] + "\n"
    else
      return new Response("Component not found", {status: 404})
  }

  return new Response(out, {
    headers: {
      'Content-Type': 'text/css'
    }
  })
 }

