const { SiteClient } = require('datocms-client');

export default async function createPost(request, response) {
  if (request.method === 'POST') {
    const TOKEN = process.env.NEXT_PUBLIC_DATOCMS_FULL_ACCESS;
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "1016791",
      ...request.body,
    });

    response.json({
      post: record,
    });

    return;
  }
}