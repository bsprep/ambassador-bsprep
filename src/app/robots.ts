import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/terms', '/privacy', '/cookies', '/guidelines', '/llms.txt'],
      disallow: ['/dashboard/', '/admin/'],
    },
    sitemap: 'https://ambassador.bsprep.in/sitemap.xml',
  }
}
