const config = ((env) => {
  switch (env) {
    case 'production':
    case 'staging':
    case 'development':
    default:
      return {
        buttonName: 'Menu',
        title: 'Menu',
        search: 'Search',
        menu: [
          {
            name: 'Sample',
            description: 'Sample Page',
            icon: 'fa-universal-access',
            submenu: [
              {
                name: 'Sample One',
                link: '/sampleone',
                icon: 'fa-flask',
              },
              {
                name: 'Sample Two',
                link: '/sampletwo',
                icon: 'fa-dashboard',
              },
              {
                name: 'Sample Three',
                link: '/samplethree',
                icon: 'fa-comment',
              },
            ],
          },
        ],
      };
  }
})(process.env.NODE_ENV);

export default config;
