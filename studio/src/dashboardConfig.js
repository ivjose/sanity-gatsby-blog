export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec0ea109a08503983e50d61',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sauqfiw1',
                  apiId: '8dadfdb9-dbb5-4e5b-9290-8b6ae4a65842'
                },
                {
                  buildHookId: '5ec0ea10ff6458e0481953e7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mi9riryn',
                  apiId: 'c002128c-8a4e-4aab-95c1-9f6e5dd51bee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivjose/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mi9riryn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
