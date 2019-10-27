const links = {
  header: [
    { id: 0, title: 'JS',      to: '/js' },
    { id: 1, title: 'Webpack', to: '/wp' },
    { id: 2, title: 'React',   to: '/react' },
    { id: 3, title: 'Redux',   to: '/redux' },
    { id: 4, title: 'NodeJS',  to: '/nodejs' },
  ],

  js: [
    { id: 0,  title: 'Import/Export', to: '/js/export', },
    { id: 1,  title: 'Class',         to: '/js/class' },
    { id: 2,  title: 'Object',        to: '/js/object' },
    { id: 3,  title: 'Function',      to: '/js/function' },
    { id: 4,  title: 'Function II',   to: '/js/function2' },
    { id: 5,  title: 'Array',         to: '/js/array' },
    { id: 6,  title: 'Array II',      to: '/js/array2' },
    { id: 7,  title: 'Callback',      to: '/js/callback', divider: true },
    { id: 8,  title: 'Promise',       to: '/js/promise' },
    { id: 9,  title: 'Promise II',    to: '/js/promise2' },
    { id: 10, title: 'Fetch, Axios',  to: '/js/fetch' },
    { id: 11, title: 'DOM',           to: '/js/dom', divider: true },
    { id: 12, title: 'Events',        to: '/js/events' },
    { id: 13, title: 'Forms',         to: '/js/forms' },
    { id: 14, title: 'Storage X',     to: '/js/storage' },
    { id: 15, title: 'Script Tag',    to: '/js/script', divider: true  },
    { id: 16, title: 'Var/Let/Const', to: '/js/vars' },
    { id: 17, title: 'Types',         to: '/js/types' },
    { id: 18, title: 'String',        to: '/js/string' },
    { id: 19, title: 'Number',        to: '/js/number' },
    { id: 20, title: 'Boolean',       to: '/js/boolean' },
    { id: 21, title: 'Null & Un-ed',  to: '/js/null' },
    { id: 22, title: 'Math(+ / -)',   to: '/js/math' },
    { id: 23, title: 'Logic',         to: '/js/logic' },
    { id: 24, title: 'Cycles',        to: '/js/cycles' },
  ],

  webpack: [
    { id: 0,  title: 'Install',   to: '/wp/install' },
    { id: 1,  title: 'Config',    to: '/wp/config' },
    { id: 2,  title: 'JS-Babel',  to: '/wp/js' },
    { id: 3,  title: 'CSS',       to: '/wp/css' },
    { id: 4,  title: 'HTML',      to: '/wp/html' },
    { id: 5,  title: 'Images',    to: '/wp/img' },
    { id: 6,  title: 'Fonts',     to: '/wp/fonts' },
    { id: 7,  title: 'Markdown',  to: '/wp/md' },
    { id: 8,  title: 'Plugins',   to: '/wp/plugins' },
    { id: 9,  title: 'ESLint',    to: '/wp/eslint' },
    { id: 10, title: 'Editor',    to: '/wp/editor' },
    { id: 11, title: 'Structure', to: '/wp/structure' },
  ],

  react: [
    { id: 0,  title: 'Template',     to: '/react/template' },
    { id: 1,  title: 'Components',   to: '/react/components' },
    { id: 2,  title: 'JSX',          to: '/react/jsx' },
    { id: 3,  title: 'State',        to: '/react/state' },
    { id: 4,  title: 'Props',        to: '/react/props' },
    { id: 5,  title: 'PropTypes',    to: '/react/proptypes' },
    { id: 6,  title: 'Styling',      to: '/react/styling' },
    { id: 7,  title: 'Images',       to: '/react/images' },
    { id: 8,  title: 'Output Data',  to: '/react/output-data' },
    { id: 9,  title: 'Maping Data',  to: '/react/maping-data' },
    { id: 10, title: 'Routing',      to: '/react/routing' },
    { id: 11, title: 'Switcher',     to: '/react/switcher' },
    { id: 12, title: 'Transitions',  to: '/react/transitions' },
    { id: 13, title: 'Refs X',       to: '/react/refs' },
    { id: 14, title: 'Forms',        to: '/react/forms' },
    { id: 15, title: 'Events',       to: '/react/events' },
    { id: 16, title: 'Plugins',    to: '/react/plugins' },
    { id: 17, title: 'GatsbyJS',     to: '/react/gatsby-js' },
  ],

  redux: [
    { id: 0, title: 'Provider & enh.', to: '/redux/provider-enhancer' },
    { id: 1, title: 'Root reducer',    to: '/redux/root-reducer' },
    { id: 2, title: 'Single reducer',  to: '/redux/single-reducer' },
    { id: 3, title: 'Connect',         to: '/redux/connect' },
    { id: 4, title: 'Actions',         to: '/redux/actions' },
    { id: 5, title: 'Server API',      to: '/redux/server-api' },
    { id: 6, title: 'Fetch data',      to: '/redux/fetch-data' },
    { id: 7, title: 'Lifecycle',       to: '/redux/lifecycle' },
  ],

  nodejs: [
    { id: 0, title: 'Install / Nvm', to: '/nodejs/install' },
    { id: 1, title: 'Npm / Yarn',    to: '/nodejs/npm-yarn' },
    { id: 2, title: 'Package.json',  to: '/nodejs/package-json' },
    { id: 3, title: 'Browser-sync',  to: '/nodejs/browser-sync' },
    { id: 4, title: 'Express',       to: '/nodejs/express' },
  ]
};

export default links;
