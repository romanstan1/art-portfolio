
const initialState = {
  posts: [
    {
      title: 'Performance Ecommerce',
      description: 'This is a prototype, mobile-only, PWA, server-side rendered, ecommerce app - made following Google\'s RAIL performance model. To better replicate a production ecommerce site, it uses a real-time database, storage bucket and anonymous auth provided by Firebase. <br /> <br />Additional features include Voice search functionality via the Web Speech API and barcode scanning to quickly find products for returning customers.',
      technologies: ['Next.js', 'React', 'Redux', 'Firebase', 'Styled Components', 'Material UI'],
      role: ['Sole developer', 'UX & designer'],
      link: 'https://performance-demo-ygknpgnsls.now.sh/'
    },
    {
      title: 'Skills Network',
      description: 'This is a prototype, customisable, network visualisation that uses mock company data. It displays the complex relationships between individuals, teams and skillsets within an organisation. <br/><br/> To improve the frame rate of the visualisation, the nodes are SVG elements whilst the links are rendered using HTML5 Canvas. The data is fetched from a decoupled server.',
      technologies: [ 'D3.js', 'React', 'Redux', 'Node.js', 'Express'],
      role: ['Sole developer', 'UX & designer'],
      link: 'https://skill-net.firebaseapp.com/'
    },
    {
      title: 'Product Discovery',
      description: 'This prototype app blends together a number of native mobile features available on the web, in attempt to reimagine product discovery. It uses touch gestures, 60fps animations and CGI images to achieve this. <br /><br /> Some additonal features that have been used include the Vibration API, Payment Request API and the mobile device\'s Accelerometer - which can rotate the 3D images.',
      technologies: [ 'React', 'Redux', 'glTF 3D Images', 'React Spring', 'Three.js & WebGl'],
      role: ['Sole developer','UX & designer'],
      link: 'https://ecom-animation.firebaseapp.com/'
    },
    {
      title: 'ThreeJS Experiments',
      description: 'Just some fun with ThreeJS. <br /><br /> Attempting to make a 3D Snake game and also a 3D terrain.',
      technologies: ['React', 'Three.js'],
      role: ['Sole developer'],
      link: 'https://three-experiments.firebaseapp.com'
    }
  ]
};

export default (state=initialState, action) => {
  switch(action.type){
    default: return state;
  }
};
