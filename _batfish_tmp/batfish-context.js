
          export const batfishContext = {
            selectedConfig: {
              siteBasePath: '',
              siteOrigin: '',
              hijackLinks: true,
              manageScrollRestoration: true
            },
            routes: [{
            path: '/',
            getPage: () => import(
              /* webpackChunkName: "home" */
              '/Users/madisondraper/work-repos/react-tweet/_batfish_tmp/_.js'
            ),
            
            
          },{
            path: '/404/',
            getPage: () => import(
              /* webpackChunkName: "not-found" */
              '/Users/madisondraper/work-repos/react-tweet/_batfish_tmp/_404.js'
            ),
            
            is404: true,
          }],
            notFoundRoute: {
            path: '/404/',
            getPage: () => import(
              /* webpackChunkName: "not-found" */
              '/Users/madisondraper/work-repos/react-tweet/_batfish_tmp/_404.js'
            ),
            
            is404: true,
          }
          };