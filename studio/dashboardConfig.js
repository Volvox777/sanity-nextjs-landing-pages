export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6181fa7fa6bbdc2e0a31471b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c7uptv4a',
                  apiId: 'e30d9ed0-2790-460d-b60f-1c16d35bd504'
                },
                {
                  buildHookId: '6181fa7f7b53a43c26f9e56b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-du66ev67',
                  apiId: 'a2c94c45-0e14-46eb-934e-a113ea95a342'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Volvox777/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-du66ev67.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
