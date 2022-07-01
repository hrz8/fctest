import fetch from 'node-fetch';

export const getImage = async (url: string): Promise<Buffer> => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const img = Buffer.from(buffer);
  return img;
}
