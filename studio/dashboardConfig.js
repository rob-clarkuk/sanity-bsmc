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
                  buildHookId: '5ffc565310a438b770c9163f',
                  title: 'Sanity Studio',
                  name: 'sanity-bsmc-studio',
                  apiId: '8a8dbe40-3b84-414b-84d6-92a8bc918f5e'
                },
                {
                  buildHookId: '5ffc565310a438b48cc91924',
                  title: 'Landing pages Website',
                  name: 'sanity-bsmc',
                  apiId: 'a9074011-27a8-4903-815d-81746d4ba11d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rob-clarkuk/sanity-bsmc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-bsmc.netlify.app', category: 'apps'}
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
