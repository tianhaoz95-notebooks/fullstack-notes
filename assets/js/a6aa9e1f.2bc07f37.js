(self.webpackChunkfullstack_notes=self.webpackChunkfullstack_notes||[]).push([[89],{4428:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var r=t(7294),l=t(2263),n=t(2611),i=t(3146),s=t(6742),m=t(4973);var o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(5601),g=t(6700);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.default)().siteConfig.title,d=a.blogDescription,u=a.blogTitle,p="/"===a.permalink?m:u;return r.createElement(n.Z,{title:p,description:d,wrapperClassName:g.kM.wrapper.blogPages,pageClassName:g.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(c.Z,{sidebar:s})),r.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a})))))}},3146:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(7294),l=t(6010),n=t(3905),i=t(4973),s=t(6742),m=t(3541),o=t(1217),c="blogPostTitle_GeHD",g="blogPostDate_fNvV",d=t(6700);var u=function(e){var a,t,u=(a=(0,d.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,v=e.frontMatter,E=e.metadata,h=e.truncated,b=e.isBlogPostPage,_=void 0!==b&&b,N=E.date,f=E.formattedDate,k=E.permalink,Z=E.tags,T=E.readingTime,w=v.author,M=v.title,L=v.image,I=v.keywords,P=v.author_url||v.authorURL,x=v.author_title||v.authorTitle,y=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:I,image:L}),r.createElement("article",{className:_?void 0:"margin-bottom--xl"},(t=_?"h1":"h2",r.createElement("header",null,r.createElement(t,{className:(0,l.Z)("margin-bottom--sm",c)},_?M:r.createElement(s.Z,{to:k},M)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:N,className:g},f,T&&r.createElement(r.Fragment,null," \xb7 ",u(T)))),r.createElement("div",{className:"avatar margin-vert--md"},y&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:P},r.createElement("img",{src:y,alt:w})),r.createElement("div",{className:"avatar__intro"},w&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(s.Z,{href:P},w)),r.createElement("small",{className:"avatar__subtitle"},x)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:m.Z},p)),(Z.length>0||h)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var a=e.label,t=e.permalink;return r.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:E.permalink,"aria-label":"Read more about "+M},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var r=t(7294),l=t(6010),n=t(6742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",o="sidebarItem_2UVv",c="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function d(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:s},a.title),r.createElement("ul",{className:m},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:g},e.title))}))))}}}]);